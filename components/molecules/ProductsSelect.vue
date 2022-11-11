<template>
  <div>
    <v-radio-group v-model="selected" column>
      <v-radio
        v-for="product in productsArray"
        :key="product.id"
        :value="product.id"
        :label="product.attributes.name"
        hide-details
      />
    </v-radio-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import _ from 'lodash';

export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    loadProducts: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selected: null,
    };
  },
  computed: {
    ...mapGetters({
      productsArray: 'config/productsArray',
    }),
  },
  watch: {
    productsArray: {
      handler(newVal) {
        if (newVal.length) {
          this.updateProducts();
        }
      },
      deep: true,
    },
    selected: {
      handler() {
        this.$emit('input', [this.selected]);
      },
      deep: true,
    },
  },
  created() {
    if (!this.productsArray.length && this.loadProducts) {
      this.$store.dispatch('config/loadProducts', {});
    }
  },
  methods: {
    updateProducts() {
      this.$nextTick(() => {
        this.selected = _.first(this.value);
      });
    },
  },
};
</script>
