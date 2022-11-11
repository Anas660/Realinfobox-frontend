<template>
  <div class="mx-20">
    <PrimaryButton text="Save" @click="saveSocialHandles" />
    <SocialMediaHandles v-model="socialHandles" />
  </div>
</template>

<script>
import SocialMediaHandles from '~/components/molecules/SocialMediaHandles';
import PrimaryButton from '~/components/atoms/PrimaryButton.vue';
export default {
  components: { SocialMediaHandles, PrimaryButton },

  data() {
    return {
      socialHandles: {},
      saving: false,
    };
  },

  computed: {
    userSocialHandles() {
      return this.$auth.user.social_handles;
    },
  },

  mounted() {
    this.fillSocialHandles();
  },

  methods: {
    fillSocialHandles() {
      this.$nextTick(() => {
        if (this.userSocialHandles) this.socialHandles = this.userSocialHandles;
      });
    },

    async saveSocialHandles() {
      try {
        const toSend = {};
        Object.keys(this.socialHandles).forEach(key => {
          const value = this.socialHandles[key];
          if (value) toSend[key] = value;
        });
        await this.$axios.$post('/account/social', toSend);
        this.$snack.show('Saved.', 'success');
      } catch (error) {
        this.$snack.show('Failed to save the social handles', 'danger');
      }
    },
  },
};
</script>
