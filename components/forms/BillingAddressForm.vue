<template>
  <v-form ref="form" v-model="form.valid" lazy-validation>
    <v-text-field
      v-model="form.data.contact_name"
      :label="$t('form.contactName')"
      :rules="rules.contact_name"
      :disabled="isLoading"
      required
    />
    <v-text-field
      v-model="form.data.phone"
      :label="$t('form.phone')"
      :rules="rules.phone"
      :disabled="isLoading"
    />
    <v-text-field
      v-model="form.data.email"
      :label="$t('form.email')"
      :rules="rules.email"
      :disabled="isLoading"
    />
    <v-text-field
      v-model="form.data.name"
      :label="$t('form.companyName')"
      :rules="rules.name"
      :disabled="isLoading"
      required
    />
    <v-text-field
      v-model="form.data.address_line_1"
      :label="$t('form.addressLine1')"
      :rules="rules.address_line_1"
      :disabled="isLoading"
      required
    />
    <CitiesSelect v-model="form.data.city_id" :is-loading="isLoading" />
    <v-text-field
      v-model="form.data.province"
      :label="$t('form.province')"
      :rules="rules.province"
      :disabled="isLoading"
      required
    />
    <v-text-field
      v-model="form.data.postal_code"
      :label="$t('form.postalCode')"
      :rules="rules.postal_code"
      :disabled="isLoading"
      required
    />

    <Loader v-if="isLoading" />
    <div v-else></div>
  </v-form>
</template>

<script>
import validation from '~/helpers/input-validation';
import CitiesSelect from '~/components/forms/CitiesSelect';
import Loader from '~/components/atoms/Loader';

const required = validation.rules.required;
export default {
  components: {
    CitiesSelect,
    Loader,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rules: {
        contact_name: [v => !!v || 'Field is required'],
        name: [v => !!v || 'Field is required'],
        address_line_1: [v => !!v || 'Field is required'],
        province: [v => !!v || 'Field is required'],
        city_id: [v => !!v || 'Field is required'],
        postal_code: [v => !!v || 'Field is required'],
      },
    };
  },

  computed: {
    form: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('input', this.form);
      },
      deep: true,
    },
  },

  methods: {
    resetForm() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style></style>
