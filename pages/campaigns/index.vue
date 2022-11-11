<template>
  <div class="container">
    <PageHeader title="Campaigns">
      <template v-if="isAdmin || isEditor" #right>
        <v-btn color="secondary" @click="$router.push('/campaigns/templates')">
          <v-icon left> mdi-table-edit </v-icon>
          Manage Templates
        </v-btn>
        <v-btn color="primary" @click="$router.push('/campaigns/create')">
          <v-icon left> mdi-email-plus </v-icon>
          Create Campaign
        </v-btn>
      </template>
    </PageHeader>
    <div class="container-fluid elevation-1 white">
      <div class="row">
        <v-data-table
          :headers="tableHeaders"
          :items="tableData"
          :items-per-page="25"
          class="CampaignsTable"
          :loading="$store.state.campaigns.loading"
        >
          <template #header.action>
            <div class="w-100 text-right">Actions</div>
          </template>
          <template #header.scheduled>
            <div class="w-100">Delivery Date</div>
          </template>
          <template #item.campaign_name="{ item }">
            <div class="">
              <div class="d-inline-block mr-2">
                <v-icon v-if="item.status === 'draft'" color="info">
                  mdi-file
                </v-icon>
                <v-icon
                  v-if="['scheduled', 'published'].includes(item.status)"
                  color="warning"
                >
                  mdi-clock-outline
                </v-icon>
                <v-icon v-if="item.status === 'sent'" color="success">
                  mdi-send-check
                </v-icon>
              </div>
              {{ item.campaign_name }}
            </div>
          </template>
          <template #item.status="{ item }">
            <div v-if="item.sent_at || item.scheduled" class="">
              {{ item.status }}
            </div>
            <div v-else class="">draft</div>
          </template>
          <template #item.mailingListTag="{ item }">
            <div v-if="item.mailingListTag" class="">
              <v-chip
                :key="item.mailingListTag.id"
                :color="item.mailingListTag.color"
                dark
                small
              >
                {{ item.mailingListTag.name }}
              </v-chip>
            </div>
          </template>
          <template #item.scheduled="{ item }">
            <div v-if="item.status === 'sent'" class="">
              {{ item.sent_at | toZonedTime(item.timezone) }}
            </div>
            <div v-else-if="item.status === 'scheduled'" class="">
              {{ item.scheduled | toZonedTime(item.timezone) }}
            </div>
            <!-- <div v-else class="">
              draft
            </div> -->
          </template>

          <template #item.action="{ item }">
            <div class="d-flex justify-content-end">
              <template v-if="item.loading">
                <v-progress-circular
                  class="p-2 pr-5"
                  size="24"
                  width="3"
                  indeterminate
                />
              </template>
              <template v-else>
                <v-btn icon class="mx-1" nuxt :to="`/campaigns/${item.id}`">
                  <v-icon>
                    mdi-{{ item.status === 'sent' ? 'eye' : 'pencil' }}
                  </v-icon>
                </v-btn>
                <v-tooltip bottom>
                  <template #activator="{ on }">
                    <v-btn
                      icon
                      class="mx-1"
                      @click="showDuplicateDialog(item)"
                      v-on="on"
                    >
                      <v-icon> mdi-content-duplicate </v-icon>
                    </v-btn>
                  </template>
                  <span>duplicate</span>
                </v-tooltip>
                <v-btn icon @click="deleteItem(item)">
                  <v-icon> mdi-delete </v-icon>
                </v-btn>
              </template>
            </div>
          </template>
        </v-data-table>
      </div>
    </div>
    <CampaignDuplicateDialog
      v-model="duplicateDialog"
      :source-campaign="duplicateTarget"
      :allow-scheduling="hasAutomatedDelivery"
      :busy="duplicating"
      @submit="duplicate"
      @close="duplicateDialog = false"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PageHeader from '~/components/organisms/PageHeader';
import CampaignDuplicateDialog from '~/components/organisms/CampaignDuplicateDialog';
import ListsMixin from '~/mixins/lists';
import RolesMixin from '~/mixins/auth';
import MailingListTagsMixin from '~/mixins/mailingListTags';

export default {
  components: {
    PageHeader,
    CampaignDuplicateDialog,
  },
  mixins: [ListsMixin, RolesMixin, MailingListTagsMixin],
  data() {
    return {
      dialogBusy: false,
      duplicateTarget: {},
      duplicateDialog: false,
      duplicating: false,
      tableData: undefined,
    };
  },
  computed: {
    ...mapGetters('campaigns', {
      campaigns: 'campaignsArray',
    }),
    tableHeaders() {
      return [
        { text: 'Campaign Name', value: 'campaign_name' },
        { text: 'Tag', value: 'mailingListTag' },
        { text: 'Status', value: 'status' },
        { text: 'Delivery Date', value: 'scheduled' },
        { text: 'Actions', value: 'action', sortable: false, align: 'right' },
      ];
    },
    hasAutomatedDelivery() {
      return this.isUser && this.me.settings.automated_campaign_delivery;
    },
  },
  watch: {
    campaigns: {
      handler() {
        if (!this.campaigns) {
          this.tableData = [];
        } else {
          this.tableData = this.campaigns.map(campaign => {
            const tableRow = {
              id: campaign.id,
              ...campaign.attributes,
              timezone: campaign.city.timezone,
              mailingListTag: this.tags.find(
                t => t.id === campaign.mailing_list_tag_id,
              ),
              deleting: false,
            };

            return tableRow;
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.loadCampaigns();
  },
  methods: {
    loadCampaigns() {
      this.$store.dispatch('campaigns/getCampaigns');
    },
    showDuplicateDialog(item) {
      this.duplicateTarget = this.campaigns.find(c => c.id === item.id);
      this.duplicateDialog = true;
    },
    async duplicate(item) {
      try {
        this.duplicating = true;
        const { newCampaignId } = await this.$axios.$post(
          `/campaigns/${item.id}/duplicate`,
          item,
        );
        this.$router.push(`/campaigns/${newCampaignId}`);
        this.$snack.show('Duplication complete!', 'success');
      } catch (error) {
        this.$snack.show('Duplication failed', 'error');
      }
      this.duplicating = false;
    },
    async deleteItem(item) {
      this.setItemLoading(item.id, true);
      try {
        await this.$axios.$delete(`/campaigns/${item.id}`);
        this.$store.commit('campaigns/CAMPAIGN_DELETE', {
          campaignId: item.id,
        });
        this.$snack.show('Delete complete!', 'success');
      } catch (error) {
        this.$snack.show('Delete failed', 'error');
      }
      this.setItemLoading(item.id, false);
    },
    setItemLoading(itemId, value) {
      const index = this.tableData.findIndex(td => td.id === itemId);
      if (~index) {
        this.tableData.splice(index, 1, {
          ...this.tableData[index],
          loading: value,
        });
      }
    },
  },
};
</script>

<style lang="scss">
.CampaignsTable {
  width: 100%;
}
</style>
