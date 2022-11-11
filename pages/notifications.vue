<template>
  <v-main class="mx-14">
    <div v-if="$auth.loggedIn" class="InfoBars">
      <div v-if="showSESWarning">
        <InfoBar
          text="You didn't verify your email address with Amazon Web Services to enable us
              to send email in your name."
          is-error
          @on-click="sendVerification"
        />
        <VerificationEmailDialog
          v-model="verifyDialogOpen"
          @close="verifyDialogOpen = false"
        />
      </div>

      <InfoBar
        v-if="showFillBusinessAddressWarning && hasNewsletter"
        text="Please fill your business address - we will include it in the footer
            of your sent campaigns as required by law."
        is-error
        @on-click="$router.push('/settings/client-newsletter?tab=address')"
      />

      <InfoBar
        v-if="impersonatedId"
        :text="`You are impersonating ${userName}`"
        @on-click="cancelImpersonation"
      />
    </div>
    <nuxt />
  </v-main>
</template>

<script>
import VerificationEmailDialog from '~/components/organisms/VerificationEmailDialog';

import NotificationMixin from '~/mixins/notificationMixin';
import InfoBar from '~/components/molecules/InfoBar.vue';

export default {
  components: {
    VerificationEmailDialog,
    InfoBar,
  },
  mixins: [NotificationMixin],
  middleware: ['redirector'],
  data() {
    return {
      impersonationLoading: false,
      verifyDialogOpen: false,
    };
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
    async sendVerification() {
      try {
        const result = await this.$axios.$post(
          '/account/resend-ses-verification',
        );
        if (result) {
          /** */
        }
        this.verifyDialogOpen = true;
        this.$snack.show(
          'Verification email resent, after confirmation, please reload page',
          'success',
        );
      } catch (error) {
        this.$snack.show('Verification email not sent', 'error');
      }
    },
    cancelImpersonation() {
      this.$store.dispatch('authLocal/deactivateImpersonation');
    },
  },
};
</script>
