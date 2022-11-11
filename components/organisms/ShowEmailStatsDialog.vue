<template>
  <v-dialog v-model="value" width="80%" @click:outside="$emit('close')">
    <v-card>
      <v-card-title class="headline" primary-title>
        {{ address.email }}
      </v-card-title>

      <v-card-text>
        <v-data-table
          :headers="tableHeaders"
          :items="statsArray"
          :items-per-page="25"
        >
          <template #item.status="{ item }">
            <v-chip
              v-if="item.status"
              :color="getColor(item.status)"
              class="mr-2"
              dark
              small
            >
              {{ item.status }}
            </v-chip>
          </template>
          <template #item.delivered="{ item }">
            <div class="">
              <BinaryIcon :value="item.delivered" hide-false />
            </div>
          </template>
          <template #item.read="{ item }">
            <div class="">
              <BinaryIcon :value="item.read" hide-false />
            </div>
          </template>
        </v-data-table>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeDialog"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    address: {
      type: Object,
      default: () => {},
    },

    busy: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tableHeaders: [
        { text: 'Campaign', value: 'campaignName' },
        { text: 'Status', value: 'status' },
        { text: 'Delivered', value: 'delivered' },
        { text: 'Read', value: 'read' },
        { text: 'Opened', value: 'open_count' },
        { text: 'Clicked', value: 'clicks' },
      ],
    };
  },
  computed: {
    ...mapGetters('campaigns', {
      campaignsArray: 'campaignsArray',
    }),

    statsArray() {
      const array = this.campaignsArray.map(campaign => {
        const campaignStats = this.address.stats
          ? this.address.stats[campaign.id]
          : undefined;
        let returnObj = {
          campaignId: campaign.id,
          campaignName: campaign.attributes.campaign_name,
        };
        if (campaignStats) {
          returnObj = {
            ...returnObj,
            ...campaignStats,
          };
        }
        return returnObj;
      });
      return array;
    },
  },
  created() {
    if (!this.campaignsArray.length) {
      this.$store.dispatch('campaigns/getCampaigns');
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    getColor(status) {
      switch (status) {
        case 'complaint':
        case 'unsubscribed':
          return 'warning';

        case 'bounce':
          return 'error';

        default:
          return 'success';
      }
    },
  },
};
</script>
