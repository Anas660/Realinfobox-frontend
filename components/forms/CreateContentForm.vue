<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent>
    <div class="row align-items-center">
      <div class="col-6">
        <v-text-field
          v-model="form.data.campaign_name"
          name="campaign_name"
          label="Content name"
          :rules="rules.campaign_name"
          required
          autofocus
        />
      </div>
      <div v-if="allowScheduling" class="col-6 d-flex justify-content-end">
        <DateTimePicker
          v-model="form.data.scheduled"
          :timezone="form.data.city ? form.data.city.timezone : ''"
        />
      </div>
    </div>
  </v-form>
</template>

<script>
import DateTimePicker from '~/components/forms/DateTimePicker';

export default {
  components: {
    DateTimePicker,
  },
  props: {
    value: {
      type: Object,
      default: null,
    },
    allowScheduling: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rules: {
        campaign_name: [v => !!v || 'Name is required'],
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
