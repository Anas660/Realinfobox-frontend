<template>
  <div class="container-fluid">
    <PageHeader title="Mailing list">
      <template #right>
        <div class="d-flex flex-column align-items-end">
          <div class="d-flex children-margin align-items-end">
            <template v-if="!isDemo">
              <v-btn
                color="secondary"
                :disabled="limitReached"
                @click="dialogs.uploadCsv.visible = true"
              >
                <v-icon left> mdi-file-upload </v-icon>
                import csv
              </v-btn>
              <v-btn color="secondary" @click="exportCsv">
                <v-icon left> mdi-file-download </v-icon>
                export csv
              </v-btn>
            </template>
            <v-btn color="secondary" @click="dialogs.manageTags.visible = true">
              <v-icon left> mdi-tag-multiple </v-icon>
              Manage Tags
            </v-btn>
            <v-btn
              color="primary"
              :disabled="limitReached"
              @click="dialogs.addEmail.visible = true"
            >
              <v-icon left> mdi-account-plus </v-icon>
              Add email
            </v-btn>
          </div>
        </div>
      </template>
    </PageHeader>
    <StatsRow
      :totals="totals"
      :totals-percent="totalsPercent"
      :limit="myAttrs.mailing_list_limit"
    />
    <v-alert v-if="limitReached" type="warning">
      <p>
        You have reached your limit of available contacts for sending. Please
        inquire a quota increase.
      </p>
    </v-alert>
    <div
      v-if="selectedRows.length"
      class="container-fluid elevation-1 white mb-3 p-3"
    >
      <div class="mb-2 overline">Mass actions</div>
      <v-btn
        color="secondary"
        :loading="deleting"
        :disabled="!selectedRows.length"
        @click="deleteMany"
      >
        <v-icon left> mdi-delete </v-icon>
        Delete Many
      </v-btn>
    </div>
    <div class="container-fluid elevation-1 white">
      <div class="row justify-content-end">
        <div class="col-6 d-flex align-items-end justify-content-between">
          <div class="mr-2">
            <v-btn-toggle v-model="selectedViewIndex" dense mandatory>
              <v-btn small>
                <v-icon left> mdi-at </v-icon>
                default
              </v-btn>
              <v-btn small>
                <v-icon left> mdi-chart-line-variant </v-icon>
                stats
              </v-btn>
            </v-btn-toggle>
          </div>
          <div class="">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            />
          </div>
        </div>
      </div>
      <div class="row">
        <v-data-table
          :headers="tableHeaders"
          :items="tableData"
          :items-per-page="25"
          class="UsersTable"
          :loading="loading"
          :search="search"
          show-select
          :footer-props="{
            itemsPerPageOptions: rowsPerPageItems,
          }"
          @input="rows => (selectedRows = rows)"
        >
          <template #header.action>
            <div class="w-100 text-right">Actions</div>
          </template>
          <template #item.status="{ item }">
            <v-chip :color="getColor(item.status)" class="mr-2" dark small>
              {{ item.status }}
            </v-chip>
          </template>
          <template #item.tags="{ item }">
            <v-chip
              v-for="tag in item.tags"
              :key="tag.id"
              :color="tag.color"
              class="mr-2"
              dark
              small
            >
              {{ tag.name }}
            </v-chip>
          </template>
          <template #item.action="{ item }">
            <div class="d-flex justify-content-end">
              <v-btn icon @click="showStats(item)">
                <v-icon> mdi-eye-check </v-icon>
              </v-btn>
              <template v-if="!item.edit">
                <v-btn icon class="mr-2" @click="editItem(item)">
                  <v-icon> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <template v-else>
                <v-btn icon class="mr-2" @click="editItem(item)">
                  <v-icon> mdi-close </v-icon>
                </v-btn>
              </template>
              <v-btn icon @click="deleteItem(item)">
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </div>
    </div>
    <AddEmailDialog
      v-model="dialogs.addEmail.visible"
      :error="dialogs.addEmail.errors"
      :busy="dialogBusy"
      :limit-reached="limitReached"
      @submit="createAddress"
      @close="dialogs.addEmail.visible = false"
    />
    <EditEmailDialog
      v-model="dialogs.editEmail.visible"
      :address="selectedEditAddress"
      :error="dialogs.editEmail.errors"
      :busy="dialogBusy"
      :limit-reached="limitReached"
      @submit="editAddress"
      @close="
        dialogs.editEmail.visible = false;
        dialogs.editEmail.addressId = null;
      "
    />
    <ShowEmailStatsDialog
      v-model="dialogs.showStats.visible"
      :address="selectedShowStatsAddress"
      @close="
        dialogs.showStats.visible = false;
        dialogs.showStats.addressId = null;
      "
    />
    <ManageTagsDialog
      v-model="dialogs.manageTags.visible"
      :error="dialogs.manageTags.errors"
      :busy="dialogBusy"
      @close="dialogs.manageTags.visible = false"
    />
    <UploadMailingListDialog
      v-model="dialogs.uploadCsv.visible"
      :error="dialogs.uploadCsv.errors"
      :busy="dialogBusy"
      @close="dialogs.uploadCsv.visible = false"
      @upload="uploadContacts"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import StatsRow from '~/components/molecules/StatsRow';
