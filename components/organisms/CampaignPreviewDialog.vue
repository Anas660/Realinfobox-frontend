<template>
  <v-dialog v-model="visible" width="900">
    <v-card>
      <v-card-title
        class="headline d-flex justify-content-between mb-3"
        primary-title
      >
        Campaign preview
        <div v-if="previewHTML" class="d-flex align-items-center">
          <!--<v-btn
                 :disabled="isHtmlDownloading"
                 :loading="isHtmlDownloading"
                 width="150"
                 color="primary"
                 class="mr-2"
                 @click="downloadFile()">
            Download HTML
          </v-btn>-->
          <v-btn
            :disabled="isPngDownloading"
            :loading="isPngDownloading"
            width="140"
            color="primary"
            class="mr-2"
            @click="downloadPngFile()"
          >
            Download PNG
          </v-btn>
          <v-btn-toggle v-model="showHTML" mandatory dense dark class="mr-2">
            <v-btn :value="false">
              <v-icon left> mdi-file-image </v-icon>
              Text
            </v-btn>
            <v-btn :value="true">
              <v-icon left> mdi-xml </v-icon>
              HTML
            </v-btn>
          </v-btn-toggle>
          <v-btn
            v-clipboard:copy="previewHTML"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            color="secondary"
          >
            <v-icon left> mdi-content-copy </v-icon>
            copy html
          </v-btn>
        </div>
      </v-card-title>

      <v-card-text class="d-flex justify-content-center">
        <div v-if="loading" class="Preview Skeleton elevation-2 p-4">
          <v-skeleton-loader type="heading" />
          <v-skeleton-loader type="paragraph" />
          <v-skeleton-loader type="image" />
          <v-skeleton-loader type="paragraph" />
        </div>
        <div v-else-if="previewHTML" ref="Preview" class="Preview">
          <div v-if="showHTML" ref="previewHTML" class="HTML elevation-2 p-4">
            <pre>{{ previewHTML }}</pre>
          </div>
          <div v-else v-html="previewHTML" />
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="error" text @click="closeDialog"> close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import domToImage from 'dom-to-image-more';

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    campaignId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      isHtmlDownloading: false,
      isPngDownloading: false,
      previewHTML: '',
      showHTML: false,
    };
  },
  computed: {
    visible: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  watch: {
    visible: {
      handler(newVal) {
        if (newVal) {
          this.loadCampaignHTML();
        }
      },
    },
  },
  methods: {
    async loadCampaignHTML() {
      try {
        this.loading = true;
        this.previewHTML = await this.$axios.$get(
          `/campaigns/${this.campaignId}/user-preview`,
        );
      } catch (error) {
        this.$snack.show('Failed to load campaign HTML', 'danger');
      }
      this.loading = false;
    },
    async downloadPngFile() {
      try {
        this.isPngDownloading = true;

        domToImage
          .toPng(this.$refs.Preview, { cacheBust: true })
          .then(dataUrl => {
            const downloadLink = document.createElement('a');
            downloadLink.href = dataUrl;
            downloadLink.download = 'campaign.png';
            downloadLink.click();
          })
          .catch(() => {
            this.$snack.show('Failed to download png', 'danger');
          });
      } catch (error) {
        this.$snack.show('Failed to download png', 'danger');
      }
      this.isPngDownloading = false;
    },
    async downloadFile() {
      try {
        this.isHtmlDownloading = true;
        const downloadLink = document.createElement('a');
        const blob = new Blob(
          [
            await this.$axios.$get(
              `/campaigns/${this.campaignId}/user-preview`,
            ),
          ],
          {
            type: 'text/html',
          },
        );
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'campaign.html';
        downloadLink.click();
      } catch (error) {
        this.$snack.show('Failed to download html', 'danger');
      }
      this.isHtmlDownloading = false;
    },
    closeDialog() {
      this.visible = false;
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
.Preview {
  width: 605px;
  background-color: white;

  .HTML {
    word-wrap: break-word;
    pre {
      white-space: normal;
      width: 100%;
    }
  }

  &.Skeleton > * {
    margin-bottom: 16px;
  }
}
</style>
