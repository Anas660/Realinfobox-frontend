<template>
  <div class="Content" :style="{ height: `${computedHeight}px` }">
    <div v-if="!branding.customBannerUrl" class="ReportBanner">
      <img
        v-if="logoPhotoUrl"
        class="ImageWidth"
        :src="logoPhotoUrl"
        alt="Logo"
      />
      <div class="TextContent">
        <h3 :style="{ color: color1 }">{{ name }}</h3>
        <ReportParagraph :bold="true" :color="color2">{{
          title
        }}</ReportParagraph>
        <ReportParagraph :color="color2">{{ company }}</ReportParagraph>
        <ReportParagraph :bold="true" :color="color2">{{
          phone
        }}</ReportParagraph>
        <ReportParagraph :bold="true" :color="color2">
          {{ website }}
        </ReportParagraph>
        <ReportParagraph :bold="true" :color="color2">{{
          email
        }}</ReportParagraph>
      </div>
      <img
        v-if="agentPhotoUrl"
        :src="agentPhotoUrl"
        alt="Agent photo"
        class="ImageWidth"
        crossorigin="anonymous"
      />
    </div>
    <img
      v-else
      crossorigin="anonymous"
      origin="anonymous"
      :src="customImageSource"
      alt="Custom Banner"
      class="CustomBanner"
    />
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';

export default {
  components: {
    ReportParagraph,
  },
  props: {
    branding: { type: Object, required: true },
    maxWidth: { type: Number, default: 1200 },
  },

  computed: {
    customImageSource() {
      const hash = Math.random().toString(36).substring(7);
      return `${this.branding.customBannerUrl}?${hash}`;
    },

    bannerHeight() {
      return this.branding.bannerHeight;
    },

    color1() {
      return this.branding.color1;
    },

    color2() {
      return this.branding.color2;
    },

    name() {
      return this.branding.name;
    },

    title() {
      return this.branding.title;
    },

    company() {
      return this.branding.company;
    },

    phone() {
      return this.branding.phone;
    },

    website() {
      return this.branding.website;
    },

    email() {
      return this.branding.email;
    },

    logoPhotoUrl() {
      return this.branding.logoUrl;
    },

    backgroundUrl() {
      return this.branding.backgroundUrl;
    },

    agentPhotoUrl() {
      return this.branding.agentPhotoUrl;
    },
    aspectRatio() {
      // 1000 is general report width, for which the branding setup is made
      return 1000 / this.bannerHeight;
    },
    computedHeight() {
      return this.maxWidth / this.aspectRatio;
    },
  },
};
</script>

<style scoped>
.Content {
  display: flex;
}

.ReportBanner {
  display: flex;
  width: 100%;
}

p {
  font-size: 12px;
}

.TextContent {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: auto 10px 10px auto;
}

.ReportBanner p,
h2 {
  margin-bottom: 0;
}

.ImageWidth {
  max-width: 30%;
}

.CustomBanner {
  width: 100%;
  height: 100%;
}
</style>
