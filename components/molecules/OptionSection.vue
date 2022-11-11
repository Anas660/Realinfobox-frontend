<template>
  <section class="border-0 border-b border-solid border-swissCoffee px-4 py-3">
    <p class="m-0 text-sm font-semibold text-creole">{{ label }}</p>
    <p class="m-0 text-sm text-tapa">{{ value }}</p>
  </section>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
  },
};
</script>
