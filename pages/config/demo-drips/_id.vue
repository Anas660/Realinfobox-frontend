<template>
  <div class="CreateCampaign container">
    <PageHeader
      action-button-text="Save"
      action-button-icon="mdi-content-save"
      :action-button-disabled="!form.valid"
      @action-button="saveDemoDrip"
    >
      <template #left>
        <div class="d-flex align-items-baseline">
          <div class="headline">Edit block set</div>
        </div>
      </template>
    </PageHeader>
    <v-fade-transition hide-on-leave>
      <v-skeleton-loader v-if="loading" type="article, actions, image" />
      <div v-else class="Sections">
        <section class="white elevation-1 container-fluid">
          <div class="row p-4">
            <DemoDripForm v-model="form" :prefill="form" />
          </div>
        </section>
        <section>
          <div class="BlocksControls d-flex justify-content-end">
            <v-btn color="secondary" @click="dialogs.addBlock.visible = true">
              <v-icon left> mdi-server-plus </v-icon>
              Add Block
            </v-btn>
          </div>
        </section>
        <EditorBlocks v-model="blocks" editable movable elevated removable />
      </div>
    </v-fade-transition>
    <AddBlockDialog v-model="dialogs.addBlock.visible" @submit="addBlock" />
  </div>
</template>

<script>
import DemoDripsMixins from '~/mixins/demoDrips';

export default {
  mixins: [DemoDripsMixins],
  data() {
    return {
      loading: true,
      demoDrip: {},
      saveMethod: 'put',
    };
  },
  computed: {
    demoDripId() {
      return this.$route.params.id;
    },
  },
  watch: {
    demoDrip: {
      handler() {
        this.blocks = this.demoDrip.blocks;
        this.form.data = this.demoDrip.attributes;
        this.form.valid = true;
      },
      deep: true,
    },
  },
  mounted() {
    this.loadDemoDrip();
  },
  methods: {
    async editTemplate() {
      await this.saveTemplate(
        {
          ...this.form.data,
        },
        this.blocks,
      );
    },
    async loadDemoDrip() {
      try {
        this.demoDrip = await this.$axios.$get(`/drips/${this.demoDripId}`);
      } catch (error) {
        if (error.code === 'NotFound') this.$snack.show('Not found', 'error');

        this.$router.push('/config');
      }
      this.loading = false;
    },
    async saveDemoDrip() {
      try {
        await this.$axios.$put(`/drips/${this.demoDripId}`, {
          ...this.form.data,
          blocks: this.blocks,
        });
        this.$snack.show('Saved successfully', 'success');
      } catch (error) {
        this.$snack.show('Saving error', 'error');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.CreateCampaign {
  .Sections {
    > section {
      margin-bottom: 24px;
    }
  }
}

.rearrange-blocks-move {
  transition: transform 500ms ease-out;
}
</style>
