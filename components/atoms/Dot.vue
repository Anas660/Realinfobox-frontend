<template>
  <div
    class="Dot"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: branding.color1,
    }"
  />
</template>

<script>
export default {
  props: {
    size: { type: String, default: '25' },
  },

  computed: {
    branding() {
      return this.$store.state.reports.branding;
    },
  },
};
</script>

<style scoped>
.Dot {
  background-color: red;
  border: 2px solid white;
  border-radius: 50%;
}
</style>
