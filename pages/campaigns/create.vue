<template>
  <div class="CreateCampaign container">
    <PageHeader
      title="Create campaign"
      action-button-text="Save"
      action-button-icon="mdi-content-save"
      :action-button-disabled="!canSave"
      @action-button="createCampaign"
    />
    <section class="white elevation-1 container-fluid">
      <div class="row">
        <CreateContentForm v-model="form" class="col-6" />
      </div>
    </section>
    <section>
      Template
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <v-select
            v-model="selectedBlockSet"
            :items="templatesSelectItems"
            label="Select a template..."
            solo
            hide-details
            @change="templateChange"
          />
          <v-btn class="ml-2" icon @click="templateChange">
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
export default {
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
    createCampaign() {
      this.saveCampaign(
        {
          ...this.form.data,
          template_id: this.selectedBlockSet.id,
        },
        this.blocks,
      );
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
