<template>
  <div>
    <v-card class="LoginCard elevation-12">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title v-if="!resetPassword"> Please Log In </v-toolbar-title>
        <v-toolbar-title v-else> Reset password </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            v-model="form.username"
            label="Email"
            name="email"
            prepend-icon="mdi-account"
            type="text"
            :rules="rules.username"
          />

          <v-text-field
            v-if="!resetPassword"
            id="password"
            v-model="form.password"
            label="Password"
            name="password"
            :rules="rules.password"
            prepend-icon="mdi-lock"
            type="password"
          />
        </v-form>
        <v-alert v-if="error && !loading" type="error">
          {{ error }}
        </v-alert>
      </v-card-text>
      <v-card-actions v-if="!resetPassword">
        <v-btn text color="primary" @click="resetPassword = true">
          reset password
        </v-btn>
        <v-spacer />
        <v-btn
          color="primary"
          :disabled="!valid"
          :loading="loading"
          @click="login"
        >
          Login
        </v-btn>
      </v-card-actions>
      <v-card-actions v-else>
        <v-btn text color="primary" @click="resetPassword = false">
          log in
        </v-btn>
        <v-spacer />
        <v-btn
          color="primary"
          :disabled="!valid"
          :loading="loading"
          @click="reset"
        >
          reset
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      error: false,
      errors: {
        username: '',
        password: '',
      },
      valid: false,
      rules: {
        password: [v => !!v || 'Password is required'],
        username: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      },
      isLoading: false,
    };
  },
};
</script>
