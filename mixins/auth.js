export default {
  computed: {
    me() {
      return this.$auth.user;
    },
    isLoggedIn() {
      return this.$auth.loggedIn;
    },
    userName() {
      if (!this.me || !this.me.attributes) return '';
      return `${this.me.attributes.given_name}  ${this.me.attributes.family_name}`;
    },
    myRoles() {
      return this.me ? this.me.roles : undefined;
    },
    isAdmin() {
      return this.myRoles && this.myRoles.admin;
    },
    isEditor() {
      return this.myRoles && this.myRoles.editor;
    },
    isUser() {
      return this.myRoles && this.myRoles.user;
    },
    isDemo() {
      return this.myRoles && this.myRoles.demo;
    },
    allows() {
      return this.me.allows || [];
    },
    hasReports() {
      return this.allows.includes('reports');
    },
    hasNewsletter() {
      return this.allows.includes('newsletter');
    },
  },
};
