<template>
  <div class="mb-10 w-full">
    <slot name="left">
      <div class="d-flex align-center w-full">
        <span class="headline mr-auto">
          {{ title }}
        </span>
        <div class="mr-9 w-1/3">
          <v-autocomplete
            v-model="searchedProduct"
            :items="searchProducts"
            :item-text="name"
            :item-value="id"
            :search-input.sync="search"
            cache-items
            flat
            hide-no-data
            hide-details
            label="Search for a product"
            solo-inverted
            return-object
          />
        </div>
      </div>

      <p v-if="!products" class="mt-10">
        {{ $t('billing.noSubscriptions') }}
      </p>

      <div v-else class="d-flex mt-10 flex-wrap justify-start gap-5">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :title="product.name"
          :type="product.object"
          :description="product.description"
          :price="product.price"
          :is-subscribed="product?.isSubscribed"
        />
      </div>
    </slot>
  </div>
</template>

<script>
import ProductCard from '~/components/molecules/ProductCard';

export default {
  components: {
    ProductCard,
  },
  props: {
    title: { type: String, required: true },
    products: { type: Array, default: () => [] },
  },

  data() {
    return {
      searchedProduct: '',
    };
  },

  computed: {
    searchProducts() {
      return this.products.map(({ name }) => name);
    },

    filteredProducts() {
      return this.products.filter(({ name }) =>
        name.includes(this.searchedProduct),
      );
    },
  },

  watch: {
    searchedProduct(newVal) {
      if (newVal === null) {
        this.searchedProduct = '';
      }
    },
  },
};
</script>
