<template>
  <v-dialog v-model="value" width="500" @click:outside="$emit('close')">
    <v-card>
      <v-card-title class="headline" primary-title>
        Email Verification
      </v-card-title>

      <v-card-text>
        <p>
          You will receive an email from Amazon Web Services with subject:
          <br />

          <strong
            >Amazon Web Services – Email Address Verification Request in region
            US East (N. Virginia)</strong
          ><br />

          Please click the link provided in that email for verification, not
          doing so will not allow you to send out the email newsletters.<br />
          After verification, refresh this page (or log out and back in) to hide
          the warning.
        </p>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="$emit('close')"> close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
