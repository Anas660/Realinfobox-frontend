<template>
  <div class="mx-12">
    <ReportTypeRow
      resolution="1060x1100"
      title="Complete Social Report"
      to-report-type="complete"
    />
    <ReportTypeRow
      v-if="isAdmin || isEditor || !isEdmonton"
      resolution="1060x1100"
      title="Newsletter Report"
      to-report-type="newsletter"
    />
    <ReportTypeRow
      resolution="600x600"
      title="Average Days on Market"
      to-report-type="blue"
    />
    <ReportTypeRow
      resolution="600x600"
      title="Market at a Glance"
      to-report-type="mag"
    />
    <ReportTypeRow
      resolution="600x600"
      title="Market Status"
      to-report-type="ms"
    />
  </div>
</template>

<script>
import RolesMixin from '~/mixins/auth';
import ReportTypeRow from '~/components/molecules/ReportTypeRow';

export default {
  components: {
    ReportTypeRow,
  },

  mixins: [RolesMixin],

  computed: {
    isCalgary() {
      return this.name.toLowerCase() === 'city of calgary';
    },

    isEdmonton() {
      return this.name.toLowerCase() === 'edmonton';
    },

    name() {
      return this.$route.params.name;
    },

    currentDate() {
      return new Date();
    },

    yearOfLastMonth() {
      return this.lastMonth.getFullYear();
    },
  },
};
</script>
