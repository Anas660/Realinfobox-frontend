<template>
  <v-dialog
    v-model="value"
    width="500"
    @update:return-value="$refs.addForm.resetForm()"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-card-title class="headline" primary-title>
        Add Email Contact
      </v-card-title>

      <v-card-text @keydown.enter="addEmail">
        <MailingListAddressForm ref="addForm" v-model="form" />
        <!-- <v-alert v-if="error" type="error">
          {{ error }}
        </v-alert> -->
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
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import MailingListAddressForm from '~/components/forms/MailingListAddressForm';

export default {
  components: {
    MailingListAddressForm,
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
        },
        addPermission: false,
      },
    };
  },
  methods: {
    closeCreateDialog() {
      this.$refs.addForm.resetForm();
      this.$emit('close');
    },

    addEmail() {
      this.$refs.addForm.validate();

      if (!this.form.valid) {
        return;
      }

      if (!this.form.addPermission) {
        this.form.valid = false;
        return;
      }

      if (this.limitReached && this.form.data.status === 'ok') {
        this.$snack.show(
          'Mailing list limit reached, you cannot use the "ok" status.',
        );
        return;
      }

      this.$emit('submit', this.form.data);
    },
  },
};
</script>
