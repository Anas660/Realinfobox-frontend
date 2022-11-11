<template>
  <v-form v-if="value" ref="form" v-model="formData.valid" lazy-validation>
    <v-text-field
      v-for="field in Object.keys(fields)"
      :key="field"
      v-model="formData.data[field]"
      :rules="fields[field].rules"
      :label="fields[field].label"
    />
  </v-form>
</template>

<script>
import validation from '~/helpers/input-validation';

const required = validation.rules.required;
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      fields: {
        name: {
          label: 'Send name',
          rules: [required],
        },
        brokerage: {
          label: 'Brokerage',
          rules: [required],
        },
        address1: {
          label: 'Street address',
          rules: [required],
        },
        city: {
          label: 'City',
          rules: [required],
        },
        zip: {
          label: 'Zip postal code',
          rules: [required],
        },
        province: {
          label: 'Province',
          rules: [required],
        },
      },
      form: {},
    };
  },
  computed: {
    formData: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('input', this.form);
      },
    },
  },
  watch: {
    value: {
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

<style></style>
