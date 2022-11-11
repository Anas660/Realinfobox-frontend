<template>
  <div class="Campaign container">
    <PageHeader>
      <template #right>
        <div class="d-flex children-margin">
          <v-tooltip :disabled="!dirty" bottom>
            <template #activator="{ on }">
              <div v-on="on">
                <v-btn
                  v-if="!isSent"
                  :disabled="loading || saving || dirty"
                  color="secondary"
                  @click="previewCampaignDialog.visible = true"
                >
                  <v-icon left> mdi-eye-outline </v-icon>
                  Preview
                </v-btn>
                <v-btn
                  v-clipboard:copy="campaign.preview_url"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  :disabled="loading || saving || dirty"
                  color="secondary"
                >
                  <v-icon left> mdi-link </v-icon>
                  Copy link
                </v-btn>
              </div>
            </template>
            <span>Save first</span>
          </v-tooltip>
          <template v-if="!isSent">
            <v-tooltip :disabled="!dirty" bottom>
              <template #activator="{ on }">
                <div v-on="on">
                  <v-btn
                    class="mr-2"
                    :color="confirmSend ? 'warning' : 'success'"
                    :disabled="!canSend"
                    :loading="sending"
                    @click="
                      confirmSend
                        ? sendCampaignToMailingList()
                        : (confirmSend = true)
                    "
                  >
                    <v-icon left> mdi-send </v-icon>
                    {{ confirmSend ? 'Confirm?' : 'Send' }}
                  </v-btn>
                </div>
              </template>
              <span>Save first</span>
            </v-tooltip>

            <v-btn
              color="primary"
              :disabled="!dirty"
              :loading="saving"
              @click="saveCampaign"
            >
              <v-icon left> mdi-content-save </v-icon>
              Save
            </v-btn>
          </template>
        </div>
      </template>
    </PageHeader>
    <v-fade-transition hide-on-leave>
      <v-skeleton-loader v-if="loading" type="article, actions, image" />
      <div v-else class="Sections">
        <section class="white elevation-1 container-fluid">
          <div class="row Info">
            <div class="col item">
              <div class="overline">Campaign name</div>
              <div>
                {{ campaign.attributes.campaign_name }}
              </div>
            </div>
            <div class="col-2 item">
              <div class="overline">Status</div>
              <div>
                <v-chip v-if="status" color="primary">
                  {{ status }}
                </v-chip>
              </div>
            </div>
            <div class="col item">
              <div class="overline">Mailing list tag</div>
              <v-chip :color="selectedTag ? selectedTag.color : 'primary'" dark>
                {{ selectedTag ? selectedTag.name : undefined }}
              </v-chip>
            </div>
          </div>
          <div class="row">
            <div class="col-6 p-2">
              <template v-if="!isSent">
                <div>
                  <v-text-field
                    v-model="emailSubject"
                    label="Email Subject"
                    :placeholder="campaign.attributes.campaign_name"
                  />
                </div>
                <div>
                  <v-switch
                    v-model="scheduledDelivery"
                    :label="`Scheduled delivery: ${
                      scheduledDelivery ? 'ON' : 'OFF'
                    }`"
                  />
                </div>
                <div v-if="scheduledDelivery" class="d-flex align-items-center">
                  <DateTimePicker2
                    :value="campaign.attributes.scheduled"
                    :newly-scheduled="scheduled"
                    :timezone="campaign.city.timezone"
                    class="mr-3"
                    :disabled="status === 'sent'"
                    @input="val => (scheduled = val)"
                  />
                  <!-- <div v-if="!userSettings.automated_campaign_delivery" class="font-italic body-2">
                    Your account has automated campaign delivery disabled.
                  </div> -->
                </div>
              </template>
              <template v-else>
                <div>
                  <div class="overline">Sent at</div>
                  <div>
                    {{
                      campaign.attributes.sent_at
                        | toZonedTime(campaign.city.timezone)
                    }}
                  </div>
                </div>
              </template>
            </div>
          </div>
        </section>

        <section v-if="isSent" class="white elevation-1 container-fluid">
          <div class="row DeliveryStats p-4">
            <template v-if="!deliveryStats">
              <div class="col">
                Delivery statistics are being processed, please come back later
              </div>
            </template>
            <template v-else>
              <div
                v-for="total in statsTotals"
                :key="total.title"
                class="col item"
              >
                <div class="overline">
                  {{ total.title }}
                </div>
                <div>
                  {{ total.value }}
                </div>
              </div>
              <div class="col item">
                <div class="overline">Link Clicks</div>
                <div>
                  {{ totalLinkClicks }}
                  <v-btn small text @click="openDeliveryLinksDialog()">
                    details
                  </v-btn>
                </div>
              </div>
              <a
                class="stat-info-icon"
                href="https://www.realinfobox.com/campaignstats"
                target="none"
              >
                <v-icon>mdi-alert-circle-outline</v-icon>
              </a>
            </template>
          </div>
        </section>
        <section class="CampaignControls">
          <div class="d-flex align-items-center justify-content-between">
            <div />
          </div>
        </section>
        <section>
          <div
            v-if="!isSent"
            class="BlocksControls d-flex justify-content-between"
          >
            <div>
              <DefaultBlocksPicker
                v-model="selectedDefaultBlocks"
                :items="campaign.default_blocks"
              />
            </div>
            <v-btn color="secondary" @click="dialogs.addBlock.visible = true">
              <v-icon left> mdi-server-plus </v-icon>
              Add Block
            </v-btn>
          </div>
        </section>
        <div
          v-if="isSent"
          class="elevation-2 white d-flex justify-content-center"
        >
          <v-skeleton-loader
            v-if="!previewHtml"
            class="w-100 p-4"
            type="article, actions, image"
          />
          <div v-else class="w-100">
            <v-tabs v-model="selectedTab" grow>
              <v-tabs-slider />

              <v-tab v-for="(tab, i) in tabs" :key="i" :href="`#tab-${tab.id}`">
                {{ tab.title }}
              </v-tab>

              <v-tab-item value="tab-preview">
                <v-card flat tile>
                  <v-card-text>
                    <div v-html="previewHtml" />
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item value="tab-mailingList">
                <v-card flat tile>
                  <v-card-text v-if="!deliveryStats">
                    <em>not available at the moment</em>
                  </v-card-text>
                  <v-card-text v-else>
                    <v-text-field
                      v-model="mlSearch"
                      class="mr-3"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                    />
                    <v-data-table
                      :headers="statsTableHeaders"
                      :items="statsTableData"
                      :search="mlSearch"
                      :items-per-page="25"
                    >
                      <template #item.sent="{ item }">
                        <div class="">
                          <BinaryIcon :value="item.sent" />
                        </div>
                      </template>
                      <template #item.delivered="{ item }">
                        <div class="">
                          <BinaryIcon :value="item.delivered" />
                        </div>
                      </template>
                      <template #item.read="{ item }">
                        <div class="">
                          <BinaryIcon :value="item.read" />
                        </div>
                      </template>
                      <template #item.unsubscribed="{ item }">
                        <div class="">
                          <BinaryIcon :value="item.unsubscribed" />
                        </div>
                      </template>
                      <template #item.complaint="{ item }">
                        <div class="">
                          <BinaryIcon :value="item.spam" />
                        </div>
                      </template>

                      <template #item.clicks_details="{ item }">
                        <div class="">
                          <v-btn
                            small
                            text
                            @click="openDeliveryLinksDialog(item)"
                          >
                            details
                          </v-btn>
                        </div>
                      </template>
                    </v-data-table>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </div>
        </div>
        <EditorBlocks
          v-else
          v-model="blocks"
          editable
          removable
          movable
          hideable
          :custom-color="userSettings ? userSettings.custom_color : null"
        />
      </div>
    </v-fade-transition>
    <AddBlockDialog v-model="dialogs.addBlock.visible" @submit="addBlock" />
    <CampaignPreviewDialog
      v-model="previewCampaignDialog.visible"
      :campaign-id="campaignId"
      @submit="() => {}"
    />
    <DeliveryLinksDialog
      v-if="isSent && deliveryStats"
      v-model="deliveryLinksDialog.visible"
      :links="deliveryLinksDialog.links"
    />
  </div>
