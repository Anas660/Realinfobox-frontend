<template>
  <h1 class="text-3xl font-bold">{{ text }}</h1>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
  },
};
</script>
