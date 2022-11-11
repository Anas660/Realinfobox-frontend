<template>
  <div class="Table">
    <WinnipegEntryRow
      v-for="propertyType in computedData.propertyTypes"
      :key="propertyType"
      :city="city"
      :row-data="computedData[propertyType]"
      :title="$t(`reports.${city}.${propertyType}`) | capitalize"
      @update-type="val => updateType(val, propertyType)"
    />
  </div>
</template>

<script>
import WinnipegEntryRow from '~/components/molecules/WinnipegEntryRow';
export default {
  components: {
    WinnipegEntryRow,
  },

  props: {
    value: { type: Object, default: null },
    city: { type: String, required: true },
  },

  computed: {
    computedData: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },

  methods: {
    updateType(val, propertyType) {
      this.computedData[propertyType] = val;
    },
  },
};
</script>

<style scoped>
.Table {
  display: flex;
  align-self: center;
  width: 100%;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 5px;
}
</style>
