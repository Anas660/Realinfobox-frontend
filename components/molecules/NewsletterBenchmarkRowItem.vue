<template>
  <div class="Wrapper" :style="{ height: `${sectionHeight}px` }">
    <div
      class="RowTitle"
      :style="{
        backgroundColor: `${branding.color3}`,
        filter: 'brightness(114%)',
      }"
    >
      <component :is="`newsletter-${icon}-icon`" />
      <ReportParagraph
        :color="branding.color2"
        :style="{ marginTop: '10px' }"
        font-size="22"
        text-align="center"
      >
        {{ propertyType | uppercase }}
      </ReportParagraph>
    </div>
    <div class="Content">
      <div class="Squares">
        <BenchmarkSquare
          :largest-value="largestValue"
          :max-square-height="maxSquareHeight"
          :month="month"
          :price="lastYearBenchmark"
          :square-color="branding.color3"
          :year="year - 1"
          subtitle="last year"
        />
        <BenchmarkSquare
          :largest-value="largestValue"
          :max-square-height="maxSquareHeight"
          :month="month - 1"
          :price="lastMonthBenchmark"
          :square-color="branding.color2"
          :year="year"
          subtitle="last month"
        />
        <BenchmarkSquare
          :largest-value="largestValue"
          :max-square-height="maxSquareHeight"
          :month="month"
          :price="presentBenchmark"
          :square-color="branding.color1"
          :subtitle-color="branding.color1"
          :year="year"
          subtitle="present"
        />
      </div>
      <div class="SquareText">
        <div class="Row">
          <ReportParagraph :color="branding.color2" font-size="19">
            Compared to LAST YEAR homes are selling
            {{ benchmarkPriceYtyDelta }}%
            {{ isYearUp ? 'more' : 'less' }}
            <component
              :is="`newsletter-arrow-${isYearUp ? 'up' : 'down'}`"
              class="Arrow"
            />
          </ReportParagraph>
        </div>
        <div class="Row">
          <ReportParagraph :color="branding.color2" font-size="19">
            Compared to LAST MONTH homes are selling
            {{ benchmarkPriceDelta }}%
            {{ isMonthUp ? 'more' : 'less' }}
          </ReportParagraph>
          <component
            :is="`newsletter-arrow-${isMonthUp ? 'up' : 'down'}`"
            class="Arrow"
          />
        </div>
      </div>
    </div>
    <div
      v-if="!hideLine"
      class="Line"
      :style="{ background: branding.color2 }"
    />
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';
import NewsletterDetachedIcon from '~/components/svgIcons/newsletter-report-icons/NewsletterDetachedIcon';
import NewsletterApartmentIcon from '~/components/svgIcons/newsletter-report-icons/NewsletterApartmentIcon';
import BenchmarkSquare from '~/components/molecules/BenchmarkSquare';
import NewsletterRowIcon from '~/components/svgIcons/newsletter-report-icons/NewsletterRowIcon';
import NewsletterSemiDetachedIcon from '~/components/svgIcons/newsletter-report-icons/NewsletterSemi-DetachedIcon';
import NewsletterArrowUp from '~/components/svgIcons/newsletter-report-icons/NewsletterArrowUp';
import NewsletterArrowDown from '~/components/svgIcons/newsletter-report-icons/NewsletterArrowDown';

export default {
  components: {
    NewsletterSemiDetachedIcon,
    ReportParagraph,
    NewsletterRowIcon,
    NewsletterApartmentIcon,
    BenchmarkSquare,
    NewsletterDetachedIcon,
    NewsletterArrowUp,
    NewsletterArrowDown,
  },

  props: {
    benchmarkPriceDelta: { type: Number, default: null },
    benchmarkPriceYtyDelta: { type: Number, default: null },
    hideLine: { type: Boolean, default: false },
    icon: { type: String, default: null },
    lastMonthBenchmark: { type: Number, default: null },
    lastYearBenchmark: { type: Number, default: null },
    maxSquareHeight: { type: Number, default: 100 },
    month: { type: [String, Number], required: true },
    presentBenchmark: { type: Number, default: null },
    propertyType: { type: String, required: true },
    sectionHeight: { type: Number, default: 300 },
    year: { type: [String, Number], required: true },
  },

  computed: {
    branding() {
      return this.$store.state.reports.branding;
    },

    isMonthUp() {
      return this.benchmarkPriceDelta > 0;
    },

    isYearUp() {
      return this.benchmarkPriceYtyDelta > 0;
    },

    largestValue() {
      const domValues = [
        this.presentBenchmark,
        this.lastMonthBenchmark,
        this.lastYearBenchmark,
      ];

      const maxVal = Math.max(...domValues);
      return maxVal;
    },
  },
};
</script>

<style scoped>
.Wrapper {
  position: relative;
  display: flex;
}

.Row {
  display: flex;
}

.RowTitle {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 20%;
}

.Content {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 0 30px;
}

.Squares {
  display: flex;
  height: 70%;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
}

.SquareText {
  display: flex;
  flex-direction: column;
  height: 30%;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 15px;
}

.Line {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 87%;
  height: 1px;
}
</style>
