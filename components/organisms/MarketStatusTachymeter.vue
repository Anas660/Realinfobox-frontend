<template>
  <div class="Tachymeter">
    <div class="IconWrapper">
      <AbsorptionRateWheelIcon
        class="Icon"
        :colors="colors"
        :absorption-rate="absorptionRate"
      />
      <div class="HandWrapper">
        <div
          class="Hand"
          :style="{
            transform: `rotate(${rotation}deg)`,
          }"
        >
          <div class="Origin" :style="{ backgroundColor: colors.color2 }" />
          <div class="Body" :style="{ backgroundColor: colors.color2 }">
            <div
              :style="{
                transform:
                  `${absorptionRate}` > 50
                    ? `rotateX(180deg) rotateY(180deg)`
                    : `rotateX(0deg) rotateY(0deg)`,
              }"
            >
              ABSORPTION RATE
            </div>
          </div>
          <div
            class="AbsRate"
            :style="{
              transform:
                `${absorptionRate}` > 50
                  ? `rotateX(180deg) rotateY(180deg)`
                  : `rotateX(0deg) rotateY(0deg)`,
            }"
          >
            {{ absorptionRate }}%
          </div>
          <div
            class="Tip"
            :style="{
              borderRightColor: colors.color2,
            }"
          />
        </div>
      </div>
    </div>
    <div v-if="!hideDescription" class="Description">
      <ReportParagraph
        :color="colors.color2"
        :font-size="smallTitle ? '13' : '17'"
        text-align="center"
      >
        {{ absorptionRate }}% LISTING ABSORPTION RATE
      </ReportParagraph>
      <ReportParagraph
        :color="colors.color2"
        font-size="13"
        text-align="center"
      >
        As of {{ (month - 1) | month('short') }} {{ year }}, we had
        {{ listingsCount | commify }} listings.
      </ReportParagraph>
      <ReportParagraph
        :color="colors.color2"
        font-size="13"
        text-align="center"
      >
        {{ soldListingsCount | commify }} ({{ absorptionRate }}%) listings were
        sold in {{ (month - 1) | month('short') }} {{ year }}
      </ReportParagraph>
    </div>
  </div>
</template>

<script>
import AbsorptionRateWheelIcon from '~/components/svgIcons/AbsorptionRateWheelIcon';
import ReportParagraph from '~/components/atoms/ReportParagraph';

export default {
  components: {
    AbsorptionRateWheelIcon,
    ReportParagraph,
  },

  props: {
    absorptionRate: { type: Number, default: 0 },
    colors: { type: Object, required: true },
    hideDescription: { type: Boolean, default: false },
    listingsCount: { type: Number, default: null },
    month: { type: [String, Number], required: true },
    smallTitle: { type: Boolean, default: false },
    soldListingsCount: { type: Number, default: null },
    year: { type: [String, Number], required: true },
  },

  computed: {
    rotation() {
      const rotationCoef =
        this.absorptionRate > 100 ? 100 : this.absorptionRate;
      return (180 * rotationCoef) / 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.Tachymeter {
  display: flex;
  flex-direction: column;

  .IconWrapper {
    position: relative;
    margin-bottom: 40px;
    transform: scale(1.15);
  }
  .HandWrapper {
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    .Hand {
      position: relative;
      transform-origin: center;
      .Origin {
        position: relative;

        border-radius: 50%;
        width: 40px;
        height: 40px;
        &::after {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          content: '';
          border-radius: 50%;
          background-color: white;
          z-index: 2;
          width: 10px;
          height: 10px;
        }
      }
      .Body {
        font-size: 7px;
        position: absolute;
        right: 80%;
        top: 50%;
        transform: translateY(-50%);
        width: 70px;
        height: 16px;
        background-color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        z-index: 10;
      }
      .AbsRate {
        font-size: 12px;
        position: absolute;
        right: 125%;
        bottom: 65%;
      }
      .Tip {
        z-index: 9;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 253%;
        border-right: 10px solid;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
      }
    }
  }
}
</style>
