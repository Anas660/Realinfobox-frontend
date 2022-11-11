<template>
  <v-form ref="form" v-model="form.valid" lazy-validation>
    <Loader v-if="isLoading" />
    <div v-else />

    <v-select
      v-model="form.data.selectedProduct"
      :items="listProducts"
      :label="$t('billing.selectProduct')"
      :disabled="isLoading"
      @input="handleChange"
    />
  </v-form>
</template>

<script>
import validation from '~/helpers/input-validation';
import endpoints from '~/constants/endpoints';
import Loader from '~/components/atoms/Loader';

const required = validation.rules.required;

export default {
  components: {
    Loader,
  },
  props: {
    value: { type: Object, required: true },
  },
  data() {
    return {
      isLoading: false,
      products: [],
      selectedProduct: undefined,
    };
  },

  computed: {
    form: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('input', this.form);
      },
      deep: true,
    },
    listProducts() {
      if (!this.products.data) return;

      return this.products?.data?.map(product => ({
        value: product?.default_price,
        text: product?.name,
      }));
    },
  },

  methods: {
    async fetchDetailData() {
      try {
        this.isLoading = true;

        const { data } = await this.$axios.get(endpoints.payments.products);
        this.products = data;
      } catch (error) {
        this.$snack.show('Failed to load products', 'error');
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
    validate() {
      this.$refs.form.validate();
    },
    handleChange(product) {
      this.selectedProduct = product;
      this.$emit('handleChange', product);
    },
  },
};
</script>

<style></style>
