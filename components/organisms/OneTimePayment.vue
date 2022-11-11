<template>
  <div
    class="d-flex flex-column justify-content-between align-items-start my-4"
  >
    <div>
      <slot name="left">
        <span class="headline"> {{ $t('billing.oneTimePayment') }} </span>
      </slot>
    </div>

    <ProductSelectForm ref="form" v-model="form" @handleChange="handleChange" />

    <Loader v-if="isLoading" />

    <div
      v-if="
        !!form.data?.selectedProduct &&
        !!form.data.checkoutUrl &&
        !!form.data.checkoutUrl
      "
    >
      <a :href="form.data.checkoutUrl" target="_blank">One Time Payment</a>
    </div>
  </div>
</template>

<script>
import ProductSelectForm from '~/components/forms/ProductSelectForm';
import endpoints from '~/constants/endpoints';
import Loader from '~/components/atoms/Loader';

export default {
  components: {
    ProductSelectForm,
    Loader,
  },
  data() {
    return {
      isLoading: false,
      form: {
        valid: false,
        data: {
          checkoutUrl: undefined,
          selectedProduct: undefined,
          session: undefined,
        },
      },
    };
  },
  methods: {
    async handleChange(product) {
      try {
        this.isLoading = true;

        const { data } = await this.$axios.post(
          `${endpoints.payments.session}?price=${product}&mode=payment`,
        );

        this.form.data.session = data?.id;
        this.form.data.checkoutUrl = data?.url;
      } catch (error) {
        this.$snack.show('Failed to load products', 'danger');
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
