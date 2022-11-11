<template>
  <div class="AxisContainer">
    <div
      class="ArrowContainer"
      :style="{
        position: 'absolute',
        top: '-45px',
        left: arrowTransformationCoef,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }"
    >
      <h4>{{ listingAbsp }}%</h4>
      <MsDownArrow />
    </div>
    <h5
      :style="{
        position: 'absolute',
        left: listingAbsp > 70 ? 0 : 'auto',
        right: listingAbsp <= 70 ? 0 : 'auto',
        top: '-35px',
      }"
    >
      Absorption Rate
    </h5>
    <div class="d-flex justify-content-between">
      <div class="Buyer Rect" :style="{ flex: rectangleFlex.buyer }" />
      <div class="Balanced Rect" :style="{ flex: rectangleFlex.balanced }" />
      <div class="Seller Rect" :style="{ flex: rectangleFlex.seller }" />
    </div>
    <div class="d-flex justify-content-between Numbers">
      <p v-for="num in numbers" :key="num">{{ num * 10 }}</p>
    </div>
    <div class="d-flex justify-content-between">
      <h4 :style="{ marginLeft: buyerTitleMargin }">BUYER'S</h4>
      <h4 :style="{ marginRight: balancedTitleMargin }">BALANCED</h4>
      <h4>SELLER'S</h4>
    </div>
  </div>
</template>

<script>
import MsDownArrow from '~/components/svgIcons/MsDownArrow';

export default {
  components: { MsDownArrow },
  props: {
    name: { type: String, required: true },
    listingAbsp: { type: Number, default: null },
  },
  computed: {
    arrowTransformationCoef() {
      const absorptionTransformed =
        this.listingAbsp > 100 ? 100 : this.listingAbsp;

      return `calc(${absorptionTransformed}% - ${this.arrowShift}px)`;
    },

    arrowShift() {
      return this.isEdmontonOrCalgary ? 21 : 37;
    },

    isEdmontonOrCalgary() {
      const name = this.name.toLowerCase();
      return name === 'edmonton' || this.name === 'calgary';
    },

    numbers() {
      return Array.from(Array(11).keys());
    },

    rectangleFlex() {
      if (this.isEdmontonOrCalgary) {
        return {
          buyer: 3,
          balanced: 2,
          seller: 5,
        };
      }

      return {
        buyer: 1,
        balanced: 2,
        seller: 7,
      };
    },

    buyerTitleMargin() {
      return this.isEdmontonOrCalgary ? 0 : '-10px';
    },

    balancedTitleMargin() {
      return this.isEdmontonOrCalgary ? '110px' : '290px';
    },
  },
};
</script>

<style>
.AxisContainer {
  position: absolute;
  top: 190px;
  left: 45px;
  width: 510px;
  color: #223b82;
}

.Numbers {
  height: 25px;
}

.Buyer {
  background-color: #868ed7;
}

.Balanced {
  background-color: #ffd67e;
  margin: 0 5px;
}

.Seller {
  background-color: #ec5451;
}

.Rect {
  height: 40px;
  border-radius: 10px;
  width: 33%;
}
</style>
