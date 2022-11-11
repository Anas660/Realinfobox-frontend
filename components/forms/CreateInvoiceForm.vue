<template>
  <v-form ref="form" v-model="form.valid" lazy-validation>
    <h3 class="mt-2 mb-2">{{ $t('billing.invoiceData') }}</h3>
    <v-text-field
      v-model="form.data.invoiceItem"
      :label="$t('form.invoiceItem')"
      :rules="rules.invoiceItem"
      :disabled="isLoading"
      required
    />
    <v-text-field
      v-model="form.data.days_until_due"
      :label="$t('form.daysUntilDue')"
      :rules="rules.days_until_due"
      :disabled="isLoading"
      required
    />
    <v-text-field
      v-model="form.data.price"
      :label="$t('form.price')"
      :rules="rules.price"
      :disabled="isLoading"
      required
    />
    <v-divider></v-divider>
    <h3 class="mt-2 mb-2">{{ $t('billing.billingAddress') }}</h3>
    <v-text-field
      v-model="form.data.email"
      :label="$t('form.email')"
      :rules="rules.email"
      :disabled="true"
      required
    />
    <v-text-field
      v-model="form.data.name"
      :label="$t('form.name')"
      :rules="rules.name"
      :disabled="true"
      required
    />
    <v-text-field
      v-model="form.data.street"
      :label="$t('form.street')"
      :rules="rules.street"
      :disabled="true"
      required
    />
    <CitiesSelect
      v-model="form.data.city_id"
      :is-loading="isLoading"
      :disabled="true"
    />
    <v-text-field
      v-model="form.data.postal_code"
      :label="$t('form.postalCode')"
      :rules="rules.postal_code"
      :disabled="true"
      required
    />
    <v-text-field
      v-model="form.data.province"
      :label="$t('form.province')"
      :rules="rules.province"
      :disabled="true"
      required
    />
  </v-form>
</template>

<script>
import regex from '~/helpers/regex';
import CitiesSelect from '~/components/forms/CitiesSelect';
import validation from '~/helpers/input-validation';

const required = validation.rules.required;

export default {
  components: {
    CitiesSelect,
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
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        name: [v => !!v || 'Field is required'],
        phone: [v => !!v || 'Field is required'],
        city_id: [v => !!v || 'Field is required'],
        postal_code: [v => !!v || 'Field is required'],
        street: [v => !!v || 'Field is required'],
        invoiceItem: [v => !!v || 'Field is required'],
        price: [v => !!v || 'Field is required'],
        days_until_due: [v => !!v || 'Field is required'],
      },
      regex,
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
