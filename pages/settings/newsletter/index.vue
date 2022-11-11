<template>
  <div class="mx-20 mb-10">
    <div class="mb-10">
      <v-tabs v-model="tab" color="primary">
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>
    </div>
    <component :is="chosenEntry" />
  </div>
</template>

<script>
import BlockSets from '~/components/organisms/BlockSets';
import Foreword from '~/components/organisms/Foreword';
export default {
  components: { BlockSets, Foreword },
  data() {
    return {
      tab: 0,
      items: ['Block Sets', 'Foreword'],
    };
  },
  computed: {
    chosenEntry() {
      return this.items[this.tab].replace(' ', '');
    },
  },
};
</script>
