<template>
  <div
    class="d-flex flex-column justify-content-between align-items-start my-4"
  >
    <div>
      <slot name="left">
        <span class="headline"> {{ $t('billing.billingAddress') }} </span>
      </slot>
    </div>

    <BillingAddressForm ref="form" v-model="form" :is-loading="isLoading" />

    <v-btn
      v-if="!isLoading"
      :disabled="!form.valid || isLoading"
      class="mt-2"
      color="primary"
      @click="save"
    >
      <v-icon left> mdi-content-save </v-icon>
      {{ $t('button.save') }}
    </v-btn>
  </div>
</template>

<script>
import BillingAddressForm from '~/components/forms/BillingAddressForm';

export default {
  components: { BillingAddressForm },
  data() {
    return {
      isLoading: false,
      form: {
        valid: false,
        data: {
          contact_name: '',
          name: '',
          address_line_1: '',
          province: '',
          city_id: '',
          postal_code: '',
          country: 'CA',
          phone: '',
          email: '',
        },
      },
    };
  },
  computed: {
    cities() {
      return this.$store.getters['config/citiesArray'];
    },
    canSave() {
      return this.form.valid;
    },
  },
  async created() {
    const userDetail = await this.fetchUserDetail();

    const billingInfo = userDetail.billing_address;

    const attributes = userDetail.attributes;

    this.form.data = {
      contact_name: billingInfo?.contact_name || '',
      phone: billingInfo?.phone || [],
      email: billingInfo?.email || '',
      name: billingInfo?.name || '',
      city_id: billingInfo?.city_id || '',
      address_line_1: billingInfo?.address_line_1 || '',
      province: billingInfo?.province || '',
      postal_code: billingInfo?.postal_code || '',
      stripe_user_id: attributes?.stripe_user_id || '',
    };
  },
  methods: {
    async fetchUserDetail() {
      try {
        this.isLoading = true;

        const { data } = await this.$axios.get('/auth/me');

        return data;
      } catch (error) {
        this.$snack.show('Failed to fetch detail data', 'error');
      } finally {
        this.isLoading = false;
      }
    },
    async save() {
      try {
        this.isLoading = true;

        await this.$axios.$post('/account/billing-address', this.form.data);

        this.$snack.show('Saved successfully', 'success');
      } catch (error) {
        this.$snack.show('Saving error', 'error');
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
