import { mapState } from 'vuex';
export default {
  components: {},
  data() {
    return {
      selectedTag: undefined,
      selectedTags: undefined,
    };
  },
  computed: {
    ...mapState('mailingList', {
      tags: 'tags',
    }),
  },
  watch: {
    tags: {
      handler() {
        this.selectDefaultTag();
      },
    },
  },
  mounted() {
    if (!this.tags || !this.tags.length) this.loadTags();

    this.$nextTick(() => {
      this.selectDefaultTag();
    });
  },
  methods: {
    selectDefaultTag() {
      if (!this.tags.length) return;
      const def = this.tags.find(t => t.default);
      this.selectedTag = def || this.tags[0];
      this.selectedTags = this.tags.filter(t => t.default) || [
        this.selectedTag,
      ];
    },
    loadTags() {
      this.$store.dispatch('mailingList/getTags');
    },
  },
};
