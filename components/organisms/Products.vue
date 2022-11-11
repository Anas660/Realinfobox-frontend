<template>
  <div>
    <div class="row justify-content-end mb-2">
      <v-btn
        :loading="loading"
        :disabled="loading"
        @click="productDialog.visible = true"
      >
        Add Product
      </v-btn>
    </div>

    <div class="row mb-2">
      <div v-for="product in products" :key="product.id" class="col-4">
        <v-card class="mb-4">
          <v-card-title class="d-flex justify-content-between">
            <div>
              {{ product.attributes.name }}
            </div>
            <v-btn
              :loading="loading"
              small
              icon
              color="danger"
              @click="editProduct(product)"
            >
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            allows:
            <div v-for="feature in features" :key="feature">
              <template
                v-if="
                  product.attributes.allows
                    ? product.attributes.allows.includes(feature)
                    : false
                "
              >
                <v-icon left color="green"> mdi-check </v-icon>
              </template>
              <template v-else>
                <v-icon left color="red"> mdi-close </v-icon>
              </template>
              {{ feature }}
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <ProductDialog
      v-model="productDialog.visible"
      :busy="loading"
      :prefill="productDialog.product"
      @submit="saveProduct"
      @close="productDialog.visible = false"
    />
  </div>
</template>

<script>
import ProductDialog from '~/components/organisms/ProductDialog';
export default {
  components: {
    ProductDialog,
  },

  data() {
    return {
      loading: false,
      productDialog: {
        visible: false,
        product: null,
      },
      products: undefined,
      checkboxes: true,
      features: ['newsletter', 'reports'],
    };
  },
  created() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      this.loading = true;
      try {
        this.products = await this.$axios.$get('/products');
      } catch (error) {
        this.$snack.show('Failed to load products', 'danger');
      }
      this.loading = false;
    },
    async saveProduct(product) {
      this.loading = true;
      try {
        const method = product.id ? '$patch' : '$post';
        await this.$axios[method](`/products/${product.id || ''}`, {
          name: product.name,
          allows: product.allows,
        });

        this.loadProducts();
        this.$snack.show('Successfully saved', 'success');

        this.productDialog.visible = false;
      } catch (error) {
        this.$snack.show('Save failed', 'error');
      }
      this.loading = false;
    },
    editProduct(product) {
      this.productDialog.product = {
        id: product.id,
        name: product.attributes.name,
        allows: product.attributes.allows,
      };
      this.openDialog();
    },
    openDialog() {
      this.productDialog.visible = true;
    },
    closeDialog() {
      this.productDialog.product = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.Product {
  .ProductImageWrapper {
    width: 100px;
    height: 100px;
    overflow: hidden;
    .ProductImage {
      max-height: 100%;
      object-fit: cover;
    }
  }
  .ProductProp {
    display: flex;
    .ProductPropTitle {
      width: 60px;
    }
    .ProductPropValue {
    }
  }
}
</style>
