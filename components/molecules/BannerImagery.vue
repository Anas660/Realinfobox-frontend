<template>
  <div>
    <h1 :style="{ margin: '20px 0 30px' }">Imagery configuration</h1>
    <v-row justify="space-between">
      <v-file-input
        v-model="localImagery.logoPhoto"
        outlined
        placeholder="Logo (Left side image)"
      />
      <v-file-input
        v-model="localImagery.backgroundPhoto"
        outlined
        placeholder="Background image"
      />

      <v-file-input
        v-model="localImagery.agentPhoto"
        label="Agent photo (right side image)"
        outlined
        placeholder="Agent photo (right side image)"
      />
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Object, required: true },
  },

  computed: {
    localImagery: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('setLocalImagery', this.localImagery);
      },
    },
  },
};
</script>
