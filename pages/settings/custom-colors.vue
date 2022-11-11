<template>
  <CampaignSettingsForm
    v-model="settings"
    class="mx-20"
    :is-automated-delivery="false"
  />
</template>

<script>
import CampaignSettingsForm from '~/components/forms/CampaignSettingsForm.vue';
export default {
  components: { CampaignSettingsForm },
  data() {
    return {
      settings: {
        custom_color: '',

        automated_campaign_delivery: true,
        notification_emails: [''],
      },
    };
  },
};
</script>
