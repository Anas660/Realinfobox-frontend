<template>
  <v-icon color="orange darken-2" x-large right @click="goBack">
    mdi-arrow-left-circle
  </v-icon>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>
