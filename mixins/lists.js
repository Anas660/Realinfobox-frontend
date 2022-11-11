import SkeletonTableRows from '~/components/molecules/SkeletonTableRows';

export default {
  components: {
    SkeletonTableRows,
  },

  data() {
    return {
      loading: true,
      tableMenus: {
        actions: {},
      },
    };
  },

  watch: {
    tableData: {
      handler() {
        this.loading = false;
      },
    },
  },
};
