<template>
  <v-dialog v-model="computedValue" width="500" @click:outside="$emit('close')">
    <v-card>
      <v-card-title class="headline" primary-title>
        Edit user {{ name }}
      </v-card-title>

      <v-card-text>
        <ProductsSelect
          ref="productSelect"
          :key="userId"
          v-model="selectedProducts"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeCreateDialog"> cancel </v-btn>
        <v-btn
          color="primary"
          :loading="busy"
          :disabled="busy"
          @click="updateUser"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ProductsSelect from '~/components/molecules/ProductsSelect';

export default {
  components: {
    ProductsSelect,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    busy: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      default: '',
    },
    userType: {
      type: String,
      default: 'user',
    },
  },
  data() {
    return {
      selectedProducts: [],
    };
  },
  computed: {
    userStore() {
      if (this.userType === 'demo') return 'demoUsers';
      return 'users';
    },
    user() {
      return this.$store.state.users[this.userStore].find(
        user => user.id === this.userId,
      );
    },
    name() {
      if (!this.user) return '';
      return (
        this.user.attributes.given_name + ' ' + this.user.attributes.family_name
      );
    },
    computedValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  watch: {
    user: {
      handler(newUser) {
        this.$nextTick(() => {
          if (!newUser) {
            this.selectedProducts = [];
            return;
          }
          this.selectedProducts = newUser.productIds;
          this.$refs.productSelect.updateProducts();
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    closeCreateDialog() {
      this.$emit('close');
    },

    updateUser() {
      this.$emit('submit', {
        productIds: this.selectedProducts,
        userId: this.userId,
      });
    },
  },
};
</script>
