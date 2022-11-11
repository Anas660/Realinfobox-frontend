import AuthMixin from '~/mixins/auth';

export default {
  mixins: [AuthMixin],
  computed: {
    showSESWarning() {
      return this.isUser && !this.me.ses_verified;
    },
    impersonatedId() {
      return this.$store.state.authLocal.impersonatedId;
    },
    loading() {
      return this.impersonationLoading;
    },
    showFillBusinessAddressWarning() {
      return this.isUser && !this.me.business_address;
    },

    hasNotifications() {
      return [
        this.showSESWarning,
        this.showFillBusinessAddressWarning,
        this.impersonatedId,
      ].some(i => i);
    },
  },
};
