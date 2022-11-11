<template>
  <tbody>
    <tr v-for="(row, i1) in new Array(5).fill(null)" :key="i1">
      <td v-for="(header, i2) in tableHeaders" :key="i2">
        <v-skeleton-loader
          type="table-cell"
          :class="{ 'd-flex justify-content-end': header.align === 'right' }"
        />
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    tableHeaders: {
      type: Array,
      default: () => new Array(5).fill(null),
    },
  },
};
</script>

<style></style>
