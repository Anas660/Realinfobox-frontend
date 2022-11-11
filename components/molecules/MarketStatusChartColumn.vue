<template>
  <div class="ColumnWrapper">
    <ReportParagraph
      v-if="isNull"
      :color="color2"
      :style="{ marginTop: 'auto' }"
      text-align="center"
    >
      N/A
    </ReportParagraph>
    <div v-else class="Column">
      <div
        class="ColumnOne"
        :style="{ height: `${unsoldPercent.toFixed(2)}%`, background: color3 }"
      >
        <ReportParagraph
          v-if="!showSoldInside"
          :color="color2"
          :style="{ marginTop: '25px' }"
          class="ActiveListingsPercentage"
        >
          {{ unsoldPercent.toFixed(2) }}%
        </ReportParagraph>

        <div class="SoldPercentWrapper">
          <ReportParagraph
            v-if="!showSoldInside"
            :style="{ marginBottom: '15px' }"
            :color="color2"
          >
            {{ soldPercent }}%
          </ReportParagraph>
          <UpDownArrows
            v-if="soldPercent < 5"
            :arrow-color="color2"
            :is-up="isDeltaPositive"
          />
        </div>
      </div>
      <div
        :style="{ height: `${soldPercent}%`, background: valueColumnColor }"
        class="ColumnDown"
      >
        <UpDownArrows
          v-if="soldPercent < 100 && soldPercent > 5"
          :is-up="isDeltaPositive"
        />
        <ReportParagraph
          v-if="showSoldInside"
          :style="{
            transform: 'rotate(-90deg)',
            marginTop: soldPercent < 100 ? '30px' : '20px',
          }"
          color="white"
        >
          {{ unsoldPercent.toFixed(2) }}%
        </ReportParagraph>
        <div class="ArrowContainer">
          <UpDownArrows v-if="soldPercent > 99" :is-up="isDeltaPositive" />
        </div>
        <ReportParagraph
          v-if="showSoldInside"
          :style="{
            marginTop: 'auto',
            transform: 'rotate(-90deg)',
            marginBottom: '15px',
          }"
          color="white"
        >
          {{ soldPercent }}%
        </ReportParagraph>
      </div>
    </div>
    <ReportParagraph :color="color2" text-align="center">{{
      monthName
    }}</ReportParagraph>
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';
import UpDownArrows from '~/components/atoms/UpDownArrows';

export default {
  components: {
    ReportParagraph,
    UpDownArrows,
  },

  props: {
    colors: { type: Object, required: true },
    month: { type: [String, Number], required: true },
    soldPercentDelta: { type: Number, default: null },
    soldPercent: { type: Number, default: null },
    unsoldPercent: { type: Number, default: null },
  },

  computed: {
    showSoldInside() {
      return this.soldPercent > 60;
    },

    color1() {
      return this.colors.color1;
    },

    color2() {
      return this.colors.color2;
    },

    color3() {
      return this.colors.color3;
    },

    isNull() {
      return this.soldPercent === null;
    },

    isDeltaPositive() {
      return this.soldPercentDelta > 0;
    },

    valueColumnColor() {
      return this.isDeltaPositive ? this.color2 : this.color1;
    },

    monthName() {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      return monthNames[this.month - 1].slice(0, 3);
    },
  },
};
</script>

<style scoped>
.ArrowContainer {
  margin-top: 10px;
}

.ColumnWrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 27px;
}

.Column {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ColumnOne {
  display: flex;
  flex-direction: column;
}

.ColumnOne p {
  transform: rotate(-90deg);
}

.ActiveListingsPercentage {
  margin-bottom: auto;
}

.ColumnDown,
.ColumnDown div {
  display: flex;
  flex-direction: column;
}

.SoldPercentWrapper {
  display: flex;
  flex-direction: column;
}

.SoldPercentWrapper p {
  margin-top: 5px;
}
</style>
