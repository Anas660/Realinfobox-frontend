<template>
  <v-dialog
    v-model="value"
    width="500"
    @update:return-value="$refs.addForm.resetForm()"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-card-title class="headline" primary-title> Add Client </v-card-title>

      <v-card-text @keydown.enter="createUser">
        <AddUserForm ref="addForm" v-model="form" />
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
          @click="createUser"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AddUserForm from '~/components/forms/AddUserForm';

export default {
  components: {
    AddUserForm,
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
  methods: {
    closeCreateDialog() {
      this.$refs.addForm.resetForm();
      this.$emit('close');
    },

    createUser() {
      this.$refs.addForm.validate();

      if (!this.form.valid) {
        return;
      }

      this.$emit('submit', this.form.data);
    },
  },
};
</script>
