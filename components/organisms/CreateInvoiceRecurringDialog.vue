<template>
  <v-dialog
    v-model="value"
    width="500"
    @update:return-value="$refs.form.resetForm()"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-card-title class="headline" primary-title>
        {{ $t('payments.createInvoiceRecurring') }}
      </v-card-title>

      <v-card-text @keydown.enter="createInvoice">
        <CreateInvoiceRecurringForm
          :key="userId"
          ref="form"
          v-model="form"
          :is-loading="isLoading"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeDialog">
          {{ $t('button.cancel') }}
        </v-btn>
        <v-btn
          :disabled="!form.valid || isLoading"
          :loading="busy"
          color="primary"
          @click="createInvoiceRecurring"
        >
          {{ $t('payments.createInvoiceRecurring') }}
        </v-btn>
      </v-card-actions>

      <Loader v-if="isLoading" />
      <div v-else></div>
    </v-card>
  </v-dialog>
</template>

<script>
import CreateInvoiceRecurringForm from '~/components/forms/CreateInvoiceRecurringForm';
import { mapState } from 'vuex';
import Loader from '~/components/atoms/Loader';

export default {
  components: {
    CreateInvoiceRecurringForm,
    Loader,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    busy: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      form: {
        valid: false,
        data: {},
      },
      isLoading: false,
    };
  },
  computed: {
    ...mapState({
      users: state => state.users.users,
      demoUsers: state => state.users.demoUsers,
    }),
    cities() {
      return this.$store.getters['config/citiesArray'];
    },
  },
  watch: {
    userId: {
      async handler() {
        let selectedUser = this.demoUsers.find(user => user.id === this.userId);

        if (!selectedUser) {
          selectedUser = this.users.find(user => user.id === this.userId);
        }

        if (!selectedUser) return;

        const userDetail = await this.fetchUserDetail(selectedUser.id);

        const billingInfo = userDetail.billing_address;

        const attributes = userDetail.attributes;

        this.form.data = {
          email: billingInfo?.email,
          name: billingInfo?.name,
          city_id: billingInfo?.city_id,
          street: billingInfo?.address_line_1,
          province: billingInfo?.province,
          postal_code: billingInfo?.postal_code,
          stripe_user_id: attributes?.stripe_user_id,
          phone: billingInfo?.phone,
          invoiceItem: '',
          price: null,
          days_until_due: 30,
          selectedDay: null,
        };
      },
    },
  },
  methods: {
    async fetchUserDetail(id) {
      try {
        this.isLoading = true;

        const { data } = await this.$axios.get(`/users/${id}`);
        return data;
      } catch (error) {
        this.$snack.show('Failed to fetch detail data', 'error');
      } finally {
        this.isLoading = false;
      }
    },
    closeDialog() {
      this.$refs.form.resetForm();
      this.$emit('close');
    },

    createInvoiceRecurring() {
      this.$refs.form.validate();

      if (!this.form.valid) return;

      this.$emit('submit', {
        ...this.form.data,
        userId: this.userId,
      });
    },
  },
};
</script>
