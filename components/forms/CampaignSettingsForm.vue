<template>
  <v-form
    id="settingsForm"
    ref="form"
    v-model="form.valid"
    lazy-validation
    @submit.prevent="submit"
  >
    <div>
      <div class="row">
        <div class="col-4 font-weight-bold">
          Automated campaign delivery
          <div class="caption">
            Determines whether we should be sending emails to your mailing list
            on schedule
          </div>
        </div>
        <div class="col-8">
          <v-switch
            v-model="form.automated_campaign_delivery"
            color="primary"
            :label="`${form.automated_campaign_delivery ? 'on' : 'off'}`"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-4 font-weight-bold">
          Custom color
          <div class="caption">
            Will affect coloring of your emails (links, ...)
          </div>
        </div>
        <div class="col-8">
          <ColorPicker v-model="form.custom_color" />
        </div>
      </div>
      <div class="row">
        <div class="col-4 font-weight-bold">
          Campaign notification emails
          <div class="caption">
            We will send notifications about new campaigns to these emails
          </div>
        </div>
        <div class="col-8">
          <div class="d-flex align-items-center">
            <v-text-field
              ref="newNotificationEmail"
              v-model="newNotificationEmail"
              :rules="rules.email"
              :hide-details="!newNotificationEmail"
              placeholder="New notification email..."
              @update:error="newNotificationEmailErrorFcn"
            />
            <v-btn
              icon
              color="success"
              :disabled="newNotificationEmailError"
              @click="addEmail"
            >
              <v-icon> mdi-plus </v-icon>
            </v-btn>
          </div>
          <div class="d-flex align-items-center my-2">
            <div class="mr-2">
              {{ $auth.user.attributes.email }}
            </div>
            <v-tooltip bottom>
              <template #activator="{ on }">
                <div v-on="on">
                  <v-icon> mdi-information </v-icon>
                </div>
              </template>
              <span
                >This is your account email, you will always be notified</span
              >
            </v-tooltip>
          </div>
          <transition-group name="list">
            <div
              v-for="(email, index) in validNotifEmails"
              :key="email + index"
              class="d-flex align-items-center my-2"
            >
              <div class="mr-2">
                {{ email }}
              </div>
              <v-btn icon color="error" @click="removeEmail(email)">
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </v-form>
</template>

<script>
import ColorPicker from '~/components/atoms/ColorPicker';

export default {
  components: {
    ColorPicker,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newNotificationEmail: '',
      newNotificationEmailError: false,
      rules: {
        email: [v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      },
    };
  },
  computed: {
    form: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
    validNotifEmails() {
      if (!this.form || !this.form.notification_emails) return [];
      return this.form.notification_emails.filter(e => !!e);
    },
  },
  methods: {
    submit() {
      if (this.form.valid) this.$emit('submit', this.form);
    },
    resetForm() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
    validate() {
      this.$refs.form.validate();
    },
    addEmail() {
      const index = this.form.notification_emails.findIndex(
        e => this.newNotificationEmail === e,
      );
      if (!~index)
        this.form.notification_emails.push(this.newNotificationEmail);
      this.newNotificationEmail = '';
    },
    removeEmail(email) {
      const index = this.form.notification_emails.findIndex(e => email === e);
      if (~index) this.form.notification_emails.splice(index, 1);
    },
    newNotificationEmailErrorFcn(hasError) {
      this.newNotificationEmailError = hasError;
    },
  },
};
</script>

<style></style>
