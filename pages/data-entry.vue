<template>
  <div class="mx-16 pb-10">
    <v-tabs v-model="tab" color="primary">
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>
    <component :is="chosenEntry" class="pt-5 pb-11" />
  </div>
</template>

<script>
import CalgaryEntry from '~/components/molecules/CalgaryEntry';
import EdmontonEntry from '~/components/molecules/EdmontonEntry';
import FraserValleyEntry from '~/components/molecules/FraserValleyEntry';
import VancouverEntry from '~/components/molecules/VancouverEntry';
import VictoriaEntry from '~/components/molecules/VictoriaEntry';
import WinnipegEntry from '~/components/molecules/WinnipegEntry';

export default {
  components: {
    CalgaryEntry,
    EdmontonEntry,
    FraserValleyEntry,
    VancouverEntry,
    VictoriaEntry,
    WinnipegEntry,
  },
  data() {
    return {
      tab: 0,
      items: [
        'Calgary',
        'Edmonton',
        'Fraser Valley',
        'Vancouver',
        'Victoria',
        'Winnipeg',
      ],
    };
  },
  computed: {
    chosenEntry() {
      const trimmedTab = this.items[this.tab].replace(' ', '');
      return `${trimmedTab}Entry`;
    },
  },
};
</script>
