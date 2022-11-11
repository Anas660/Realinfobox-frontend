<template>
  <div class="Table">
    <EdmontonEntryRow
      v-for="propertyType in computedData.propertyTypes"
      :key="propertyType"
      :row-data="computedData[propertyType]"
      :title="$t(`reports.edmonton.${propertyType}`) | capitalize"
      @update-type="val => updateType(val, propertyType)"
    />
  </div>
</template>

<script>
import EdmontonEntryRow from '~/components/molecules/EdmontonEntryRow';
export default {
  components: {
    EdmontonEntryRow,
  },

  props: {
    value: { type: Object, default: null },
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
