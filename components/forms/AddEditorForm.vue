<template>
  <v-form ref="form" v-model="form.valid" lazy-validation>
    <v-text-field
      v-model="form.data.given_name"
      :rules="rules.given_name"
      label="Given Name"
      required
    />
    <v-text-field
      v-model="form.data.family_name"
      :rules="rules.family_name"
      label="Family Name"
      required
    />

    <v-text-field
      v-model="form.data.email"
      :rules="rules.email"
      label="E-mail"
      required
    />
  </v-form>
</template>

<script>
import regex from '~/helpers/regex';
const nwd = new RegExp(regex.nameWithDiacritics);

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rules: {
        given_name: [
          v => !!v || 'Name is required',
          v => nwd.test(v) || 'Only letters and diacritics allowed',
        ],
        family_name: [
          v => !!v || 'Family name is required',
          v => nwd.test(v) || 'Only letters and diacritics allowed',
        ],
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      },

      form: {
        valid: false,
        data: {
          given_name: null,
          family_name: null,
          email: null,
        },
      },
      regex,
    };
  },
  watch: {
    value: {
      handler(newVal) {
        this.$nextTick(() => {
          this.form = newVal;
        });
      },
      deep: true,
      immediate: true,
    },
    form: {
      handler() {
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
