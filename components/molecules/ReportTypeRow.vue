<template>
  <div
    class="d-flex mb-4 items-center justify-between border-0 border-b border-solid border-gallery pb-4"
  >
    <div class="d-flex items-center">
      <img
        :width="140"
        :height="85"
        :src="require(`~/assets/images/${toReportType}-thumbnail.png`)"
      />
      <div class="ml-9">
        <h3 class="font-medium text-creole">{{ title }}</h3>
        <h3 class="text-tapa">{{ resolution }} px</h3>
      </div>
    </div>
    <OutlinedButton text="Show Preview" :to="`${path}/${toReportType}`" />
  </div>
</template>

<script>
import OutlinedButton from '~/components/atoms/OutlinedButton';

export default {
  components: { OutlinedButton },
  props: {
    title: { type: String, required: true },
    toReportType: { type: String, required: true },
    resolution: { type: String, required: true },
  },
  computed: {
    path() {
      return this.$route.path;
    },
    thumbnailSize() {
      let size = {
        width: 140,
        height: 100,
      };
      if (this.toReportType === 'complete') {
        size = {
          ...size,
          width: 140,
        };
      }
      if (this.toReportType === 'newsletter') {
        size = {
          width: 140,
          height: 120,
        };
      }
      return size;
    },
  },
};
</script>

<style scoped>
.ImgWrapper {
  width: 120px;
}
</style>
