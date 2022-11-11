<template>
  <div>
    <SectionHeader>
      <template #right>
        <v-btn
          color="primary"
          :disabled="!template && !subject"
          @click="save"
          @loading="saving"
        >
          <v-icon left> mdi-table-plus </v-icon>
          Save text
        </v-btn>
      </template>
    </SectionHeader>
    <div class="container-fluid elevation-1 white">
      <div class="row">
        <div class="col">
          <v-text-field
            v-model="subject"
            label="Subject {link} - body link Variable"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <CKEditor v-model="template" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailTemplateMixin from '~/mixins/emailTemplateMixin';

export default {
  mixins: [EmailTemplateMixin],
  data() {
    return {
      templateName: 'resetPassword-email',
    };
  },
  computed: {
    storeTemplate() {
      return this.$store.state.config.templates.resetPasswordEmail;
    },
  },
};
</script>

<style></style>
