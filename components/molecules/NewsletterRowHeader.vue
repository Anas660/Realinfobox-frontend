<template>
  <div
    class="NewsletterRowHeading"
    :style="{ backgroundColor: branding.color2 }"
  >
    <Dot />
    <ReportParagraph color="white" font-size="24">
      {{ title | uppercase }}
    </ReportParagraph>
  </div>
</template>

<script>
import Dot from '~/components/atoms/Dot';
import ReportParagraph from '~/components/atoms/ReportParagraph';
export default {
  components: {
    Dot,
    ReportParagraph,
  },

  props: {
    title: { type: String, required: true },
  },

  computed: {
    branding() {
      return this.$store.state.reports.branding;
    },
  },
};
</script>

<style scoped lang="scss">
.NewsletterRowHeading {
  display: flex;
  height: 40px;
  align-items: center;
  width: 50%;
  padding-left: 20px;

  p {
    margin-left: 10px;
  }
}
</style>
