<template>
  <div class="mx-20 pb-20">
    <v-tabs v-model="tab" color="primary">
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>
    <component :is="chosenEntry" class="pt-5 pb-11" />
  </div>
</template>

<script>
import ResetPasswordTemplate from '~/components/organisms/ResetPasswordTemplate';
import InviteEmailTemplate from '~/components/organisms/InviteEmailTemplate';

export default {
  components: { ResetPasswordTemplate, InviteEmailTemplate },
  data() {
    return {
      tab: 0,
      items: ['Reset Password', 'Invite Email'],
    };
  },
  computed: {
    chosenEntry() {
      const trimmedTab = this.items[this.tab].replace(' ', '');
      return `${trimmedTab}Template`;
    },
  },
};
</script>
