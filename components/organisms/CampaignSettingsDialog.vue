<template>
  <v-dialog v-model="dialogVisible" width="600">
    <v-card>
      <v-card-title class="headline mb-3" primary-title>
        Campaign settings
      </v-card-title>

      <v-card-text class="d-flex justify-content-center">
        <!-- <div v-if="loading" class="Preview Skeleton p-4 elevation-2">
          <v-skeleton-loader :type="skeletonLoaders" />
        </div> -->
        <div class="w-100">
          <CampaignSettingsForm v-model="form" />
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="error" text @click="closeDialog(true)"> cancel </v-btn>
        <v-btn color="primary" :loading="saving" @click="saveSettings">
          save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CampaignSettingsForm from '~/components/forms/CampaignSettingsForm';

export default {
  components: {
    CampaignSettingsForm,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      saving: false,
      form: {
        custom_color: '',
        automated_campaign_delivery: true,
        business_address: '',
      },
      initialForm: undefined,
    };
  },
  computed: {
    dialogVisible: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal);
      },
    },
    canSave() {
      return true;
    },
    skeletonLoaders() {
      return Array(5).fill('list-item-three-line').join();
    },
    settings() {
      return this.$auth.user.settings;
    },
  },

  created() {
    // this.loadSettings();
  },
  mounted() {
    this.setForm();
  },

  methods: {
    // async loadSettings() {
    //   this.loading = true;
    //   try {
    //     this.settings = await this.$axios.$get('/settings');
    //     this.defaultBlocks = this.settings.default_blocks;
    //   } catch (error) {
    //   }
    //   this.loading = false;
    // },
    setForm() {
      this.$nextTick(() => {
        this.form = { ...this.settings };
      });
    },
    async saveSettings() {
      try {
        await this.$axios.$patch('/account/settings', this.form);
        this.closeDialog();
        this.$snack.show('Saved successfully', 'success');
      } catch (error) {
        this.$snack.show('Saving error', 'error');
      }
    },
    closeDialog(reset = false) {
      this.dialogVisible = false;
      if (reset) {
        this.setForm();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Preview {
  width: 600px;

  &.Skeleton > * {
    margin-bottom: 16px;
  }
}
</style>
