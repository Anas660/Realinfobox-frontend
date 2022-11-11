<template>
  <div class="mx-20 pb-20">
    <v-tabs v-model="tab" color="primary">
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>
    <component :is="chosenEntry" class="pt-5 pb-11" />
  </div>
</template>

<script>
import DemoRegisterTemplate from '~/components/organisms/DemoRegisterTemplate';
import DemoInviteTemplate from '~/components/organisms/DemoInviteTemplate';
import DemoDripTemplate from '~/components/organisms/DemoDripTemplate';

export default {
  components: {
    DemoRegisterTemplate,
    DemoInviteTemplate,
    DemoDripTemplate,
  },
  data() {
    return {
      tab: 0,
      items: ['Register', 'Invite', 'Drip'],
    };
  },
  computed: {
    chosenEntry() {
      const trimmedTab = this.items[this.tab].replace(' ', '');
      return `Demo${trimmedTab}Template`;
    },
  },
};
</script>
