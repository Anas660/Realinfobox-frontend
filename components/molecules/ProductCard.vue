<template>
  <v-card width="350">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle class="pb-0">{{ type }}</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>{{ description || 'No description available' }}</div>
      <div>$ {{ price || 'unknown' }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn :color="isSubscribed ? 'red' : 'green'" text>{{
        isSubscribed ? 'Unsubscribe' : 'Subscribe'
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    isSubscribed: { type: Boolean, default: false },
    type: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
  },
};
</script>
