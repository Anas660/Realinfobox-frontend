<template>
  <v-dialog
    v-model="visible"
    width="500"
    @update:return-value="$refs.form.resetForm()"
  >
    <v-card>
      <v-card-title class="headline" primary-title> Add Block </v-card-title>

      <v-card-text>
        <AddBlockForm ref="form" v-model="form" @submit="submit" />
        <div v-if="error" class="error--text">
          {{ error }}
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeDialog"> cancel </v-btn>
        <v-btn color="primary" :disabled="!form.valid" @click="submit">
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AddBlockForm from '~/components/forms/AddBlockForm';

export default {
  components: {
    AddBlockForm,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      form: {
        valid: false,
        data: {
          block_type: 'editor',
        },
      },
    };
  },
  computed: {
    visible: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },

  methods: {
    closeDialog() {
      this.$refs.form.resetForm();
      this.visible = false;
    },

    submit() {
      this.$refs.form.validate();

      if (!this.form.valid) {
        return;
      }

      this.$emit('submit', this.form.data);
    },
  },
};
</script>
