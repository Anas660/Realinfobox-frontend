<template>
  <div class="mx-20">
    <PageHeader
      action-button-text="Add Editor"
      action-button-icon="mdi-account-plus"
      @action-button="dialogs.addEditor.visible = true"
    />
    <div class="container-fluid elevation-1 white">
      <div class="row">
        <v-data-table
          :headers="tableHeaders"
          :items="tableData"
          :items-per-page="25"
          class="EditorsTable"
        >
          <template v-if="loading" #body>
            <SkeletonTableRows :table-headers="tableHeaders" />
          </template>
          <template #header.action>
            <div class="w-100 text-right">Actions</div>
          </template>
          <template #item.action="{ item }">
            <div class="d-flex justify-content-end">
              <v-btn icon class="mr-2" @click="editItem(item)">
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </div>
    </div>
    <AddEditorDialog
      v-model="dialogs.addEditor.visible"
      :error="dialogs.addEditor.error"
      :busy="dialogBusy"
      @submit="createEditor"
      @close="dialogs.addEditor.visible = false"
    />
    <EditEditorDialog
      v-model="dialogs.editEditor.visible"
      :editor-id="dialogs.editEditor.editorId"
      :error="dialogs.editEditor.error"
      :busy="dialogBusy"
      @submit="updateEditor"
      @close="dialogs.editEditor.visible = false"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AddEditorDialog from '~/components/organisms/AddEditorDialog';
import EditEditorDialog from '~/components/organisms/EditEditorDialog';
import PageHeader from '~/components/organisms/PageHeader';
import ListsMixin from '~/mixins/lists';

export default {
  components: {
    AddEditorDialog,
    EditEditorDialog,
    PageHeader,
  },
  mixins: [ListsMixin],
  data() {
    return {
      tableHeaders: [
        { text: 'Name', value: 'full_name' },
        { text: 'Email', value: 'email' },
        { text: 'Actions', value: 'action', sortable: false, align: 'right' },
      ],
      dialogs: {
        addEditor: {
          visible: false,
          errors: null,
        },
        editEditor: {
          editorId: null,
          visible: false,
          error: null,
        },
      },
      dialogBusy: false,
      form: {
        valid: false,
        rules: {
          given_name: [v => !!v || 'Name is required'],
          family_name: [v => !!v || 'Family name is required'],
          email: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
        },
        data: {
          given_name: null,
          family_name: null,
          email: null,
        },
      },
    };
  },
  computed: {
    ...mapState({
      editors: state => state.editors.editors,
    }),
    tableData() {
      if (!this.editors) return null;
      return this.editors.map(editor => {
        const tableRow = {
          id: editor.attributes.sub,
          email: editor.attributes.email,
          full_name:
            editor.attributes.given_name + ' ' + editor.attributes.family_name,
        };

        return tableRow;
      });
    },
  },
  created() {
    this.loadEditors();
  },
  methods: {
    loadEditors() {
      this.$store.dispatch('editors/getEditors');
    },
    async createEditor(data) {
      try {
        this.dialogBusy = true;
        await this.$axios.$post('/editors', data);
        await this.loadEditors();
        this.dialogs.addEditor.visible = false;
        this.$snack.success('Editor added successfully!');
      } catch (error) {
        this.$snack.show('Failed to create an editor', 'danger');
      }
      this.dialogBusy = false;
    },

    async updateEditor(data) {
      try {
        this.dialogBusy = true;
        await this.$axios.$patch(`/editors/${data.editorId}`, data);
        await this.loadEditors();
        this.dialogs.editEditor.visible = false;
        this.$snack.show('Saved successfully', 'success');
      } catch (error) {
        this.$snack.show('Saving error', 'error');
      }
      this.dialogBusy = false;
    },
    editItem(item) {
      this.dialogs.editEditor.editorId = item.id;
      this.dialogs.editEditor.visible = true;
    },
  },
};
</script>

<style lang="scss">
.EditorsTable {
  width: 100%;
}
</style>