</template>

<script>
import PageHeader from '~/components/organisms/PageHeader';
import DefaultBlocksPickerMixin from '~/mixins/defaultBlocksPicker';
import DeliveryLinksDialog from '~/components/organisms/DeliveryLinksDialog';
import CampaignPreviewDialog from '~/components/organisms/CampaignPreviewDialog';
import DateTimePicker2 from '~/components/forms/DateTimePicker2';
import EditorBlocksMixin from '~/mixins/editorBlocks';
import MailingListTagsMixin from '~/mixins/mailingListTags';
import RolesMixin from '~/mixins/auth';

export default {
  components: {
    PageHeader,
    CampaignPreviewDialog,
    DeliveryLinksDialog,
    DateTimePicker2,
  },
  mixins: [
    EditorBlocksMixin,
    DefaultBlocksPickerMixin,
    MailingListTagsMixin,
    RolesMixin,
  ],
  data() {
    return {
      loading: true,
      saving: false,
      sending: false,
      campaign: {},
      saveMethod: 'put',
      defaultBlocksSelect: [],
      sendCampaignDialog: {
        visible: false,
      },
      previewCampaignDialog: {
        visible: false,
      },
      deliveryLinksDialog: {
        visible: false,
        links: [],
      },
      confirmSend: false,
      previewHtml: null,
      originalScheduled: null,
      scheduled: null,
      scheduledDelivery: false,
      emailSubject: undefined,
      dirty: false,
      initialSavePayload: undefined,
      tabs: [
        { title: 'Preview', id: 'preview' },
        { title: 'Mailing List', id: 'mailingList' },
      ],
      selectedTab: undefined,
      mlSearch: '',
    };
  },
  computed: {
    campaignId() {
      return this.$route.params.id;
    },
    status: {
      get() {
        if (!this.campaign) return null;
        if (this.campaign.attributes) {
          return this.campaign.attributes.status;
        }
        return null;
      },
      set(value) {
        this.campaign.attributes.status = value;
      },
    },
    isDraft() {
      return this.status === 'draft';
    },
    campaignURI() {
      return `/campaigns/${this.campaignId}`;
    },
    hasBusinessAddress() {
      return !!this.me.business_address;
    },
    canSend() {
      // should be the only "open" states
      return (
        ['draft', 'scheduled'].includes(this.status) &&
        this.hasBusinessAddress &&
        !this.dirty
      );
    },
    isSent() {
      return this.status === 'sent';
    },
    userSettings() {
      return this.$auth.user.settings;
    },
    savePayload() {
      if (!this.campaign || !this.blocks) return {};
      const newStatus = this.scheduledDelivery ? 'scheduled' : 'draft';
      const payload = {
        blocks: this.blocks.filter(bl => !bl.hidden),
        status: newStatus,
        scheduled: this.scheduledDelivery ? this.scheduled : null,
        email_subject: this.emailSubject || null,
      };
      return payload;
    },
    deliveryStats() {
      return this.campaign.delivery_stats;
    },
    totalLinkClicks() {
      return this.deliveryStats.clicks.total;
    },
    statsTotals() {
      return [
        {
          title: 'Sent',
          value: this.deliveryStats.sent,
        },
        {
          title: 'Delivered',
          value: `${
            this.deliveryStats.delivered
          } (${this.deliveryStats.percent.delivered.toFixed(1)}%)`,
        },
        {
          title: 'Opened',
          value: `${
            this.deliveryStats.read
          } (${this.deliveryStats.percent.read.toFixed(1)}%)`,
        },
        {
          title: 'Unsubscribed',
          value: `${
            this.deliveryStats.unsubscribed
          } (${this.deliveryStats.percent.unsubscribed.toFixed(1)}%)`,
        },
        // {
        //   title: 'Bounce',
        //   value: `${this.deliveryStats.bounce} (${this.deliveryStats.percent.bounce}%)`,
        // },
        {
          title: 'Spam',
          value: `${
            this.deliveryStats.complaint
          } (${this.deliveryStats.percent.complaint.toFixed(1)}%)`,
        },
      ];
    },
    statsTableHeaders() {
      return [
        { text: 'Email', value: 'email' },
        { text: 'Name', value: 'name' },
        { text: 'Sent', value: 'sent' },
        { text: 'Delivered', value: 'delivered' },
        { text: 'Open Count', value: 'open_count' },
        { text: 'Link Clicks', value: 'clicks_total' },
        { text: 'Click Details', value: 'clicks_details', sortable: false },
        { text: 'Unsubscribed', value: 'unsubscribed' },
        { text: 'Spam', value: 'complaint' },
      ];
    },
    statsTableData() {
      if (!this.deliveryStats.mailing_list) return undefined;
      return this.deliveryStats.mailing_list.map(ds => {
        return {
          ...ds,
        };
      });
    },
  },
  watch: {
    campaign: {
      async handler() {
        if (!this.campaign) return;
        this.blocks = this.campaign.blocks;
        this.defaultBlocks = this.campaign.default_blocks;
        if (this.campaign.attributes) {
          this.originalScheduled = this.campaign.attributes.scheduled;
          this.scheduled = this.campaign.attributes.scheduled;
          this.scheduledDelivery =
            this.campaign.attributes.status === 'scheduled' ? true : false;
          this.emailSubject = this.campaign.attributes.email_subject;
          try {
            if (this.isSent) {
              this.previewHtml = await this.$axios.$get(
                `/campaigns/${this.campaignId}/user-preview`,
              );
            }
          } catch (error) {
            this.$snack.show(error, 'danger');
          }
        }

        if (this.campaign && this.campaign.mailing_list_tag_id) {
          this.selectedTag = this.tags.find(
            t => t.id === this.campaign.mailing_list_tag_id,
          );
        }
      },
      deep: true,
      immediate: true,
    },
    savePayload: {
      handler(newVal) {
        if (!Object.keys(newVal).length) return;

        if (!this.initialSavePayload) this.initialSavePayload = newVal;
        else {
          this.dirty = true;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.loadCampaign();
  },
  methods: {
    async publish() {
      await this.$axios.$post(this.campaignURI + '/publish');
    },
    async saveCampaign() {
      try {
        this.saving = true;

        await this.$axios.$patch(
          `/campaigns/${this.campaignId}`,
          this.savePayload,
        );
        this.$snack.show('Saved successfully', 'success');
        this.dirty = false;
        this.status = this.savePayload.status;
        this.campaign.attributes.scheduled = this.savePayload.scheduled;
      } catch (error) {
        this.$snack.show("Couldn't save campaign", 'error');
      }
      this.saving = false;
    },

    async loadCampaign() {
      try {
        this.campaign = await this.$axios.$get(this.campaignURI);
      } catch (error) {
        if (error.code === 'NotFound') this.$snack.show('Not found', 'error');

        this.$router.push('/campaigns');
      }
      this.loading = false;
      this.false = true;
    },
    onCopy: function () {
      this.$snack.show('Copied to clipboard', 'success');
    },
    onError: function () {
      this.$snack.show('Failed to copy', 'danger');
    },
    async sendCampaignToMailingList() {
      this.sending = true;
      try {
        await this.$axios.$post(`/campaigns/${this.campaignId}/send`);
        this.status = 'sent';
        this.$snack.show('Sent successfully', 'success');
      } catch (error) {
        this.$snack.show('Sending failed', 'error');
      }
      this.sending = false;
      this.confirmSend = false;
    },
    openDeliveryLinksDialog(item = undefined) {
      this.deliveryLinksDialog.links = item
        ? item.links
        : this.deliveryStats.links;
      this.deliveryLinksDialog.visible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.Campaign {
  .Sections {
    > section {
      margin-bottom: 24px;
    }
  }
  .Info {
    .overline {
      margin-bottom: 4px;
    }
  }

  .stat-info-icon {
    text-decoration: none;
    margin-bottom: auto;
  }
}
</style>
