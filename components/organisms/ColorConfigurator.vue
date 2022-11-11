<template>
  <div class="Container">
    <div class="Header">
      <v-btn
        class="Button ml-auto"
        color="primary"
        @click="$emit('on-default-colors-click')"
      >
        Use default colors
      </v-btn>
    </div>
    <div class="row children-margin justify-content-around my-5">
      <div class="PickerWrapper">
        <h3>Branding Color</h3>
        <v-color-picker
          v-model="colorConfig.color1"
          class="Picker"
          hide-mode-switch
          mode="hexa"
          dot-size="25"
        />
      </div>
      <div class="PickerWrapper">
        <h3>Dark Color</h3>
        <v-color-picker
          v-model="colorConfig.color2"
          class="Picker"
          hide-mode-switch
          mode="hexa"
          dot-size="25"
        />
      </div>
      <div class="PickerWrapper">
        <h3>Light Color</h3>
        <v-color-picker
          v-model="colorConfig.color3"
          class="Picker"
          hide-mode-switch
          mode="hexa"
          dot-size="25"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Object, required: true },
  },

  computed: {
    colorConfig: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('setColor', this.colorConfig);
      },
    },
  },
};
</script>

<style scoped>
.Container {
  display: flex;
  flex-direction: column;
}

.Header {
  display: flex;
}

.PickerWrapper {
  display: flex;
  flex-direction: column;
}

.PickerWrapper h3 {
  text-align: center;
  margin-bottom: 15px;
}

.Picker {
  width: 200px;
}
</style>
