<template>
  <div class="CreateCampaign container">
    <PageHeader>
      <template #right>
        <div class="d-flex children-margin">
          <v-btn
            color="secondary"
            :loading="reloading"
            :disabled="reloading || saving"
            @click="dialogs.previewDrip.visible = true"
          >
            Preview
          </v-btn>
          <!-- <v-btn
            v-clipboard:copy="drip.preview_url"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            color="secondary"
            :loading="reloading"
            :disabled="reloading || saving"
          >
            <v-icon left>
              mdi-link
            </v-icon>
            Copy link
          </v-btn> -->

          <v-btn
            color="primary"
            :loading="saving"
            :disabled="!form.valid"
            @click="editDrip"
          >
            <v-icon left> mdi-content-save </v-icon>
            Save
          </v-btn>
        </div>
      </template>
    </PageHeader>
    <v-fade-transition hide-on-leave>
      <v-skeleton-loader v-if="loading" type="article, actions, image" />
      <div v-else class="Sections">
        <section class="white elevation-1 container-fluid CampaignInfo p-4">
          <DripForm v-model="form" />
        </section>
        <section>
          <div class="BlocksControls d-flex justify-content-end">
            <v-btn color="secondary" @click="dialogs.addBlock.visible = true">
              <v-icon left> mdi-server-plus </v-icon>
              Add Block
            </v-btn>
          </div>
        </section>
        <EditorBlocks v-model="blocks" editable movable removable />
      </div>
    </v-fade-transition>
    <!-- <DripPreviewDialog
      ref="contentPreviewDialog"
      v-model="dialogs.previewDrip.visible"
      :content-id="contentId"
    /> -->
    <AddBlockDialog v-model="dialogs.addBlock.visible" @submit="addBlock" />
  </div>
</template>

<script>
import DripMixin from '~/mixins/drips';
// import DripPreviewDialog from '~/components/organisms/DripPreviewDialog';
// import PublishToUserDialog from '~/components/organisms/PublishToUserDialog';
export default {
  components: {
    // DripPreviewDialog,
    // PublishToUserDialog,
  },
  mixins: [DripMixin],
  data() {
    return {
      loading: true,
      reloading: false,
      publishing: false,

      saveMethod: 'put',
      dialogs: {
        previewDrip: {
          visible: false,
        },
      },
    };
  },
  computed: {
    dripId() {
      return this.$route.params.id;
    },
    attributes() {
      return this.drip ? this.drip.attributes : undefined;
    },
    dripURI() {
      return `/drips/${this.dripId}`;
    },
  },
  watch: {
    drip: {
      handler(newDrip) {
        if (!newDrip) return;
        this.$nextTick(() => {
          // as we are loading default blocks, remove the default flag so that we can edit them
          this.blocks = newDrip.blocks.map(bl => {
            const newBl = { ...bl };
            delete newBl.default;
            return newBl;
          });
          this.form = {
            valid: true,
            data: {
              ...this.form.data,
              ...newDrip.attributes,
            },
          };
        });
      },
      deep: true,
    },
  },
  mounted() {
    this.loadDrip();
  },
  methods: {
    async editDrip() {
      await this.saveDrip(
        {
          ...this.form.data,
        },
        this.blocks,
      );

      this.loadDrip();
      // this.$refs.contentPreviewDialog.loadDripHTML();
    },
    async loadDrip() {
      this.reloading = true;
      try {
        this.drip = await this.$axios.$get(this.dripURI);
      } catch (error) {
        if (error.code === 'NotFound') this.$snack.show('Not found', 'error');

        this.$router.push('/drips');
      } finally {
        this.reloading = false;
        this.loading = false;
      }
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
