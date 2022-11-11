<template>
  <div class="container">
    <PageHeader title="Content preview" />
    <div class="d-flex">
      <div v-if="loading" class="Preview Skeleton elevation-2 p-4">
        <v-skeleton-loader type="heading" />
        <v-skeleton-loader type="paragraph" />
        <v-skeleton-loader type="image" />
        <v-skeleton-loader type="paragraph" />
      </div>
      <div v-else class="Preview elevation-2 p-4" v-html="previewHTML" />
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/organisms/PageHeader';

export default {
  components: {
    PageHeader,
  },
  layout: 'public',
  auth: false,

  data() {
    return {
      loading: false,
      previewHTML: '',
    };
  },
  computed: {
    contentToken() {
      return this.$route.query.content_token;
    },
    campaignToken() {
      return this.$route.query.campaign_token;
    },
  },
  mounted() {
    this.loadPreviewHTML();
  },
  methods: {
    async loadPreviewHTML() {
      try {
        this.loading = true;
        let url = '/public/content/preview';
        if (this.contentToken) url += `?content_token=${this.contentToken}`;
        else if (this.campaignToken)
          url += `?campaign_token=${this.campaignToken}`;
        const data = await this.$axios.$get(url);
        this.previewHTML = data.html;
      } catch (error) {
        this.$snack.show('Failed to load the preview html', 'danger');
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.Preview {
  width: 600px;
  max-width: 600px;

  &.Skeleton > * {
    margin-bottom: 16px;
  }

  &:not(.Skeleton) {
    all: initial;
    * {
      all: unset;
    }
  }
}
</style>
