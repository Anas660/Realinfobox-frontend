<template>
  <div :style="{ display: 'flex', flexDirection: 'column' }">
    <h1 class="Heading">Banner Configuration</h1>
    <v-form ref="form" class="Form">
      <v-text-field
        v-model="bannerConfig.name"
        label="Agent or Team name"
        required
      />
      <v-text-field v-model="bannerConfig.title" label="Title" />
      <v-text-field
        v-model="bannerConfig.company"
        label="Brokerage name"
        required
      />
      <v-text-field
        v-model="bannerConfig.phone"
        label="Phone number"
        required
      />
      <v-text-field v-model="bannerConfig.website" label="Website" required />
      <v-text-field
        v-model="bannerConfig.email"
        label="Email address"
        required
      />
    </v-form>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Object, required: true },
  },

  computed: {
    bannerConfig: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style scoped>
.Form {
  margin-top: 20px;
}
</style>
