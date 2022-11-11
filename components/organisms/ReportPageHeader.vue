<template>
  <div class="Header my-5">
    <div class="Title row my-5">
      <BackButton v-if="!noBack" class="mr-5" />
      <h1>{{ name }} {{ title }} - {{ month | month }} {{ year }}</h1>
    </div>
    <v-divider />
  </div>
</template>

<script>
import BackButton from '~/components/atoms/BackButton';
export default {
  components: {
    BackButton,
  },

  props: {
    name: { type: String, required: true },
    month: { type: [String, Number], required: true },
    title: { type: String, required: true },
    year: { type: [String, Number], required: true },
    noBack: { type: Boolean, default: false },
  },
};
</script>
