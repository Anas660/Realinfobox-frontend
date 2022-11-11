<template>
  <v-form ref="form" v-model="formData.valid" lazy-validation>
    <v-text-field
      v-model="formData.data.benchmarkPrice"
      :rules="rules.benchmarkPrice"
      label="Benchmark price"
      outlined
      dense
      hide-details
      type="number"
      required
      autofocus
    />
  </v-form>
</template>

<script>
export default {
  props: {
    formValues: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rules: {
        benchmarkPrice: [v => !!v || 'Benchmark price is required'],
      },
      form: {
        valid: false,
        data: {
          benchmarkPrice: null,
        },
      },
    };
  },
  computed: {
    formData: {
      get() {
        return this.formValues;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  watch: {
    formValues: {
      handler(newVal) {
        this.form = newVal;
      },
      deep: true,
      immediate: true,
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
