<template>
  <section class="container">
    <div class="row flex-column w-100">
      <div class="col-12 mb-4"></div>
    </div>
  </section>
</template>

<script>
import RolesMixin from '~/mixins/auth';

export default {
  components: {},
  mixins: [RolesMixin],
  data() {
    return {};
  },
  computed: {
    impersonatedId() {
      return this.$store.state.authLocal.impersonatedId;
    },
  },
};
</script>
