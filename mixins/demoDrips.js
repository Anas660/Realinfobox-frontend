import PageHeader from '~/components/organisms/PageHeader';
import DemoDripForm from '~/components/molecules/DemoDripForm';
import EditorBlocksMixin from '~/mixins/editorBlocks';

export default {
  middleware: 'isAdmin',
  components: {
    PageHeader,
    DemoDripForm,
  },
  mixins: [EditorBlocksMixin],
  data() {
    return {
      form: {
        data: {
          name: '',
          city_id: null,
          subject: null,
          delay: null,
        },
        valid: false,
      },
    };
  },
  computed: {
    demoDrips() {
      return this.$store.state.config.demoDrips;
    },
  },
  created() {
    this.$nextTick(() => {
      this.loadDemoDrips();
    });
  },
  methods: {
    loadDemoDrips() {
      this.$store.dispatch('config/getClientsStatistics');
    },
  },
};
