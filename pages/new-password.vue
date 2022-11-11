<template>
  <div class="fill-height container">
    <div class="row justify-content-center">
      <div class="col-6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Create a new password</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <!-- <template v-if="challengeParameters"> -->
            <v-alert type="info">
              Please create a new password for your account.
            </v-alert>
            <!-- </template> -->
            <v-form v-model="valid">
              <v-text-field
                id="password"
                v-model="form.new_password"
                :rules="rules.new_password"
                :error-messages="errors.new_password"
                label="New Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                hint="Must contain at least one uppercase letter, one lowercase letter, one digit"
              />

              <v-text-field
                id="passwordConfirm"
                v-model="form.password_confirm"
                :rules="passwordConfirmRules"
                label="Confirm New Password"
                name="password"
                prepend-icon="mdi-lock-outline"
                type="password"
              />
            </v-form>
            <v-alert v-if="error" type="error">
              {{ error }}
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" :disabled="!valid" @click="savePassword">
              Save password
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import regex from '~/helpers/regex';
export default {
  auth: false,
  data() {
    return {
      valid: false,
      form: {
        new_password: null,
      },
      errors: {
        new_password: '',
      },
      rules: {
        new_password: [
          v => !!v || 'Password is required',
          v => regex.password.test(v) || 'Weak password',
        ],
      },
      error: '',
    };
  },
  computed: {
    challengeParameters() {
      return this.$store.state.authLocal.loginChallenge;
    },
    passwordConfirmRules() {
      return [
        v => !!v || 'Retype the password',
        v => v === this.form.new_password || 'Passwords must match',
      ];
    },
    username() {
      return this.$route.query.u;
    },
    resetCode() {
      return this.$route.query.c;
    },
    isReset() {
      return this.resetCode && this.username;
    },
  },
  created() {
    if (!this.challengeParameters && !this.isReset) {
      this.$router.push('/login');
    }
  },

  methods: {
    async savePassword() {
      try {
        if (this.isReset) {
          this.resetPassword();
          return;
        }
        if (!this.valid) return;

        await this.$axios.post('/auth/login/challenge', {
          new_password: this.form.new_password,
          challenge_parameters: this.challengeParameters,
        });
        await this.login(
          this.challengeParameters.username,
          this.form.new_password,
        );
        this.$snack.show('New password accepted', 'success');
        return;
      } catch (error) {
        if (error.code === 'InvalidInput') {
          for (const key of Object.keys(error.invalidFields)) {
            const fieldCode = error.invalidFields[key];
            if (fieldCode === 'WeakPassword')
              this.errors[key] = 'Weak password';
          }
        }
      }
    },
    async resetPassword() {
      try {
        await this.$axios.$post('/auth/password/forgot/confirm', {
          username: this.username,
          new_password: this.form.new_password,
          code: this.resetCode,
        });
        this.$snack.show('Reset successful', 'success');
        await this.login(this.username, this.form.new_password);
      } catch (error) {
        if (error.code === 'CodeMismatchException') {
          this.error = 'Invalid reset code, please request new password reset';
        } else {
          this.error = error.message;
        }
        this.$snack.show('Reset failed', 'error');
      }
    },
    async login(username, password) {
      try {
        await this.$auth.loginWith('local', {
          data: {
            username,
            password,
          },
        });
        this.$router.push('/');
      } catch (error) {
        this.$snack.show(`Login error: ${error}`, 'danger');
      }
    },
  },
};
</script>
