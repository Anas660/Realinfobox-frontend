<template>
  <div class="container-fluid elevation-1 white mb-3 p-3">
    <div class="row">
      <div class="col">
        <span class="overline"> Contact Limit </span>
        <div>{{ limit }}</div>
      </div>
      <div class="col">
        <span class="overline"> contacts total </span>
        <div>{{ totals ? totals.contacts : 0 }}</div>
      </div>
      <div class="col">
        <span class="overline"> active </span>
        <div>{{ stats.ok }}</div>
      </div>
      <div class="col">
        <span class="overline"> unsubscribed </span>
        <div>{{ stats.unsubscribed }}</div>
      </div>
      <div class="col">
        <span class="overline"> invalid </span>
        <div>{{ stats.invalid }}</div>
      </div>
      <div class="col">
        <span class="overline"> complaint </span>
        <div>{{ stats.complaint }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totals: {
      type: Object,
      default: () => {},
    },
    totalsPercent: {
      type: Object,
      default: () => {},
    },
    limit: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    stats() {
      if (!this.totals)
        return {
          total: 'N/A',
          ok: 'N/A',
          complaint: 'N/A',
          invalid: 'N/A',
          unsubscribed: 'N/A',
        };

      return {
        total: `${this.totals.ok}/${this.limit}`,
        ok: `${this.totals.ok} (${this.totalsPercent.ok}%)`,
        complaint: `${this.totals.complaint} (${this.totalsPercent.complaint}%)`,
        invalid: `${this.totals.bounce} (${this.totalsPercent.bounce}%)`,
        unsubscribed: `${this.totals.unsubscribed} (${this.totalsPercent.unsubscribed}%)`,
      };
    },
  },
};
</script>
