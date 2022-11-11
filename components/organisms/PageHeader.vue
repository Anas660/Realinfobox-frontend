<template>
  <div class="d-flex justify-content-between align-items-center my-4">
    <div>
      <slot name="left">
        <span class="headline">
          {{ title }}
        </span>
      </slot>
    </div>
    <div>
      <slot name="right">
        <v-btn
          v-if="actionButtonVisible"
          color="primary"
          :disabled="actionButtonDisabled"
          @click="$emit('action-button')"
        >
          <v-icon left>
            {{ actionButtonIcon }}
          </v-icon>
          {{ actionButtonText }}
        </v-btn>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    actionButtonText: {
      type: String,
      default: '',
    },
    actionButtonIcon: {
      type: String,
      default: '',
    },
    actionButtonDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    actionButtonVisible() {
      return this.actionButtonText || this.actionButtonIcon;
    },
  },
};
</script>

<style></style>
