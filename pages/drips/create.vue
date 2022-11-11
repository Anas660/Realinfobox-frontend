<template>
  <div class="CreateCampaign container">
    <PageHeader
      title="Create Drip"
      action-button-text="Save"
      action-button-icon="mdi-content-save"
      :action-button-disabled="!canSave"
      @action-button="createDrip"
    />
    <section class="white elevation-1 container-fluid">
      <DripForm v-model="form" />
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
import DripsMixin from '~/mixins/drips';
export default {
  mixins: [DripsMixin],
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
    async createDrip() {
      const { id } = await this.saveDrip(
        {
          ...this.form.data,
        },
        this.blocks,
      );
      this.$router.push(`/drips/${id}`);
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
