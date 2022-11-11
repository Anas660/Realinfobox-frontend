<template>
  <div class="flex h-full flex-row">
    <div class="w-1/2 px-36 pt-11">
      <link-logo class="mr-auto" />
      <div class="mt-20">
        <heading class="mb-3" :text="$t('login.loginTitle')" />
        <p class="mb-6">{{ $t('login.loginSubtitle') }}</p>
        <login-form />
      </div>
    </div>
    <div class="flex w-1/2 flex-col bg-mineShaft">
      <rib-square-transparent class="ml-auto h-1/2 w-1/2" />
      <div class="mt-4 flex flex-col justify-center">
        <h1 class="mx-20 self-center text-center text-3xl font-bold text-white">
          {{ $t('login.title') }}
        </h1>
        <h3 class="my-6 text-center font-bold uppercase text-white">
          {{ $t('login.subtitle') }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '~/components/atoms/Heading';
import RibSquareTransparent from '~/components/atoms/RibSquareTransparent';
import LinkLogo from '~/components/atoms/LinkLogo';
import LoginForm from '~/components/organisms/LoginForm';

export default {
  auth: 'guest',

  components: {
    Heading,
    LinkLogo,
    LoginForm,
    RibSquareTransparent,
  },

  layout: 'clean',
};
</script>
