<template>
  <div>
    <SectionHeader>
      <template #right>
        <v-btn
          color="primary"
          :disabled="!publishNotification"
          @click="save"
          @loading="saving"
        >
          <v-icon left> mdi-table-plus </v-icon>
          Save text
        </v-btn>
      </template>
    </SectionHeader>
    <div class="container-fluid elevation-1 white">
      <div class="row">
        <div class="col-6">
          <CKEditor v-model="publishNotification" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '~/components/molecules/SectionHeader';
import ListsMixin from '~/mixins/lists';
import CKEditor from '~/components/organisms/CKEditor';

export default {
  components: {
    SectionHeader,
    CKEditor,
  },
  mixins: [ListsMixin],
  data() {
    return {
      publishNotification: undefined,
      saving: false,
    };
  },
  computed: {
    defaultNotif() {
      return this.$store.state.config.publishNotification;
    },
  },
  watch: {
    defaultNotif(newNotif) {
      this.publishNotification = newNotif.text;
    },
  },
  created() {
    this.loadDefaultNotif();
  },
  methods: {
    loadDefaultNotif() {
      this.$store.dispatch('config/loadPublishNotification');
    },
    async save() {
      this.saving = true;
      try {
        await this.$axios.$post('/config/publish-notification', {
          text: this.publishNotification,
        });
      } catch (error) {
        this.$snack.show(error, 'danger');
      }
      this.saving = false;
    },
  },
};
</script>
