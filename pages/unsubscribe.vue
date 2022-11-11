<template>
  <div class="fill-height container">
    <div class="row justify-content-center">
      <div class="col-6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Unsubscribe</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <div v-if="loading" class="flex-center">
              <v-progress-circular
                :size="70"
                :width="7"
                color="primary"
                indeterminate
              />
            </div>
            <div v-else class="p-4">
              <template v-if="error"> Unsubscription failed </template>
              <template v-else> Unsubscribed successfully </template>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'public',
  data() {
    return {
      loading: true,
      error: null,
    };
  },
  computed: {
    userId() {
      return this.$route.query.uid;
    },
    campaignId() {
      return this.$route.query.cid;
    },
    email() {
      return this.$route.query.email;
    },
  },
  created() {
    this.unsub();
  },
  methods: {
    async unsub() {
      this.error = false;
      try {
        // if (!(this.userId && this.campaignId && this.email)){
        //   this.$snack.show('Invalid parameters', 'error');
        //   return;
        // }

        await this.$axios.$post('public/unsubscribe', {
          user_id: this.userId,
          campaign_id: this.campaignId,
          email: this.email,
        });
      } catch (error) {
        this.$snack.show('Failed to unsubscribe', 'error');
        this.error = true;
      }
      this.loading = false;
    },
  },
};
</script>
