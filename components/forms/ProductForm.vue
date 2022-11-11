<template>
  <v-form ref="form" v-model="form.valid" lazy-validation>
    <v-text-field v-model="form.data.name" dense label="Title" />
    allows:
    <v-checkbox v-model="allowsNewsletter" label="Newsletter" hide-details />
    <v-checkbox v-model="allowsReports" label="Reports" hide-details />
  </v-form>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      allowsNewsletter: false,
      allowsReports: false,
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
    allows() {
      const allows = [];
      if (this.allowsNewsletter) allows.push('newsletter');
      if (this.allowsReports) allows.push('reports');
      return allows;
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.$nextTick(() => {
          this.form = newVal;
          if (newVal.data.allows) {
            this.allowsNewsletter = newVal.data.allows.includes('newsletter');
            this.allowsReports = newVal.data.allows.includes('reports');
          }
        });
      },
      deep: true,
      immediate: true,
    },
    allows() {
      this.form.data.allows = this.allows;
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
