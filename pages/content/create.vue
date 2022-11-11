<template>
  <div class="CreateCampaign container">
    <PageHeader
      title="Create content"
      action-button-text="Save"
      action-button-icon="mdi-content-save"
      :action-button-disabled="!canSave"
      @action-button="createContent"
    />
    <section class="white elevation-1 container-fluid">
      <CreateContentForm v-model="form" />
    </section>
    <section>
      Block set
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <v-select
            v-model="selectedBlockSet"
            :items="blockSetsSelectItems"
            label="Select a Block set"
            solo
            hide-details
            @change="blockSetChange"
          />
          <v-btn class="ml-2" icon @click="blockSetChange">
            <v-icon> mdi-refresh </v-icon>
          </v-btn>
        </div>
      </div>
    </section>
    <template v-if="selectedBlockSet">
      <EditorBlocks v-model="blocks" editable />
    </template>

    <AddBlockDialog v-model="dialogs.addBlock.visible" @submit="addBlock" />
  </div>
</template>

<script>
import ContentMixin from '~/mixins/content';
export default {
  mixins: [ContentMixin],

  data() {
    return {
      saveMethod: 'post',
    };
  },
  computed: {
    canSave() {
      return this.form.valid && this.blocks.length && this.selectedBlockSet;
    },
  },
  methods: {
    async createContent() {
      const { id } = await this.saveContent(
        {
          ...this.form.data,
          block_set_id: this.selectedBlockSet.id,
        },
        this.blocks,
      );
      this.$router.push(`/content/${id}`);
    },
    resetTemplate() {
      this.blocks = this.campaign.blocks;
    },
  },
};
</script>

<style lang="scss" scoped>
.CreateCampaign {
  > section {
    margin-bottom: 24px;
  }
}
</style>
