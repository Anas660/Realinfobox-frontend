<template>
  <div class="Cell">
    <div class="d-flex PropertyTypeLabel align-items-center">
      <DetachedIcon :colors="colors" height="38" width="38" class="mr-5" />
      <div>
        <ReportParagraph :bold="true" :color="colors.color2" font-size="15">
          PROPERTY TYPE:
        </ReportParagraph>
        <ReportParagraph :bold="true" :color="colors.color1" font-size="15">
          {{ propertyType | capitalize }}
        </ReportParagraph>
      </div>
    </div>
    <div class="TachyWrapper">
      <MarketStatusTachymeter
        :absorption-rate="absorptionRateLimited"
        :colors="colors"
        :hide-description="true"
        :month="month"
        :small-title="true"
        :year="year"
      />
    </div>
    <ReportParagraph font-size="15" :color="colors.color2" text-align="center">
      {{ absorptionRateLimited }}%
    </ReportParagraph>
    <ReportParagraph font-size="15" :color="colors.color2" text-align="center">
      LISTING ABSORPTION RATE
    </ReportParagraph>
  </div>
</template>

<script>
import DetachedIcon from '~/components/svgIcons/DetachedIcon';
import MarketStatusTachymeter from '~/components/organisms/MarketStatusTachymeter';
import ReportParagraph from '~/components/atoms/ReportParagraph';

export default {
  components: { DetachedIcon, ReportParagraph, MarketStatusTachymeter },

  props: {
    absorptionRate: { type: [String, Number], required: true },
    branding: { type: Object, required: true },
    month: { type: [String, Number], required: true },
    propertyType: { type: String, required: true },
    year: { type: [String, Number], required: true },
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
    absorptionRateLimited() {
      return this.absorptionRate > 100 ? 100 : this.absorptionRate;
    },
  },
};
</script>

<style scoped>
.Cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  margin: 20px 0;
}

.TachyWrapper {
  transform: scale(0.9);
}

.PropertyTypeLabel {
  margin-bottom: 15px;
}
</style>
