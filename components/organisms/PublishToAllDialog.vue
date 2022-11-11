<template>
  <v-dialog v-model="visible" width="500" @click:outside="closeDialog">
    <v-card>
      <v-card-title class="headline" primary-title>
        Publish to all users
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="confirm"
          name="confirm"
          label="Confirm"
          hint="Type 'confirm' to confirm this action"
          persistent-hint
          required
          autofocus
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeDialog"> cancel </v-btn>
        <v-btn
          color="success"
          :loading="busy"
          :disabled="confirm !== 'confirm'"
          @click="$emit('submit')"
        >
          Publish
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {},
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
      confirm: '',
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
      this.visible = false;
    },
  },
};
</script>

<style></style>
