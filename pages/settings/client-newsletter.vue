<template>
  <div class="mx-10 pb-20">
    <v-tabs v-model="tab" color="primary">
      <v-tab v-for="item in items" :key="item" :href="hashify(item)">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items class="pt-5 pb-11" :value="tab">
      <v-tab-item value="email-list">
        <MailingList />
      </v-tab-item>
      <v-tab-item value="template">
        <NewsletterTemplate />
      </v-tab-item>
      <v-tab-item value="social-media">
        <SocialMedia />
      </v-tab-item>
      <v-tab-item value="address">
        <BusinessAddress />
      </v-tab-item>
      <v-tab-item value="campaign">
        <CampaignSettings />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import BusinessAddress from '~/components/organisms/BusinessAddress';
import SocialMedia from '~/components/organisms/SocialMedia';
import NewsletterTemplate from '~/components/organisms/NewsletterTemplate';
import MailingList from '~/components/organisms/MailingList';
import CampaignSettings from '~/components/organisms/CampaignSettings';

import createLink from '~/helpers/create-link';

export default {
  components: {
    BusinessAddress,
    SocialMedia,
    NewsletterTemplate,
    MailingList,
    CampaignSettings,
  },
  data() {
    return {
      items: ['Email list', 'Template', 'Social media', 'Address', 'Campaign'],
    };
  },
  computed: {
    tab: {
      set(tab) {
        this.$router.replace({ query: { ...this.$route.query, tab } });
      },
      get() {
        return this.$route.query.tab;
      },
    },
  },
  methods: {
    hashify(title) {
      return `#${createLink(title)}`;
    },
  },
};
</script>
