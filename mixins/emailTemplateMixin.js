import SectionHeader from '~/components/molecules/SectionHeader';
import CKEditor from '~/components/organisms/CKEditor';
export default {
  components: {
    SectionHeader,
    CKEditor,
  },
  data() {
    return {
      template: undefined,
      subject: undefined,
      saving: false,
    };
  },
  watch: {
    storeTemplate({ template, subject }) {
      this.template = template;
      this.subject = subject;
    },
  },
  created() {
    this.$store.dispatch('config/loadEmailTemplate', {
      templateName: this.templateName,
    });
  },
  methods: {
    async save() {
      this.saving = true;
      try {
        await this.$store.dispatch('config/saveEmailTemplate', {
          templateName: this.templateName,
          email: this.template,
          subject: this.subject,
        });
      } finally {
        this.saving = false;
      }
    },
  },
};
