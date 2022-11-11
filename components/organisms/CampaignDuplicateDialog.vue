<template>
  <v-dialog v-model="value" width="600" @click:outside="closeCreateDialog">
    <v-card>
      <v-card-title class="headline" primary-title>
        Duplicate campaign
      </v-card-title>

      <v-card-text>
        <div class="d-flex align-items-center">
          <v-form>
            <v-text-field v-model="form.campaign_name" label="Campaign name" />
            <v-select
              v-model="form.mailing_list_tag_id"
              :items="tags"
              item-text="name"
              item-value="id"
              label="Mailing list tag"
              hide-details
            >
              <template #selection="{ item }">
                <v-chip :key="item.id" :color="item.color" dark>
                  {{ item.name }}
                </v-chip>
              </template>
            </v-select>
          </v-form>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeCreateDialog"> close </v-btn>
        <v-btn
          color="primary"
          :loading="busy"
          :disabled="disabled"
          @click="submitDuplicate"
        >
          Duplicate
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import MailingListTagsMixin from '~/mixins/mailingListTags';

export default {
  mixins: [MailingListTagsMixin],
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    sourceCampaign: {
      type: Object,
      required: true,
    },
    allowScheduling: {
      type: Boolean,
      default: false,
    },
    busy: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        campaign_name: undefined,
        scheduled: undefined,
        mailing_list_tag_id: undefined,
      },
    };
  },
  computed: {
    disabled() {
      return !(this.form.campaign_name && this.form.mailing_list_tag_id);
    },
  },
  watch: {
    sourceCampaign(newVal) {
      if (newVal) {
        this.form.campaign_name = newVal.attributes.campaign_name;
        this.form.scheduled = newVal.attributes.scheduled;

        const tagFound = this.tags.find(
          t => t.id === newVal.mailing_list_tag_id,
        );
        if (tagFound)
          this.form.mailing_list_tag_id = newVal.mailing_list_tag_id;
        else this.selectDefaultTag();
      }
    },
  },
  created() {
    this.selectDefaultTag();
  },
  methods: {
    submitDuplicate() {
      this.$emit('submit', {
        ...this.form,
        id: this.sourceCampaign.id,
      });
    },
    closeCreateDialog() {
      this.form = {
        campaign_name: undefined,
        scheduled: undefined,
        mailing_list_tag_id: undefined,
      };
      this.$emit('close');
    },
  },
};
</script>

<style></style>