import AddEmailDialog from '~/components/organisms/AddEmailDialog';
import EditEmailDialog from '~/components/organisms/EditEmailDialog';
import ManageTagsDialog from '~/components/organisms/ManageTagsDialog';
import ShowEmailStatsDialog from '~/components/organisms/ShowEmailStatsDialog';
import UploadMailingListDialog from '~/components/organisms/UploadMailingListDialog';
import PageHeader from '~/components/organisms/PageHeader';
import ListsMixin from '~/mixins/lists';
import RolesMixin from '~/mixins/auth';
import CsvMixin from '~/mixins/csv';

export default {
  components: {
    AddEmailDialog,
    EditEmailDialog,
    ManageTagsDialog,
    UploadMailingListDialog,
    PageHeader,
    ShowEmailStatsDialog,
    StatsRow,
  },
  mixins: [ListsMixin, CsvMixin, RolesMixin],
  data() {
    return {
      dialogs: {
        addEmail: {
          visible: false,
          errors: null,
        },
        editEmail: {
          visible: false,
          errors: null,
          addressId: null,
        },
        showStats: {
          visible: false,
          addressId: null,
        },
        manageTags: {
          visible: false,
          errors: null,
        },
        uploadCsv: {
          visible: false,
          errors: null,
        },
      },
      dialogBusy: false,
      form: {
        valid: false,
        rules: {
          given_name: [v => !!v || 'Name is required'],
          family_name: [v => !!v || 'Family name is required'],
          email: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
        },
        data: {
          given_name: null,
          family_name: null,
          email: null,
        },
      },
      selectedViewIndex: null,
      localMailingList: [],
      search: '',
      selectedRows: [],
      deleting: false,
      rowsPerPageItems: [20, 50, 100, 200],
    };
  },
  computed: {
    ...mapState('mailingList', {
      tags: 'tags',
      totalsAll: 'mailingListTotals',
    }),
    ...mapGetters('campaigns', {
      campaigns: 'campaignsArray',
    }),
    ...mapGetters('mailingList', {
      mailingList: 'mailingListArray',
    }),
    tableHeaders() {
      const headers = [
        { text: 'Email', value: 'email' },
        { text: 'Given Name', value: 'given_name' },
        { text: 'Family Name', value: 'family_name' },
      ];
      if (this.selectedViewIndex === 0) {
        //default view
        headers.push(
          { text: 'Status', value: 'status' },
          {
            text: 'List Tag',
            value: 'tags',
            sort: (a, b) => {
              var textA = a[0].name.toUpperCase();
              var textB = b[0].name.toUpperCase();
              return textA < textB ? -1 : textA > textB ? 1 : 0;
            },
          },
        );
      }
      if (this.selectedViewIndex === 1) {
        //stats view
        headers.push(
          { text: 'Sent', value: 'sent_total' },
          { text: 'Delivered', value: 'delivered_total' },
          { text: 'Read', value: 'read_total' },
          { text: 'Clicked', value: 'clicks_total' },
        );
      }

      headers.push({
        text: 'Actions',
        value: 'action',
        sortable: false,
        align: 'right',
      });

      return headers;
    },
    tableData() {
      if (!this.localMailingList) return [];
      return this.localMailingList.map(addr => {
        const mappedTags = this.tags.filter(tag => addr.tags.includes(tag.id));

        const tableRow = {
          ...addr,
          tags: mappedTags,
          id: addr.email,
          edit: addr.edit || false,
          status: addr.status,
          sent_total: addr.totals.sent,
          delivered_total: `${addr.totals_percent.delivered}% (${addr.totals.delivered})`,
          read_total: `${addr.totals_percent.read}% (${addr.totals.read})`,
          clicks_total: `${addr.totals_percent.clicks_unique}% (${addr.totals.clicks_unique}/${addr.totals.clicks})`,
        };

        return tableRow;
      });
    },
    selectedEditAddress() {
      const found = this.tableData.find(
        ml => ml.email === this.dialogs.editEmail.addressId,
      );
      if (!found) return {};
      return {
        ...found,
        tags: found.tags.length ? found.tags[0] : '',
      };
    },
    selectedShowStatsAddress() {
      const found = this.tableData.find(
        ml => ml.email === this.dialogs.showStats.addressId,
      );
      if (!found) return {};
      return {
        ...found,
      };
    },
    myAttrs() {
      return this.$auth.user.attributes;
    },
    limitReached() {
      return this.myAttrs.mailing_list_limit <= this.totals.ok;
    },
    totals() {
      return this.totalsAll.totals;
    },
    totalsPercent() {
      return this.totalsAll.totals_percent;
    },
  },
  watch: {
    mailingList: {
      handler() {
        this.localMailingList = [...this.mailingList];
      },
    },
  },
  created() {
    this.loadMailingList();
    this.$store.dispatch('mailingList/getTags');
  },
  methods: {
    loadMailingList() {
      this.$store.dispatch('mailingList/getMailingList');
    },
    createAddress(data) {
      this.submitAddressForm(data);
    },
    editAddress(data) {
      this.submitAddressForm(data, 'put');
    },
    async submitAddressForm(data, method = 'post') {
      try {
        this.dialogBusy = true;
        const uriAddon =
          method === 'post'
            ? ''
            : `/${encodeURI(this.selectedEditAddress.email)}`;
        await this.$axios[`${method}`]('/mailing-list' + uriAddon, data);
        this.loadMailingList();
        this.dialogs.addEmail.visible = false;
        this.dialogs.editEmail.visible = false;
        this.$snack.show('Saved successfully!', 'success');
      } catch (error) {
        switch (error.code) {
          case 'AlreadyExists':
            this.$snack.show('Email already exists!', 'error');
            break;

          default:
            break;
        }
      }
      this.dialogBusy = false;
    },
    async uploadContacts({ contacts, status }) {
      this.dialogBusy = true;

      if (status === 'ok') {
        if (
          this.totals.totals &&
          this.myAttrs.mailing_list_limit <
            this.totals.totals.ok + contacts.length
        ) {
          this.$snack.show(
            'Contact limit reached, inquire increase.',
            'danger',
          );
          return;
        }
      }

      const { failed } = await this.$axios.$post('/mailing-list', {
        contacts,
      });

      if (failed && failed.length) {
        this.$snack.show(
          'Some contacts failed to import, possible because of duplicates',
          'error',
        );
      } else {
        this.$snack.show('Import successful', 'success');
      }
      this.dialogs.uploadCsv.visible = false;
      this.loadMailingList();
      this.dialogBusy = false;
    },
    editItem(item) {
      this.dialogs.editEmail.addressId = item.id;
      this.dialogs.editEmail.visible = true;
    },
    showStats(item) {
      this.dialogs.showStats.addressId = item.id;
      this.dialogs.showStats.visible = true;
    },
    async deleteItem(item) {
      try {
        await this.$store.dispatch('mailingList/deleteAddress', item.email);
        this.$snack.show(`Contact ${item.email} deleted`, 'success');
        this.loadMailingList();
      } catch (error) {
        this.$snack.show(`Failed to delete ${item.email}`, 'danger');
      }
    },
    async deleteMany() {
      this.deleting = true;
      try {
        if (this.selectedRows.length)
          await this.$store.dispatch(
            'mailingList/deleteMany',
            this.selectedRows.map(sr => sr.id),
          );

        this.selectedRows = [];
        this.loadMailingList();
      } catch (error) {
        this.$snack.show('Deletion failure', 'danger');
      }
      this.deleting = false;
    },
    exportCsv() {
      const contacts = this.localMailingList.map(lml => {
        const tags = lml.tags
          ?.map(t => this.tags?.find(e => e.id === t)?.name)
          ?.join(', ');

        return {
          email: lml.email || '',
          given_name: lml.given_name || '',
          family_name: lml.family_name || '',
          tags: tags || '',
          status: lml.status || '',
        };
      });
      this.csvExport(contacts, 'mailing-list-export.csv');
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

<style lang="scss">
.UsersTable {
  width: 100%;
}
</style>
