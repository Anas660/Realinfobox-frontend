<template>
  <v-snackbar
    v-model="visible"
    :color="snackbar.color"
    :timeout="snackbar.timeout"
    :bottom="true"
  >
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    snackbar() {
      return this.$store.state.ui.snackbar;
    },
  },
  created() {
    this.$store.subscribe(mutation => {
      if (mutation.type === 'ui/SNACKBAR_SHOW') {
        this.visible = true;
      }
    });
  },
};
</script>
