<template>
  <div class="UserSettings container">
    <PageHeader
      action-button-text="Save"
      action-button-icon="mdi-content-save"
      @action-button="save"
    />
    <CampaignSettingsForm v-model="settings" />
  </div>
</template>

<script>
import PageHeader from '~/components/organisms/PageHeader';
import CampaignSettingsForm from '~/components/forms/CampaignSettingsForm';

export default {
  components: {
    PageHeader,
    CampaignSettingsForm,
  },
  data() {
    return {
      activeTab: undefined,
      tabNames: ['campaign-settings'],
      saving: false,
      settings: {
        custom_color: '',
        automated_campaign_delivery: true,
        notification_emails: [''],
      },
    };
  },
  computed: {
    skeletonLoaders() {
      return Array(5).fill('list-item-three-line').join();
    },
    userSettings() {
      return this.$auth.user.settings;
    },
    activeTabName() {
      return this.tabNames[this.activeTab];
    },
    routeHash() {
      return this.$route.hash;
    },
    userSocialHandles() {
      return this.$auth.user.social_handles;
    },
  },
  mounted() {
    this.setForm();
    if (this.routeHash) {
      const index = this.tabNames.findIndex(tab => tab === this.routeHash);
      if (~index) this.activeTab = index;
    }
  },
  methods: {
    async save() {
      try {
        switch (this.activeTabName) {
          case 'business-address':
            await this.saveBusinessAddress();
            break;
          case 'campaign-settings':
            await this.saveSettings();
            break;
          case 'social-media':
            await this.saveSocialHandles();
            break;
          case 'listing-setup':
            break;
          default:
            break;
        }
        this.$snack.show('Saved successfully', 'success');
        await this.$auth.fetchUser();
      } catch (error) {
        this.$snack.show('Saving error', 'error');
      }
    },
    setForm() {
      this.$nextTick(() => {
        const formCopy = { ...this.userSettings };
        if (
          !formCopy.notification_emails ||
          !formCopy.notification_emails.length
        ) {
          formCopy.notification_emails = [''];
        }
        this.settings = formCopy;
      });
    },
    async saveSettings() {
      try {
        const formToSend = { ...this.settings };
        formToSend.notification_emails = formToSend.notification_emails.filter(
          e => !!e,
        );
        await this.$axios.$post('/account/settings', formToSend);
      } catch (error) {
        this.$snack.show('Failed to save settings', 'danger');
      }
    },
    resetSettings() {
      this.blocks = this.settings.blocks;
    },
  },
};
</script>

<style lang="scss" scoped>
.NavTabs {
  > * {
    justify-content: left;
  }
}
</style>
