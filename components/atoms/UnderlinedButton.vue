<template>
  <p class="cursor-pointer text-tapa underline" @click="$emit('click')">
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
  },
};
</script>
