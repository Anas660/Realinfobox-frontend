import PageHeader from '~/components/organisms/PageHeader';
import BlockSetForm from '~/components/forms/BlockSetForm';
import EditorBlocksMixin from '~/mixins/editorBlocks';

export default {
  middleware: 'isAdmin',
  components: {
    PageHeader,
    BlockSetForm,
  },
  mixins: [EditorBlocksMixin],
  data() {
    return {
      form: {
        data: {
          name: '',
          city_id: null,
        },
        valid: false,
      },
    };
  },
  computed: {
    blockSets() {
      return this.$store.state.config.blockSets;
    },
  },
  created() {
    this.$nextTick(() => {
      this.loadBlockSets();
    });
  },
  methods: {
    loadBlockSets() {
      this.$store.dispatch('config/loadBlockSets');
    },
  },
};
