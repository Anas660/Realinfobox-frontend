<template>
  <div class="Wrapper">
    <ReportParagraph :color="colors.color2" class="Value" font-size="50">
      {{ adom }}
    </ReportParagraph>
    <div class="Text">
      <ReportParagraph
        :color="colors.color1"
        :style="{ borderColor: colors.color2 }"
        class="Title"
        font-size="20"
      >
        DAYS - ADOM
      </ReportParagraph>
      <ReportParagraph :color="colors.color2" font-size="15">
        {{ monthString }} {{ year }}
      </ReportParagraph>
    </div>
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';
export default {
  components: {
    ReportParagraph,
  },

  props: {
    adom: { type: [String, Number], required: true },
    colors: { type: Object, required: true },
    hideBorder: { type: Boolean, default: false },
    month: { type: [String, Number], required: true },
    year: { type: [String, Number], required: true },
  },

  computed: {
    monthString() {
      return this.$options.filters.month(this.month - 1, 'short');
    },
  },
};
</script>

<style scoped>
.Wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 343.75px;
}

.Value {
  margin-right: 20px;
}

.Text {
  display: flex;
  flex-direction: column;
}

.Title {
  border-bottom: 2px solid black;
}
</style>
