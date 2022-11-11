<template>
  <v-dialog v-model="visible" width="900">
    <v-card>
      <v-card-title
        class="headline d-flex justify-content-between align-items-center mb-3"
        primary-title
      >
        <span class="flex-grow-1 mr-2"> Upload CSV </span>
      </v-card-title>

      <v-card-text>
        <div class="row">
          <div class="col-6">
            <v-file-input
              v-model="file"
              :accept="allowedFiles.join(',')"
              label="Select csv file"
            />
          </div>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <div v-if="fileContent" class="Preview">
            <div class="Controls elevation-2 p-4">
              <div class="row">
                <div class="col-2">
                  <v-text-field
                    v-model="delimiter"
                    name="email"
                    :rules="requiredRules"
                    label="Delimiter"
                    required
                  />
                </div>
                <div class="col-4">
                  <v-checkbox v-model="hasHeader" label="header row" />
                </div>
                <div class="col-6">
                  <v-select
                    v-model="selectedTag"
                    :items="tags"
                    item-text="name"
                    item-value="id"
                    label="Mailing list tag"
                    hide-details
                    :rules="requiredRules"
                  >
                    <template #selection="{ item }">
                      <v-chip :key="item.id" :color="item.color" dark>
                        {{ item.name }}
                      </v-chip>
                    </template>
                  </v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-6" />
                <div class="col-6">
                  <v-select
                    v-model="selectedStatus"
                    :items="statuses"
                    item-text="text"
                    item-value="value"
                    label="Import status"
                    hide-details
                    :rules="requiredRules"
                  >
                    <template #selection="{ item }">
                      <v-chip :color="getColor(item.value)" class="mr-2" dark>
                        {{ item.text }}
                      </v-chip>
                    </template>
                  </v-select>
                </div>
              </div>
              <template v-if="hasHeader">
                <div class="red--text my-2">
                  Set the header field names corresponding to your csv headers
                </div>
                <div class="HeaderFields row">
                  <v-text-field
                    v-model="emailField"
                    class="col"
                    name="email"
                    :rules="requiredRules"
                    label="Email field"
                    required
                  />
                  <v-text-field
                    v-model="givenNameField"
                    class="col"
                    name="given_name"
                    label="Given name field"
                  />
                  <v-text-field
                    v-model="familyNameField"
                    class="col"
                    name="family_name"
                    label="Family name field"
                  />
                </div>
              </template>
            </div>
            <v-divider />
            <div class="elevation-2 p-4">
              Preview of data in file with above settings
              <v-data-table :headers="tableHeaders" :items="parsedContacts" />
            </div>
            <v-alert type="warning">
              <p>
                Before you import new subscribers, you need to ensure you have
                their permission to add them to the list. You have the
                responsibility to have freely given, specific and informed
                consent from each subscriber in order to comply with GDPR, CASL
                and CAN-SPAM regulations. If you don't comply with those
                regulations, you run the risk of your emails being flagged as
                spam, or worse, being prosecuted under anti-spam laws.
              </p>
              <p>
                You cannot use purchased, rented, third party, harvested or
                scraped lists of any kind.
              </p>
            </v-alert>
            <v-checkbox
              v-model="agreedToTerms"
              :rules="requiredRules"
              label="All of the new subscribers I am adding have given me consent to send them email."
            />
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="error" text @click="closeDialog"> close </v-btn>
        <v-btn
          color="primary"
          :disabled="!canSubmit"
          @click="
            $emit('upload', {
              contacts: parsedContacts,
              status: selectedStatus.value,
            })
          "
        >
          upload
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
  },
  data() {
    return {
      tableHeaders: [
        { text: 'Email', value: 'email' },
        { text: 'Given Name', value: 'given_name' },
        { text: 'Family Name', value: 'family_name' },
      ],
      loading: false,
      file: undefined,
      allowedFiles: ['.csv'],
      agreedToTerms: false,
      selectedStatus: undefined,
      fileContent: null,
      delimiter: ',',
      emailField: 'email',
      givenNameField: 'FirstName',
      familyNameField: 'LastName',
      hasHeader: true,
      requiredRules: [v => !!v || 'Required'],
      selectedTag: undefined,
    };
  },
  computed: {
    statuses() {
      const statuses = this.$store.state.mailingList.statuses;
      if (!statuses) return [];

      return statuses;
    },
    visible: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
    canSubmit() {
      return (
        this.agreedToTerms &&
        this.parsedContacts.length &&
        this.selectedStatus &&
        this.selectedTag
      );
    },
    parsedContacts() {
      if (
        [
          this.fileContent,
          this.givenNameField,
          this.familyNameField,
          this.emailField,
        ].some(i => !i)
      ) {
        return [];
      }
      const rows = this.fileContent.split('\n');
      const trim = val => val.replace(/(^["\s]*)|(["\s]*$)/g, ''); //replace all "\s padding string
      const rowArrays = rows.map(row => {
        return row.split(this.delimiter).map(string => trim(string));
      });
      let gnIndex, fnIndex, eIndex;
      if (this.hasHeader) {
        const headerRow = rowArrays.shift();
        gnIndex = headerRow.findIndex(
          item => trim(item) === this.givenNameField,
        );
        fnIndex = headerRow.findIndex(
          item => trim(item) === this.familyNameField,
        );
        eIndex = headerRow.findIndex(item => trim(item) === this.emailField);
      } else {
        eIndex = 0;
        gnIndex = 1;
        fnIndex = 2;
      }
      return rowArrays
        .map(row => {
          if (!(row[fnIndex] || row[gnIndex] || row[eIndex])) return false;
          return {
            family_name: row[fnIndex] ? row[fnIndex].trim() : undefined,
            given_name: row[gnIndex] ? row[gnIndex].trim() : undefined,
            email: row[eIndex] ? row[eIndex].trim() : undefined,
            tags: [this.selectedTag],
            status: this.selectedStatus.value,
          };
        })
        .filter(row => !!row);
    },
  },
  watch: {
    file: {
      async handler() {
        if (this.file) {
          const split = this.file.name.split('.');
          const extension = split[split.length - 1];
          if (!this.allowedFiles.includes('.' + extension)) {
            this.$snack.show('invalid file', 'error');
            this.file = undefined;
          }

          this.fileContent = await this.file.text();
        }
      },
    },
  },
  created() {
    this.selectedStatus = this.statuses[0];
  },

  methods: {
    closeDialog() {
      this.visible = false;
    },
    getColor(status) {
      switch (status) {
        case 'complaint':
        case 'unsubscribed':
          return 'warning';

        case 'bounce':
          return 'error';

        default:
          return 'success';
      }
    },
  },
};
</script>
