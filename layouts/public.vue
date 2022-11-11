<template>
  <v-app class="App">
    <PublicHeader v-if="!hideBranding" />
    <v-main class="Content">
      <nuxt />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
import PublicHeader from '~/components/organisms/PublicHeader';
import Snackbar from '~/components/atoms/Snackbar';

export default {
  components: {
    PublicHeader,
    Snackbar,
  },
  computed: {
    hideBranding() {
      return this.$route.query.plain;
    },
  },
};
</script>

<style>
.App {
  min-width: 960px;
}
@media print {
  .Header {
    visibility: hidden;
  }

  .Content {
    padding: 0 !important;
  }
}
</style>
