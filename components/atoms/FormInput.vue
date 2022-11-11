<template>
  <input
    :class="`
      ${error ? 'border-cinnabar' : 'border-tango'}
      min-h-14
      rounded-lg
      mb-6
      h-14
      w-full
      shrink-0
      border-0
      border-b
      border-solid
      bg-alabaster
      px-4
      `"
    :disabled="disabled"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    @input="emitValue($event.target.value)"
  />
</template>

<script>
export default {
  props: {
    error: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    name: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: { type: String, required: true },
  },

  methods: {
    emitValue(val) {
      this.$emit('input', val);
    },
  },
};
</script>
