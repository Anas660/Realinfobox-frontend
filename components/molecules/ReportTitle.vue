<template>
  <div class="d-flex items-center justify-between border p-1.5">
    <div class="d-flex">
      <component :is="icon" :colors="colors" class="Icon" />

      <ReportParagraph :color="color1" font-size="16">
        {{ label }}
      </ReportParagraph>
    </div>
    <ReportParagraph :color="color2" font-size="12">
      as of {{ asOf }}
    </ReportParagraph>
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';
import ApartmentIcon from '~/components/svgIcons/ApartmentIcon';
import DetachedIcon from '~/components/svgIcons/DetachedIcon';
import RowIcon from '~/components/svgIcons/RowIcon';
import SemiDetachedIcon from '~/components/svgIcons/SemiDetachedIcon';

export default {
  components: {
    DetachedIcon,
    ReportParagraph,
    ApartmentIcon,
    RowIcon,
    SemiDetachedIcon,
  },

  props: {
    asOf: { type: String, required: true },
    color1: { type: String, required: true },
    color2: { type: String, required: true },
    color3: { type: String, required: true },
    label: { type: String, required: true },
    propertyType: { type: String, required: true },
  },

  computed: {
    colors() {
      return {
        color1: this.color1,
        color2: this.color2,
        color3: this.color3,
      };
    },

    icon() {
      let property = this.propertyType;
      if (property === 'duplex' || property === 'residential')
        property = 'semi-detached';
      if (property === 'condo') property = 'apartment';
      return property + '-icon';
    },
  },
};
</script>

<style scoped>
.Icon {
  width: auto;
  height: 25px;
  margin: 0 7px;
}

.Title {
  display: flex;
  padding: 5px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}
</style>
