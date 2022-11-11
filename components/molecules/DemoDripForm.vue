<template>
  <v-form ref="form" v-model="form.valid" inline @submit.prevent>
    <v-text-field
      v-model="form.data.name"
      name="name"
      label="Drip name"
      :rules="rules.name"
      required
      autofocus
    />
    <v-text-field
      v-model="form.data.subject"
      name="subject"
      label="Drip Subject"
      :rules="rules.subject"
      required
      autofocus
    />
    <CitiesSelect v-model="form.data.city_id" />
    <v-text-field
      v-model="form.data.delay"
      name="delay"
      type="number"
      label="Drip delay"
      :rules="rules.delay"
      hint="Delay in number of days since registration"
      required
      autofocus
    />
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
          delay: null,
          subject: null,
        },
        valid: true,
      },
      rules: {
        name: [v => !!v || 'Name is required'],
        city_id: [v => !!v || 'City is required'],
        delay: [v => !!v || 'Delay is required'],
        subject: [v => !!v || 'Subject is required'],
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
