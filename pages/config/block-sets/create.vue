<template>
  <div class="CreateBlockSet container">
    <PageHeader
      title="Create block set"
      action-button-text="Save"
      action-button-icon="mdi-content-save"
      :action-button-disabled="!form.valid"
      @action-button="saveBlockSet"
    />
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
    <EditorBlocks v-model="blocks" editable movable removable />

    <AddBlockDialog
      v-model="dialogs.addBlock.visible"
      :error="dialogs.addBlock.error"
      @submit="addBlock"
    />
  </div>
</template>

<script>
import BlockSetsMixins from '~/mixins/blockSets';

export default {
  mixins: [BlockSetsMixins],
  data() {
    return {
      saveMethod: 'post',
    };
  },

  methods: {
    async saveBlockSet() {
      try {
        await this.$axios.$post('/config/block-sets', {
          ...this.form.data,
          blocks: this.blocks,
        });
        this.$snack.show('Saved successfully', 'success');
        this.$router.push('/config');
      } catch (error) {
        this.$snack.show('Saving error', 'error');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.CreateBlockSet {
  > section {
    margin-bottom: 24px;
  }
}
</style>
