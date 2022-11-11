<template>
  <v-dialog
    v-model="value"
    width="500"
    @update:return-value="$refs.editForm.resetForm()"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-card-title class="headline" primary-title> Edit Editor </v-card-title>

      <v-card-text @keydown.enter="createEditor">
        <AddEditorForm ref="editForm" v-model="form" />
        <!-- <v-alert v-if="error" type="error">
          {{ error }}
        </v-alert> -->
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeCreateDialog"> cancel </v-btn>
        <v-btn
          color="primary"
          :loading="busy"
          :disabled="!form.valid"
          @click="updateEditor"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AddEditorForm from '~/components/forms/AddEditorForm';

export default {
  components: {
    AddEditorForm,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    busy: {
      type: Boolean,
      default: false,
    },
    editorId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      form: {
        valid: false,
        data: {
          given_name: null,
          family_name: null,
          email: null,
        },
      },
    };
  },
  computed: {
    editor() {
      return this.$store.state.editors.editors.find(
        ed => ed.id === this.editorId,
      );
    },
  },
  watch: {
    editor: {
      handler(newEd) {
        if (!newEd) return;
        const form = { data: {} };
        for (const key of Object.keys(this.form.data)) {
          form.data[key] = newEd.attributes[key];
        }
        this.$nextTick(() => {
          this.form.data = form.data;
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    closeCreateDialog() {
      this.$refs.editForm.resetForm();
      this.$emit('close');
    },

    updateEditor() {
      this.$refs.editForm.validate();
      if (!this.form.valid) return;

      this.$emit('submit', {
        ...this.form.data,
        editorId: this.editorId,
      });
    },
  },
};
</script>

<style></style>
