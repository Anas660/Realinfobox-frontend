<template>
  <v-dialog
    v-model="visible"
    width="500"
    @update:return-value="$refs.editForm.resetForm()"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-card-title class="headline" primary-title>
        Edit Benchmark price</v-card-title
      >

      <v-card-text @keydown.enter="updateDataEntry">
        <CalgaryDataEntryForm ref="editForm" :form-values="form" />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeCreateDialog"> cancel </v-btn>
        <v-btn
          color="primary"
          :loading="busy"
          :disabled="!form.valid"
          @click="updateDataEntry"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CalgaryDataEntryForm from '~/components/forms/CalgaryDataEntryForm';

export default {
  components: {
    CalgaryDataEntryForm,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    busy: {
      type: Boolean,
      default: false,
    },
    entry: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      data: null,
      form: {
        valid: false,
        data: {},
      },
    };
  },
  watch: {
    entry: {
      handler(editedValue) {
        const value = JSON.parse(JSON.stringify(editedValue));
        this.data = value;

        this.$nextTick(() => {
          this.form.data = value;
        });
      },
    },
  },
  methods: {
    closeCreateDialog() {
      this.$refs.editForm.resetForm();
      this.$emit('close');
    },

    updateDataEntry() {
      this.$refs.editForm.validate();
      if (!this.form.valid) return;

      this.$emit('submit', {
        ...this.form.data,
        benchmarkPrice: parseInt(this.form.data.benchmarkPrice),
      });
    },
  },
};
</script>

<style></style>
