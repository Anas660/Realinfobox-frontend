import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1300,
    xl: 1920,
    xxl: Infinity,
  },
  defaultBreakpoint: 'sm', // customize this for SSR
});
