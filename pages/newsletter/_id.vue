<template>
  <div class="CreateCampaign container">
    <PageHeader>
      <template #right>
        <div class="d-flex children-margin">
          <v-btn
            color="secondary"
            :loading="reloading"
            :disabled="reloading || saving"
            @click="dialogs.previewContent.visible = true"
          >
            Preview
          </v-btn>
          <v-btn
            v-clipboard:copy="content.preview_url"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            color="secondary"
            :loading="reloading"
            :disabled="reloading || saving"
          >
            <v-icon left> mdi-link </v-icon>
            Copy link
          </v-btn>
          <template v-if="status !== 'sent'">
            <v-btn
              class="mr-2"
              color="success"
              :disabled="!canPublish || saving"
              :loading="publishing"
              @click="dialogs.publishToAll.visible = true"
            >
              <v-icon left> mdi-publish </v-icon>
              Publish
            </v-btn>

            <v-btn
              class="mr-2"
              color="success"
              :loading="publishing"
              :disabled="loading || saving"
              @click="dialogs.publishToUser.visible = true"
            >
              <v-icon left> mdi-publish </v-icon>
              Publish to user...
            </v-btn>

            <v-btn
              color="primary"
              :loading="saving"
              :disabled="!form.valid"
              @click="editContent"
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
        <section class="white elevation-1 container-fluid CampaignInfo p-4">
          <template v-if="isDraft">
            <v-alert v-if="!attributes.scheduled" color="warning">
              Please choose a time to schedule the content
            </v-alert>
            <CreateContentForm v-model="form" allow-scheduling />
          </template>
          <template v-else>
            <!-- content sent, show info -->
            <div class="">
              <div class="row Info">
                <div class="col item">
                  <div class="overline">Campaign name</div>
                  <div>
                    {{ attributes.campaign_name }}
                  </div>
                </div>
                <div class="col item">
                  <div class="overline">Status</div>
                  <div>
                    <v-chip v-if="status" color="primary">
                      {{ status }}
                    </v-chip>
                  </div>
                </div>
                <div class="col item">
                  <div class="overline">Scheduled at</div>
                  <div>
                    {{
                      attributes.scheduled | toZonedTime(content.city.timezone)
                    }}
                  </div>
                </div>
                <div class="col item">
                  <div class="overline">Sent at</div>
                  <div v-if="attributes.sent_at">
                    {{
                      attributes.sent_at | toZonedTime(content.city.timezone)
                    }}
                  </div>
                </div>
              </div>
            </div>
          </template>
          <div v-if="isDraft">
            <!-- the editor for publish notification -->
            <div class="row">
              <div class="col-6">
                <h4>publish notification</h4>
                <div class="elevation-1">
                  <CKEditor v-model="form.data.publish_notification" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- <section>
          Block set
          <div class="row">
            <div class="col-6 d-flex align-items-center">
              <v-select
                v-model="selectedBlockSet"
                :items="blockSetsSelectItems"
                label="Select a Block set"
                solo
                hide-details
                @change="blockSetChange"
              />
              <v-btn
                class="ml-2"
                @click="blockSetChange"
              >
                <v-icon left>
                  mdi-refresh
                </v-icon>
                reset
              </v-btn>
            </div>
          </div>
        </section> -->
        <EditorBlocks v-model="blocks" :editable="status !== 'sent'" />
      </div>
    </v-fade-transition>
    <ContentPreviewDialog
      ref="contentPreviewDialog"
      v-model="dialogs.previewContent.visible"
      :content-id="contentId"
    />
    <PublishToUserDialog
      v-if="content.city"
      v-model="dialogs.publishToUser.visible"
      :city-id="content.city.id"
      :busy="publishing"
      @submit="publishToUser"
    />
    <PublishToAllDialog
      v-model="dialogs.publishToAll.visible"
      :busy="publishing"
      @submit="publishToAll"
    />
  </div>
</template>

<script>
import CKEditor from '~/components/organisms/CKEditor';

