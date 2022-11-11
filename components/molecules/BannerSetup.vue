<template>
  <div class="BannerSetup">
    <v-switch
      v-model="setup.isCustomActive"
      :label="`${label} Banner`"
      class="Switch"
    />
    <div class="Input">
      <v-text-field
        v-model="setup.bannerHeight"
        dense
        label="Banner Height"
        outlined
        type="number"
        max="300"
        min="150"
      />

      <p :style="{ marginTop: '-15px', textAlign: 'center' }">
        Max height is 300px, width is always 1000 pixels, border is 2 pixels
        thick.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Object, required: true },
  },

  computed: {
    label() {
      return this.setup.isCustomActive ? 'Custom' : 'Simple';
    },

    setup: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style scoped>
.Switch {
  margin: 0;
}

.BannerSetup {
  display: flex;
  align-items: center;
}

.Input {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  width: 300px;
}
</style>
