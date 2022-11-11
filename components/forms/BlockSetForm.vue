<template>
  <v-form ref="form" v-model="form.valid" inline @submit.prevent>
    <v-text-field
      v-model="form.data.name"
      name="name"
      label="Block set name"
      :rules="rules.name"
      required
      autofocus
    />
    <CitiesSelect v-model="form.data.city_id" />
  </v-form>
</template>

<script>
import CitiesSelect from '~/components/forms/CitiesSelect';

export default {
  components: {
    CitiesSelect,
  },
  props: {
    prefill: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        data: {
          name: '',
          city_id: null,
        },
        valid: false,
      },
      rules: {
        name: [v => !!v || 'Name is required'],
      },
    };
  },
  watch: {
    form: {
      handler() {
        this.$emit('input', this.form);
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    if (this.prefill) {
      this.form = this.prefill;
    }
  },
};
</script>

<style></style>
