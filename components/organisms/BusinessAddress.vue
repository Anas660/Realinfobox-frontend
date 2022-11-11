<template>
  <div class="mx-20">
    <PageHeader
      title="Settings"
      action-button-text="Save"
      action-button-icon="mdi-content-save"
      :action-button-disabled="!canSave"
      @action-button="save"
    />
    <AddressForm v-model="businessAddress" />
  </div>
</template>

<script>
import AddressForm from '~/components/forms/AddressForm';
import PageHeader from '~/components/organisms/PageHeader';

export default {
  components: { AddressForm, PageHeader },
  data() {
    return {
      businessAddress: {
        valid: false,
        data: {
          address1: '',
          address2: '',
          city: '',
          zip: '',
          country: '',
        },
      },
    };
  },
  computed: {
    canSave() {
      return this.businessAddress.valid;
    },
  },
};
</script>
