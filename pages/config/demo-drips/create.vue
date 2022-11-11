<template>
  <div class="CreateCampaign container">
    <PageHeader
      title="Create Drip"
      action-button-text="Save"
      action-button-icon="mdi-content-save"
      :action-button-disabled="!canSave"
      @action-button="saveDemoDrip"
    />
    <section class="white elevation-1 container-fluid">
      <div class="row p-4">
        <DemoDripForm v-model="form" />
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

    <AddBlockDialog v-model="dialogs.addBlock.visible" @submit="addBlock" />
  </div>
</template>

<script>
import DemoDripsMixin from '~/mixins/demoDrips';

export default {
  mixins: [DemoDripsMixin],
  middleware: ['isElevated'],
  data() {
    return {
      saveMethod: 'post',
      form: {
        data: {
          name: '',
        },
        valid: false,
      },
      dialogs: {
        addBlock: {
          visible: false,
        },
      },
    };
  },
  computed: {
    canSave() {
      return this.form.valid && this.blocks.length;
    },
  },
  methods: {
    async saveDemoDrip() {
      try {
        await this.$axios.$post('/drips', {
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
.CreateCampaign {
  > section {
    margin-bottom: 24px;
  }
}
</style>
