<template>
  <v-dialog
    v-model="value"
    width="500"
    @update:return-value="$refs.editForm.resetForm()"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-card-title class="headline" primary-title>
        Edit Email Contact
      </v-card-title>

      <v-card-text @keydown.enter="createUser">
        <MailingListAddressForm ref="editForm" v-model="form" />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeCreateDialog"> cancel </v-btn>
        <v-btn
          color="primary"
          :loading="busy"
          :disabled="!form.valid || !form.addPermission"
          @click="addEmail"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import MailingListAddressForm from '~/components/forms/MailingListAddressForm';
import _pick from 'lodash/pick';

export default {
  components: {
    MailingListAddressForm,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    address: {
      type: Object,
      default: () => {},
    },
    busy: {
      type: Boolean,
      default: false,
    },
    limitReached: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        valid: false,
        data: {
          family_name: null,
          given_name: null,
          email: null,
          tags: [],
        },
        addPermission: false,
      },
    };
  },
  watch: {
    address: {
      handler(newAddr) {
        this.$nextTick(() => {
          this.form = {
            ...this.form,
            data: _pick(newAddr, [
              'given_name',
              'family_name',
              'email',
              'tags',
              'status',
            ]),
          };
        });
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    closeCreateDialog() {
      this.$refs.editForm.resetForm();
      this.$emit('close');
    },

    addEmail() {
      this.$refs.editForm.validate();
      if (!this.form.valid) return;
      if (!this.form.addPermission) {
        this.form.valid = false;
        return;
      }

      if (
        this.limitReached &&
        this.form.data.status === 'ok' &&
        this.address.status !== this.form.data.status
      ) {
        this.$snack.show(
          'Mailing list limit reached, you cannot use the "ok" status.',
        );
        return;
      }

      if (!Array.isArray(this.form.data.tags)) {
        this.form.data.tags = [this.form.data.tags];
      }

      this.$emit('submit', this.form.data);
    },
  },
};
</script>

<style></style>
