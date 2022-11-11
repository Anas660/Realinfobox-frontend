<template>
  <CampaignSettingsForm
    v-model="settings"
    class="mx-20"
    :is-automated-delivery="true"
  />
</template>

<script>
import CampaignSettingsForm from '~/components/forms/CampaignSettingsForm.vue';
export default {
  components: { CampaignSettingsForm },
  data() {
    return {
      settings: {
        automated_campaign_delivery: true,
        custom_color: '',
        notification_emails: [''],
      },
    };
  },
};
</script>
