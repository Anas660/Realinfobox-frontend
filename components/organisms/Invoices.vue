<template>
  <div
    class="d-flex flex-column justify-content-between align-items-start my-4"
  >
    <PageHeader title="Invoices" />

    <v-data-table
      :headers="tableHeaders"
      :items="tableData"
      :items-per-page="25"
      :loading="isLoading"
      class="EditorsTable"
    >
      <template #header.action>
        <div class="w-100 text-right">Actions</div>
      </template>
      <template #item.due_date="{ item }">
        <div class="">
          {{ item.due_date | stripeDate(item.due_date) }}
        </div>
      </template>
      <template #item.created="{ item }">
        <div class="">
          {{ item.created | stripeDate(item.created) }}
        </div>
      </template>
      <template #item.hosted_invoice_url="{ item }">
        <a :href="item?.hosted_invoice_url" target="_blank">
          Hosted Invoice URL
        </a>
      </template>
      <template #item.amount_due="{ item }">
        <span>
          {{ item.amount_due | currency(item.amount_due) }}
        </span>
      </template>
      <template #item.amount_paid="{ item }">
        <span>
          {{ item.amount_paid | currency(item.amount_paid) }}
        </span>
      </template>
      <template #item.amount_remaining="{ item }">
        <span>
          {{ item.amount_paid | currency(item.amount_remaining) }}
        </span>
      </template>
      <template #item.invoice_pdf="{ item }">
        <a :href="item?.invoice_pdf" target="_blank"> Downlaod PDF </a>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import PageHeader from '~/components/organisms/PageHeader';
import endpoints from '~/constants/endpoints';

export default {
  components: {
    PageHeader,
  },

  data() {
    return {
      tableHeaders: [
        { text: 'Created At', value: 'created' },
        { text: 'Due Date', value: 'due_date' },
        { text: 'Amount due', value: 'amount_due' },
        { text: 'Amount Paid', value: 'amount_paid' },
        { text: 'Amount Remaining', value: 'amount_remaining' },
        { text: 'Payment Url', value: 'hosted_invoice_url' },
        { text: 'Invoice Pdf', value: 'invoice_pdf' },
      ],
      tableData: undefined,
      isLoading: false,
    };
  },
  computed: {
    cities() {
      return this.$store.getters['config/citiesArray'];
    },
    canSave() {
      return this.form.valid;
    },
  },
  async created() {
    const invoices = await this.fetchUserDetail();

    this.tableData = invoices.data?.map(invoice => {
      return {
        ...invoice,
        amount_due: invoice.amount_due / 100,
        amount_paid: invoices.amount_paid / 100,
        amount_remaining: invoices.amount_remaining / 100,
      };
    });
  },
  methods: {
    async fetchUserDetail() {
      try {
        this.isLoading = true;

        const { data } = await this.$axios.get(endpoints.payments.invoice);

        return data;
      } catch (error) {
        this.$snack.show('Failed to fetch detail data', 'error');
      } finally {
        this.isLoading = false;
      }
    },
    async save(data) {
      try {
        console.log(data);
        ///await this.$axios.$post('/account/settings', data);
        this.$snack.show('Saved successfully', 'success');
      } catch (error) {
        console.log(error);
        this.$snack.show('Saving error', 'error');
      }
    },
  },
};
</script>
