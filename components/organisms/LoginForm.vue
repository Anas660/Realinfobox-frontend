<template>
  <div
    class="w-fill flex h-96 flex-col items-center rounded-medium px-9 py-11 shadow-xl"
  >
    <form-input
      v-model="form.username"
      name="username"
      :error="!!error"
      :placeholder="$t('login.form.email')"
      :disabled="isLoading"
    />
    <form-input
      v-if="!isResetPasswordShown"
      v-model="form.password"
      name="username"
      type="password"
      :error="!!error"
      :placeholder="$t('login.form.password')"
      :disabled="isLoading"
    />
    <p v-if="error" class="mr-auto text-cinnabar">{{ error }}</p>
    <underlined-button
      class="ml-auto mb-10"
      :text="
        isResetPasswordShown
          ? $t('login.form.login')
          : $t('login.form.forgotPassword')
      "
      @click="isResetPasswordShown = !isResetPasswordShown"
    />
    <primary-button
      :disabled="!form.username || (!form.password && !isResetPasswordShown)"
      :text="
        isResetPasswordShown
          ? $t('login.form.resetPassword')
          : $t('login.form.login')
      "
      :fit-button="true"
      :is-loading="isLoading"
      @click="isResetPasswordShown ? handleResetPassword() : handleLogin()"
    />
  </div>
</template>

<script>
import FormInput from '~/components/atoms/FormInput';
import PrimaryButton from '~/components/atoms/PrimaryButton';
import UnderlinedButton from '~/components/atoms/UnderlinedButton';

import endpoints from '~/constants/endpoints';

export default {
  components: { UnderlinedButton, FormInput, PrimaryButton },

  data() {
    return {
      isResetPasswordShown: false,
      form: {
        username: null,
        password: null,
      },
      error: '',
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

  methods: {
    async handleLogin() {
      try {
        this.isLoading = true;

        const { username, password } = this.form;

        await this.$auth.loginWith('local', {
          data: {
            username,
            password,
          },
        });

        this.error = '';
      } catch (error) {
        this.error = error.message;
      }

      this.isLoading = false;
    },

    async handleResetPassword() {
      try {
        this.isLoading = true;

        await this.$axios.$post(endpoints.auth.resetPassword, {
          username: this.form.username,
        });

        this.isLoading = false;
        this.$snack.show('success', 'Check your email for confirmation.');
      } catch (error) {
        this.error = error.message;
        this.errors = error.invalid_fields;
        this.isLoading = false;
        this.$snack.show('error', 'Failed to reset password');
      }
    },
  },
};
</script>
