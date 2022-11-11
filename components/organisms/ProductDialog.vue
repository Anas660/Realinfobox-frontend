<template>
  <v-dialog
    v-model="value"
    width="500"
    @update:return-value="$refs.form.resetForm()"
    @click:outside="closeDialog"
  >
    <v-card>
      <v-card-title class="headline" primary-title> Product </v-card-title>

      <v-card-text @keydown.enter="create">
        <ProductForm ref="form" v-model="form" />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeDialog"> cancel </v-btn>
        <v-btn
          color="primary"
          :loading="busy"
          :disabled="!form.valid"
          @click="save"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ProductForm from '~/components/forms/ProductForm';

export default {
  components: {
    ProductForm,
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
    prefill: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      form: {
        valid: false,
        data: {
          name: '',
          allows: [],
        },
      },
    };
  },
  watch: {
    prefill(newVal) {
      this.form.data = newVal;
    },
  },
  methods: {
    closeDialog() {
      this.$refs.form.resetForm();
      this.$emit('close');
    },

    save() {
      this.$refs.form.validate();

      if (!this.form.valid) {
        return;
      }

      this.$emit('submit', this.form.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.ProductPreviewContainer {
  height: 102px;
  width: 102px;
  border: 1px solid red;
  .ProductPreview {
    object-fit: cover;
  }
}
</style>
