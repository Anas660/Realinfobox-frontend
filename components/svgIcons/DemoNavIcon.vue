<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 14L21 9L12 4L3 9L12 14Z" :stroke="stroke" />
    <path
      d="M12 14.0001L18.16 10.5781C18.9705 12.6362 19.2005 14.8773 18.825 17.0571C16.2886 17.3033 13.8972 18.3537 12 20.0551C10.103 18.3539 7.71207 17.3035 5.17599 17.0571C4.80019 14.8773 5.03022 12.6362 5.84099 10.5781L12 14.0001Z"
      :stroke="stroke"
    />
    <path
      d="M12 14L21 9L12 4L3 9L12 14ZM12 14L18.16 10.578C18.9705 12.6361 19.2005 14.8772 18.825 17.057C16.2886 17.3032 13.8972 18.3536 12 20.055C10.1031 18.3538 7.71208 17.3034 5.176 17.057C4.8002 14.8772 5.03023 12.636 5.841 10.578L12 14ZM8 20V12.5L12 10.278"
      :stroke="stroke"
      :stroke-opacity="opacity"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
import navIconMixin from '~/mixins/navIconMixin';

export default {
  mixins: [navIconMixin],
};
</script>
