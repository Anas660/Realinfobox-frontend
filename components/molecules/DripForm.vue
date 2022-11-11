<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent>
    <div class="row align-items-center">
      <div class="col-6 col-md-4">
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
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      rules: {
        name: [v => !!v || 'Name is required'],
        delay: [v => !!v || 'Delay is required'],
        subject: [v => !!v || 'Subject is required'],
      },
    };
  },
  computed: {
    form: {
      get() {
        return this.value;
      },
      set(newForm) {
        this.$emit('input', newForm);
      },
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