import ContentMixin from '~/mixins/content';
import ContentPreviewDialog from '~/components/organisms/ContentPreviewDialog';
import PublishToUserDialog from '~/components/organisms/PublishToUserDialog';
import PublishToAllDialog from '~/components/organisms/PublishToAllDialog';
export default {
  components: {
    ContentPreviewDialog,
    PublishToAllDialog,
    PublishToUserDialog,
    CKEditor,
  },
  mixins: [ContentMixin],
  data() {
    return {
      loading: true,
      reloading: false,
      publishing: false,

      saveMethod: 'put',
      dialogs: {
        previewContent: {
          visible: false,
        },
        publishToUser: {
          visible: false,
        },
        publishToAll: {
          visible: false,
        },
      },
    };
  },
  computed: {
    contentId() {
      return this.$route.params.id;
    },
    status() {
      if (this.attributes) {
        return this.attributes.status;
      }
      return null;
    },
    attributes() {
      return this.content ? this.content.attributes : undefined;
    },
    isDraft() {
      return this.status === 'draft';
    },
    isPublished() {
      return this.status === 'scheduled';
    },
    contentURI() {
      return `/content/${this.contentId}`;
    },
    hasScheduled() {
      return this.attributes && this.attributes.scheduled;
    },
    canPublish() {
      return (
        this.hasScheduled &&
        !this.loading &&
        !this.publishing &&
        this.form.valid &&
        this.isDraft
      );
    },
  },
  watch: {
    content: {
      handler(newContent) {
        if (!newContent) return;
        this.$nextTick(() => {
          // as we are loading default blocks, remove the default flag so that we can edit them
          this.blocks = newContent.blocks.map(bl => {
            const newBl = {
              ...bl,
              default: bl.customizable, //but keep the on customizable blocks because the editor should not be able to edit them in the campaign
            };
            return newBl;
          });
          this.form = {
            valid: true,
            data: {
              ...this.form.data,
              ...newContent.attributes,
              city: newContent.city,
              block_set_id: newContent.block_set_id,
              publish_notification:
                newContent.attributes.publish_notification ||
                this.defaultPublishNotification.text,
            },
          };
          this.updateSelectedBlockSet();
        });
      },
      deep: true,
    },
    blockSets: {
      handler() {
        this.updateSelectedBlockSet();
      },
      deep: true,
    },
  },
  mounted() {
    this.loadContent();
  },
  methods: {
    updateSelectedBlockSet() {
      if (!this.content || !this.content.attributes) return;
      this.selectedBlockSet = this.blockSets.find(
        t => t.id === this.content.block_set_id,
      );
    },
    async publishToUser(user) {
      await this.publish({ users: [user] });
      this.dialogs.publishToUser.visible = false;
    },
    async publishToAll() {
      await this.publish({});
      this.dialogs.publishToAll.visible = false;
    },
    async publish({ users }) {
      this.publishing = true;
      try {
        await this.$axios.$post(this.contentURI + '/publish', {
          users,
        });
        if (!users) this.content.attributes.status = 'scheduled';
        this.$snack.show('Published successfully', 'success');
      } catch (error) {
        this.$snack.show('Error publishing', 'error');
      }
      this.publishing = false;
    },
    async editContent() {
      await this.saveContent(
        {
          ...this.form.data,
        },
        this.blocks,
      );

      this.loadContent();
      this.$refs.contentPreviewDialog.loadContentHTML();
    },
    async loadContent() {
      this.reloading = true;
      try {
        this.content = await this.$axios.$get(this.contentURI);
      } catch (error) {
        if (error.code === 'NotFound') this.$snack.show('Not found', 'error');

        this.$router.push('/content');
      }
      this.reloading = false;
      this.loading = false;
    },
    onCopy: function () {
      this.$snack.show('Copied to clipboard', 'success');
    },
    onError: function () {
      this.$snack.show('Failed to copy', 'danger');
    },
  },
};
</script>

<style lang="scss" scoped>
.CreateCampaign {
  .Sections {
    > section {
      margin-bottom: 24px;
    }
  }
}

.AttrsTable {
  tr {
    td:first-child {
      padding: 4px;
      padding-right: 16px;
      font-weight: bold;
    }
  }
}
</style>
