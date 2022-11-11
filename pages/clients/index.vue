<template>
  <div class="d-flex mx-5 flex-col">
    <div class="d-flex mb-5 items-center">
      <v-tabs v-model="view" color="primary" class="mr-auto">
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>
      <v-btn
        color="primary"
        class="fixed right-0 mr-5"
        @click="dialogs.addUser.visible = true"
      >
        <v-icon left> mdi-account-plus</v-icon>
        Add Client
      </v-btn>
      <v-text-field
        v-model="search"
        class="w-42 mb-2"
        append-icon="mdi-magnify"
        hide-details
        label="Search"
        single-line
      />
    </div>
    <div class="container-fluid elevation-1 white">
      <div class="row">
        <v-data-table
          :headers="tableHeaders"
          :items="tableData"
          :items-per-page="getItemsPerPage"
          :loading="isLoading"
          class="w-full"
          hide-default-footer
        >
          <template #header.action="{}">
            <div class="w-100 text-right">Actions</div>
          </template>
          <template #item.forced_password_reset="{ item }">
            <v-icon :color="!item.forced_password_reset ? 'success' : 'error'">
              mdi-{{ !item.forced_password_reset ? 'check' : 'close' }}-circle
            </v-icon>
          </template>
          <template #item.ses_verified="{ item }">
            <v-icon :color="item.ses_verified ? 'success' : 'error'">
              mdi-{{ item.ses_verified ? 'check' : 'close' }}-circle
            </v-icon>
          </template>
          <template #item.enabled="{ item }">
            <v-icon :color="item.enabled ? 'success' : 'error'">
              mdi-{{ item.enabled ? 'check' : 'close' }}-circle
            </v-icon>
          </template>
          <template #item.created_at="{ item }">
            {{ item.created_at | datetime(item.timezone) }}
          </template>
          <template #item.updated_at="{ item }">
            {{ item.updated_at | datetime(item.timezone) }}
          </template>
          <template #item.account_status_updated_at="{ item }">
            {{ item.account_status_updated_at | datetime(item.timezone) }}
          </template>
          <template #item.campaigns_enabled="{ item }">
            <v-icon :color="item.campaigns_enabled ? 'success' : 'error'">
              mdi-{{ item.campaigns_enabled ? 'check' : 'close' }}-circle
            </v-icon>
          </template>
          <template #item.last_campaign_status="{ item }">
            <div v-if="item.last_campaign_status">
              <v-chip :color="chipColor(item.last_campaign_status)" x-small>
                {{ item.last_campaign_status }}
              </v-chip>
              <template v-if="item.last_campaign_status === 'scheduled'">
                {{ item.scheduled | toZonedTime(item.timezone) }}
              </template>
            </div>
          </template>
          <template #item.mailing_list_limit="{ item }">
            {{ item.mailing_list_limit }} / {{ item.mailing_list_usage }}
          </template>
          <template #item.allows="{ item }">
            <div class="d-flex children-margin">
              <v-icon v-if="item.allowsNewsletter" color="orange">
                mdi-email-newsletter
              </v-icon>
              <v-icon v-if="item.allowsReports" color="blue">
                mdi-chart-bar
              </v-icon>
            </div>
          </template>
          <template #item.action="{ item }">
            <div class="d-flex justify-content-end">
              <v-menu v-model="tableMenus.actions[item.id]" left offset-y>
                <template #activator="{ on }">
                  <v-btn class="mr-2" icon v-on="on">
                    <v-icon> mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item
                    v-for="(m, $index) in clientMenuItems(item)"
                    :key="$index"
                    @click="action(m.click, item)"
                  >
                    <v-list-item-title>
                      <v-icon left> mdi-{{ m.icon }}</v-icon>
                      {{ m.title }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    v-if="item.status == 'FORCE_CHANGE_PASSWORD'"
                    @click="invite(item)"
                  >
                    <v-list-item-title>
                      <v-icon left>mdi-email-send</v-icon>
                      invite
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-data-table>
      </div>
    </div>
    <Pagination
      :items="getUsersCount"
      :limit="limit"
      :page="page"
      :pages="getPages"
      :total="getTotalCount"
      @fetchData="fetchData"
      @handleLimit="handleLimit"
    />
    <AddUserDialog
      v-model="dialogs.addUser.visible"
      :busy="dialogBusy"
      :error="dialogs.addUser.error"
      @close="closeDialog"
      @submit="createUser"
    />
    <EditUserDialog
      v-model="dialogs.editUser.visible"
      :busy="dialogBusy"
      :error="dialogs.editUser.error"
      :user-id="dialogs.editUser.userId"
      @close="closeDialog"
      @submit="updateUser"
    />
    <UserStatisticsDialog
      v-model="dialogs.userStatistics.visible"
      :busy="dialogBusy"
      :error="dialogs.userStatistics.error"
      :user-id="dialogs.userStatistics.userId"
      @close="closeUserStatisticsDialog"
    />
    <DeleteUserDialog
      v-model="dialogs.deleteUser.visible"
      :busy="dialogBusy"
      :error="dialogs.deleteUser.error"
      :user-id="dialogs.deleteUser.userId"
      @close="closeDialog"
      @submit="deleteUser"
    />
    <EditUserProductsDialog
      v-model="dialogs.editUserProducts.visible"
      :busy="dialogBusy"
      :user-id="dialogs.editUserProducts.userId"
      @close="closeDialog"
      @submit="syncUserProducts"
    />
    <CreateInvoiceDialog
      v-model="dialogs.createInvoice.visible"
      :busy="dialogBusy"
      :error="dialogs.createInvoice.error"
      :user-id="dialogs.createInvoice.userId"
      @close="closeCreateInvoiceDialog"
      @submit="createInvoice"
    />
    <CreateInvoiceRecurringDialog
      v-model="dialogs.CreateInvoiceRecurring.visible"
      :busy="dialogBusy"
      :error="dialogs.CreateInvoiceRecurring.error"
      :user-id="dialogs.CreateInvoiceRecurring.userId"
      @close="closeCreateInvoiceRecurringDialog"
      @submit="CreateInvoiceRecurring"
    />
  </div>
</template>

<script>
import UsersPagesMixin from '~/mixins/usersPagesMixin';
import { mapState } from 'vuex';
import Pagination from '~/components/molecules/Pagination';
import _debounce from 'lodash/debounce';

export default {
  components: {
    Pagination,
  },

  mixins: [UsersPagesMixin],

  data() {
    return {
      page: 1,
      limit: 10,
      items: ['Default', 'Campaign', 'Date'],
    };
  },

  computed: {
    ...mapState({
      users: state => state.users.users,
    }),
    isLoading() {
      return this.$store.state.users.isLoading;
    },
    getUsersCount() {
      return this.$store.state.users.users
        ? this.$store.state.users.users.length
        : 0;
    },
    getTotalCount() {
      return this.$store.state.users.usersCount
        ? this.$store.state.users.usersCount
        : 0;
    },
    getPages() {
      return this.$store.state.users.usersNextToken
        ? this.$store.state.users.usersNextToken.length
        : 1;
    },
    getItemsPerPage() {
      if (this.limit === 'All') return 1000;

      return this.limit;
    },
  },

  watch: {
    search: _debounce(function () {
      this.fetchData(1, true);
    }, 1000),
    limit: function () {
      this.fetchData(1, true);
    },
  },

  methods: {
    closeDialog() {
      this.dialogs.editUser.visible = false;
      this.dialogs.editUser.userId = null;
    },
    closeUserStatisticsDialog() {
      this.dialogs.userStatistics.visible = false;
      this.dialogs.userStatistics.userId = null;
    },
    closeCreateInvoiceDialog() {
      this.dialogs.createInvoice.visible = false;
      this.dialogs.createInvoice.userId = null;
    },
    closeCreateInvoiceRecurringDialog() {
      this.dialogs.CreateInvoiceRecurring.visible = false;
      this.dialogs.CreateInvoiceRecurring.userId = null;
    },
    loadUsers() {
      this.fetchData(1, true);
    },
    handleLimit(limit) {
      this.limit = limit;
    },
    fetchData(page, init) {
      this.page = page;

      const index = page - 1;
      const nextToken = this.$store.state.users.usersNextToken[index];
      const filter = this.search.toLocaleLowerCase();

      this.$store.dispatch({
        init,
        page,
        filter,
        nextToken: nextToken ? JSON.stringify(nextToken) : null,
        type: 'users/getUsers',
        limit: this.limit === 'All' ? null : this.limit,
      });

      if (filter) return;

      this.$store.dispatch({ type: 'users/getUsersCount' });
    },
  },
};
</script>
