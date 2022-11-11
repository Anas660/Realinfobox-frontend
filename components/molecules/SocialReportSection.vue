<template>
  <div class="Wrapper" :style="{ height: height }">
    <ReportLeftLabel
      class="Label"
      :colors="colors"
      :label="sectionTitle.toUpperCase()"
    />
    <div class="row">
      <slot />
    </div>
  </div>
</template>

<script>
import ReportLeftLabel from '~/components/atoms/ReportLeftLabel';

export default {
  components: {
    ReportLeftLabel,
  },

  props: {
    branding: { type: Object, required: true },
    height: { type: String, default: 'auto' },
    sectionTitle: { type: String, required: true },
  },

  computed: {
    colors() {
      const { color1, color2, color3 } = this.branding;

      return {
        color1,
        color2,
        color3,
      };
    },
  },
};
</script>

<style scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.Label {
  height: 30px;
  margin-bottom: 15px;
}

.Content {
  display: flex;
  margin: auto 0;
}
</style>
