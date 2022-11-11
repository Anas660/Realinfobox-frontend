<template>
  <v-app class="App">
    <div class="d-flex h-screen">
      <left-sidebar />
      <v-main class="Content d-flex overflow-y-auto pt-6">
        <nuxt />
      </v-main>
      <right-sidebar />
      <Snackbar />
      <v-overlay :value="impersonationLoading">
        <v-progress-circular
          :size="70"
          :width="7"
          color="primary"
          indeterminate
        />
      </v-overlay>
    </div>
  </v-app>
</template>

<script>
import Snackbar from '~/components/atoms/Snackbar';
import LeftSidebar from '~/components/organisms/LeftSidebar';
import RightSidebar from '~/components/organisms/RightSidebar';

import AuthMixin from '~/mixins/auth';

export default {
  components: {
    Snackbar,
    LeftSidebar,
    RightSidebar,
  },
  mixins: [AuthMixin],
  middleware: ['redirector'],
  data() {
    return {
      impersonationLoading: false,
    };
  },
  computed: {
    impersonatedId() {
      return this.$store.state.authLocal.impersonatedId;
    },
  },
  watch: {
    me(newVal, oldVal) {
      if (!newVal || !oldVal) return;
      if (newVal.id !== oldVal.id) {
        this.impersonationLoading = false; // loading of user ended
      }
    },
    async impersonatedId() {
      if (this.me) {
        this.impersonationLoading = true; // loading of user initiated
        await this.$auth.fetchUser();
        this.loadTags();
        if (this.impersonatedId) {
          this.$router.push('/');
        }
        if (!this.impersonatedId) {
          this.$router.push('/clients');
        }
      }
    },
    isLoggedIn() {
      this.loadTags();
    },
  },
  methods: {
    loadTags() {
      if (this.isLoggedIn && this.isUser)
        this.$store.dispatch('mailingList/getTags');
    },
  },
};
</script>

<style lang="scss" scoped>
.Content {
  flex: 1;
}
</style>
