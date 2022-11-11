<template>
  <div class="mx-20">
    <div class="UserTemplate container">
      <PageHeader>
        <template #left>
          <div class="d-flex align-items-baseline">
            <div class="headline">Edit template</div>
          </div>
        </template>
        <template #right>
          <div class="d-flex">
            <v-btn
              class="mr-2"
              color="secondary"
              @click="dialogs.addBlock.visible = true"
            >
              <v-icon left> mdi-server-plus </v-icon>
              Add Block
            </v-btn>
            <v-btn
              color="primary"
              :disabled="!canSave"
              :loading="loading || saving"
              @click="saveTemplate"
            >
              <v-icon left> mdi-content-save </v-icon>
              Save
            </v-btn>
          </div>
        </template>
      </PageHeader>
      <v-fade-transition hide-on-leave>
        <v-skeleton-loader v-if="loading" type="article, actions, image" />
        <div v-else class="Sections">
          <section>
            <div
              class="BlocksControls row justify-content-between align-items-end"
            >
              <div class="col-8">
                <DefaultBlocksPicker
                  v-model="selectedDefaultBlocks"
                  :items="defaultBlocks"
                />
              </div>
              <div class="col-4">
                <v-select
                  v-model="selectedTags"
                  :items="tags"
                  item-text="name"
                  item-value="id"
                  label="Default mailing list tag"
                  hide-details
                  return-object
                  multiple
                >
                  <template #selection="{ item }">
                    <v-chip :key="item.id" :color="item.color" dark>
                      {{ item.name }}
                    </v-chip>
                  </template>
                </v-select>
              </div>
            </div>
          </section>
          <EditorBlocks v-model="blocks" editable movable hideable removable />
        </div>
      </v-fade-transition>

      <AddBlockDialog v-model="dialogs.addBlock.visible" @submit="addBlock" />
    </div>
  </div>
</template>

<script>
import EditorBlocksMixin from '~/mixins/editorBlocks';
import DefaultBlocksPickerMixin from '~/mixins/defaultBlocksPicker';
import MailingListTagsMixin from '~/mixins/mailingListTags';

import PageHeader from '~/components/organisms/PageHeader';

export default {
  components: {
    PageHeader,
  },
  mixins: [EditorBlocksMixin, DefaultBlocksPickerMixin, MailingListTagsMixin],

  data() {
    return {
      loading: true,
      saving: false,
      saveMethod: 'post',
      template: () => {},
      defaultBlocksSource: 'template',
    };
  },
  computed: {
    canSave() {
      return true;
      // return this.form.valid && this.blocks.length && this.selectedBlockSet;
    },
  },
  watch: {
    template: {
      handler(newTemplate) {
        this.blocks = newTemplate.blocks;
        // this.blocks = newTemplate.blocks.map(bl =>
        //   ({ ...bl, default: bl.default || bl.block_id.startsWith('default:') }));
      },
    },
  },
  created() {
    this.loadTemplate();

    //merge the dialogs with the ones only in this page (eg. with addblock)
    this.dialogs = {
      ...this.dialogs,
    };
  },
  methods: {
    async loadTemplate() {
      this.loading = true;
      try {
        this.template = await this.$axios.$get('/template');
        this.defaultBlocks = this.template.default_blocks;
      } catch (error) {
        this.$snack.show('failed to load the template', 'danger');
      }
      this.loading = false;
    },
    async saveTemplate() {
      this.saving = true;
      const blocksToSave = this.blocks.filter(bl => !bl.hidden);
      try {
        await this.$axios.$put('/template', {
          blocks: blocksToSave,
          default_tag_ids: this.selectedTags.map(t => t.id),
        });
        this.$snack.show('Saved successfully', 'success');
        this.$store.dispatch('mailingList/getTags');
      } catch (error) {
        this.$snack.show('Saving error', 'error');
      }
      this.saving = false;
    },
    resetTemplate() {
      this.blocks = this.template.blocks;
    },
  },
};
</script>

<style lang="scss" scoped>
.UserTemplate .Sections {
  > section {
    margin-bottom: 24px;
  }
}
</style>
