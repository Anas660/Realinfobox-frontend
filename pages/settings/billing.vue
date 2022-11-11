<template>
  <div class="mx-10 pb-20">
    <v-tabs v-model="tab" color="primary">
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>
    <component :is="chosenEntry" class="pt-5 pb-11" />
  </div>
</template>

<script>
import Invoices from '~/components/organisms/Invoices';
import BillingAddress from '~/components/organisms/BillingAddress';
import OneTimePayment from '~/components/organisms/OneTimePayment';
import Subscription from '~/components/organisms/Subscription';
import TempSubscription from '~/components/organisms/TempSubscription';

export default {
  components: { BillingAddress, Invoices, OneTimePayment, Subscription, TempSubscription },
  data() {
    return {
      tab: 0,
      items: ['Billing Address', 'Invoices', 'OneTime Payment', 'Subscription', 'Temp Subscription'],
    };
  },
  computed: {
    chosenEntry() {
      const tab = this.items[this.tab].replace(' ', '');

      return tab;
    },
  },
};
</script>
