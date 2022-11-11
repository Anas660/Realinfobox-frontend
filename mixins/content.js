import PageHeader from '~/components/organisms/PageHeader';
import CreateContentForm from '~/components/forms/CreateContentForm';

import EditorBlocksMixin from '~/mixins/editorBlocks';
import Roles from '~/mixins/auth';

import { mapState } from 'vuex';

export default {
  components: {
    PageHeader,
    CreateContentForm,
  },
  mixins: [EditorBlocksMixin, Roles],
  data() {
    return {
      saving: false,
      form: {
        data: {
          name: '',
          publish_notification: '',
        },
        valid: false,
      },

      selectedBlockSet: null,
      content: () => {},
    };
  },
  computed: {
    blockSetsSelectItems() {
      return this.blockSets.map(blockSet => {
        return {
          text: `${blockSet.attributes.city_name} - ${blockSet.attributes.name}`,
          value: blockSet,
        };
      });
    },
    ...mapState('config', {
      blockSets: 'blockSets',
      defaultPublishNotification: 'publishNotification',
    }),
  },
  watch: {
    defaultPublishNotification({ text }) {
      if (text && !this.form.data.publish_notification) {
        this.form.data.publish_notification = text;
      }
    },
  },
  created() {
    this.$nextTick(() => {
      if (this.isEditor || this.isAdmin) {
        this.$store.dispatch('config/loadBlockSets');
        this.$store.dispatch('config/loadPublishNotification');
      }
    });
  },

  methods: {
    blockSetChange() {
      //template changed by user interaction
      this.blocks = [
        ...this.selectedBlockSet.blocks.map(bl => ({
          ...bl,
          default: bl.customizable,
        })),
      ];
    },

    async saveContent(attributes, blocks) {
      this.saving = true;
      try {
        const route = this.saveMethod === 'post' ? '' : this.contentId;
        const response = await this.$axios[`$${this.saveMethod}`](
          `/content/${route}`,
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
