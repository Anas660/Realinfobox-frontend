<template>
  <div class="fill-height container">
    <div class="row justify-content-center">
      <div class="d-flex flex-column col-6">
        <LinkLogo />
        <v-card v-if="!registrationSuccessful" class="LoginCard elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title> Create Your Demo account </v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="form.given_name"
                label="Given Name"
                name="given_name"
                prepend-icon="mdi-account"
                type="text"
                :rules="rules.given_name"
              />
              <v-text-field
                v-model="form.family_name"
                label="Family Name"
                name="family_name"
                prepend-icon="mdi-account"
                type="text"
                :rules="rules.family_name"
              />
              <v-text-field
                v-model="form.email"
                label="Email"
                name="email"
                prepend-icon="mdi-at"
                type="text"
                :rules="rules.email"
              />
              <CitiesSelect v-model="form.city_id" :load-cities="false" />
            </v-form>
            <v-alert v-if="error && !loading" type="error">
              {{ error }}
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary" @click="$router.push('/login')">
              Log In
            </v-btn>
            <v-spacer />
            <v-btn
              color="primary"
              :disabled="!valid"
              :loading="loading"
              @click="signUp"
            >
              Sign Up
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else class="LoginCard elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title> Demo Account Registered </v-toolbar-title>

            <v-spacer />
          </v-toolbar>
          <v-card-text>
            You have successfully registered for your demo account. Please bear
            with us while our team prepares your account. You will be notified
            by email once it is ready.
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import CitiesSelect from '~/components/forms/CitiesSelect';
import LinkLogo from '~/components/atoms/LinkLogo';

export default {
  auth: false,
  components: {
    CitiesSelect,
    LinkLogo,
  },
  mixins: [],
  layout: 'public',
  data() {
    return {
      form: {
        email: null,
        given_name: null,
        family_name: null,
      },
      error: false,
      errors: {
        email: null,
        given_name: null,
        family_name: null,
      },
      valid: false,
      rules: {
        family_name: [v => !!v || 'Required'],
        given_name: [v => !!v || 'Required'],
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      },
      resetPassword: false,
      loading: false,
      registrationSuccessful: false,
    };
  },
  async fetch() {
    await this.$store.dispatch('config/loadCities', { isPublic: true });
  },
  computed: {},

  methods: {
    async signUp() {
      this.loading = true;
      try {
        await this.$axios.$post('/auth/register/demo', this.form);
        this.error = null;
        this.errors = null;
        this.registrationSuccessful = true;
      } catch (error) {
        this.error = error.message;
        this.errors = error.invalid_fields;
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.LoginCard {
}
</style>
