<template>
  <div class="pagination-container">
    <div class="pagination">
      <span v-if="total"
        >{{ getPageRecordsStart }}-{{ getPageRecordsCount }} of
        {{ total }}</span
      >
    </div>
    <div class="pagination-selection">
      <div class="select">
        <v-select
          :items="rowsPerPage"
          label="Rows per page"
          :value="limit"
          @input="handleLimit"
        />
      </div>
      <v-pagination :value="page" :length="pages" circle @input="loadPage" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    usersData: { type: Object, default: null },
    pages: { type: Number, default: 1 },
    page: { type: Number, default: 1 },
    limit: { type: [String, Number], default: 1 },
    items: { type: Number, default: 1 },
    total: { type: Number, default: 1 },
  },

  data() {
    return {
      rowsPerPage: [10, 20, 50, 'All'],
    };
  },
  computed: {
    getPageRecordsStart() {
      if (this.limit === 'All') {
        return 1;
      }
      return (this.page - 1) * this.limit + 1;
    },
    getPageRecordsCount() {
      if (this.limit === 'All') {
        return this.items;
      }
      return (this.page - 1) * this.limit + this.items;
    },
  },
  methods: {
    loadPage(page) {
      this.$emit('fetchData', page);
    },
    handleLimit(rows) {
      this.$emit('handleLimit', rows);
    },
  },
};
</script>

<style scoped>
.pagination-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}
.select {
  width: 170px;
  margin-right: 1rem;
}
.pagination {
  color: #807873;
  margin-left: 5px;
}
.pagination-selection {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
