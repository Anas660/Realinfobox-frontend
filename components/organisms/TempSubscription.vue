<template>
  <Loader v-if="isLoading" />
  <div
    v-else
    class="d-flex flex-column justify-content-between align-items-start my-4"
  >
    <SubscriptionSection
      :title="$t('billing.mySubscriptions')"
      :products="mySubscriptions"
    />
    <SubscriptionSection
      :title="$t('billing.subscription')"
      :products="subscriptions.data"
    />

    <div
      v-if="
        !!form.data?.selectedProduct &&
        !!form.data?.session &&
        !!form.data.checkoutUrl
      "
    >
      <a :href="form.data.checkoutUrl" target="_blank">Subscribe</a>
    </div>
  </div>
</template>

<script>
import endpoints from '~/constants/endpoints';

// import ProductSelectForm from '~/components/forms/ProductSelectForm';
import Loader from '~/components/atoms/Loader';
import SubscriptionSection from '~/components/organisms/SubscriptionSection';

export default {
  components: {
    // / ProductSelectForm,
    Loader,
    SubscriptionSection,
  },
  data() {
    return {
      isLoading: false,
      form: {
        valid: false,
        data: {
          selectedProduct: undefined,
          session: undefined,
        },
      },
      subscriptions: [],
      mySubscriptions: [],
    };
  },

  created() {
    this.fetchDetailData();
  },

  methods: {
    async handleChange(product) {
      try {
        this.isLoading = true;

        const { data } = await this.$axios.post(
          `${endpoints.payments.session}?price=${product}&mode=subscription`,
        );

        this.form.data.session = data?.id;
        this.form.data.checkoutUrl = data?.url;
      } catch (error) {
        this.$snack.show('Failed to load products', 'danger');
      } finally {
        this.isLoading = false;
      }
    },

    async fetchDetailData() {
      try {
        this.isLoading = true;

        const { mydata } = await this.$axios.get(endpoints.payments.mySubscriptions);
        const { data } = await this.$axios.get(endpoints.payments.subscriptions);

        this.isLoading = false;

        this.subscriptions = data;
        this.mySubscriptions = mydata;
      } catch (error) {
        this.$snack.show('Failed to load subscriptions', 'danger');
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
