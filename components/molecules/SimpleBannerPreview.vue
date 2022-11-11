<template>
  <div
    class="CanvasContainer"
    :style="{
      height: `${bannerHeight}px`,
      background: `no-repeat center/100% url(${bannerBackgroundUrl})`,
      border: `2px solid ${colorConfig.color1}`,
    }"
  >
    <img
      v-if="logoPhotoUrl"
      class="ImageWidth"
      :src="logoPhotoUrl"
      alt="Logo"
    />
    <div class="BannerText">
      <h2 :style="{ color: colorConfig.color1 }">
        {{ bannerConfig.name }}
      </h2>
      <p :style="{ color: colorConfig.color2 }" class="bold">
        {{ bannerConfig.title }}
      </p>
      <p :style="{ color: colorConfig.color2 }">
        {{ bannerConfig.company }}
      </p>
      <p :style="{ color: colorConfig.color2 }" class="bold">
        {{ bannerConfig.phone }}
      </p>
      <p :style="{ color: colorConfig.color2 }" class="bold">
        {{ bannerConfig.website }}
      </p>
      <p :style="{ color: colorConfig.color2 }" class="bold">
        {{ bannerConfig.email }}
      </p>
    </div>
    <img
      v-if="agentPhotoUrl"
      class="ImageWidth"
      :src="agentPhotoUrl"
      alt="Agent photo"
    />
  </div>
</template>

<script>
export default {
  props: {
    agentPhotoUrl: { type: String, required: true },
    bannerBackgroundUrl: { type: String, required: true },
    bannerConfig: { type: Object, required: true },
    bannerHeight: { type: Number, required: true },
    colorConfig: { type: Object, required: true },
    logoPhotoUrl: { type: String, required: true },
  },
};
</script>

<style scoped>
.bold {
  font-weight: bold;
}

.CanvasContainer {
  display: flex;
  min-height: 150px;
  max-height: 300px;
  margin: 20px auto;
  width: 100%;
  max-width: 1100px;
}

.BannerText {
  display: flex;
  flex-direction: column;
  text-align: right;
  margin: auto 10px 10px auto;
}

.BannerText p {
  margin: 0;
  line-height: 1.3rem;
}

.ImageWidth {
  max-width: 30%;
}
</style>
