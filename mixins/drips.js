import PageHeader from '~/components/organisms/PageHeader';
import DripForm from '~/components/molecules/DripForm';

import EditorBlocksMixin from '~/mixins/editorBlocks';
import Roles from '~/mixins/auth';

export default {
  components: {
    PageHeader,
    DripForm,
  },
  mixins: [EditorBlocksMixin, Roles],

  data() {
    return {
      saving: false,
      form: {
        data: {
          name: '',
        },
        valid: false,
      },

      drip: {},
    };
  },
  created() {
    this.$nextTick(() => {});
  },

  methods: {
    async saveDrip(attributes, blocks) {
      this.saving = true;
      try {
        const route = this.saveMethod === 'post' ? '' : this.dripId;
        const response = await this.$axios[`$${this.saveMethod}`](
          `/drips/${route}`,
          {
            ...attributes,
            blocks,
          },
        );
        this.$snack.show('Saved successfully', 'success');
        this.saving = false;
        return response;
      } catch (error) {
        this.$snack.show('Saving error', 'error');
        this.saving = false;
      }
    },
  },
};
