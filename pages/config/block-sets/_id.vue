<template>
  <div class="CreateCampaign container">
    <PageHeader
      action-button-text="Save"
      action-button-icon="mdi-content-save"
      :action-button-disabled="!form.valid"
      @action-button="saveBlockSet"
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
            <BlockSetForm v-model="form" :prefill="form" />
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
import BlockSetsMixins from '~/mixins/blockSets';

export default {
  mixins: [BlockSetsMixins],
  data() {
    return {
      loading: true,
      blockSet: {},
      saveMethod: 'put',
    };
  },
  computed: {
    blockSetId() {
      return this.$route.params.id;
    },
  },
  watch: {
    blockSet: {
      handler() {
        this.blocks = this.blockSet.blocks;
        this.form.data = this.blockSet.attributes;
      },
      deep: true,
    },
  },
  mounted() {
    this.loadBlockSet();
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
    async loadBlockSet() {
      try {
        this.blockSet = await this.$axios.$get(
          `/config/block-sets/${this.blockSetId}`,
        );
      } catch (error) {
        if (error.code === 'NotFound') this.$snack.show('Not found', 'error');

        this.$router.push('/config');
      }
      this.loading = false;
    },
    async saveBlockSet() {
      try {
        await this.$axios.$put(`/config/block-sets/${this.blockSetId}`, {
          ...this.form.data,
          blocks: this.blocks,
        });
        this.$snack.show('Saved successfully', 'success');
        // this.$router.push('/config');
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
