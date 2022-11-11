<template>
  <div class="d-flex mx-5 flex-col">
    <v-text-field
      v-model="search"
      class="w-42 mb-5 ml-auto"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    />
    <div class="container-fluid elevation-1 white">
      <div class="row">
        <v-data-table
          :headers="tableHeaders"
          :items="tableData"
          :items-per-page="getItemsPerPage"
          class="UsersTable"
          :loading="isLoading"
          hide-default-footer
        >
          <div class="w-100 text-right">Actions</div>
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
            {{ item.created_at | toZonedTime(item.timezone) }}
          </template>
          <template #item.invited_at="{ item }">
            {{ item.invited_at | toZonedTime(item.timezone) }}
          </template>
          <!-- <template v-slot:item.email="{item}">
            <div class="">
              <v-icon :color="item.ses_verified ? 'success': 'error'">
                mdi-{{ item.ses_verified ? 'check' : 'close' }}-circle
              </v-icon>
              {{ item.email }}
            </div>
          </template> -->
          <template #item.campaigns_enabled="{ item }">
            <v-icon :color="item.campaigns_enabled ? 'success' : 'error'">
              mdi-{{ item.campaigns_enabled ? 'check' : 'close' }}-circle
            </v-icon>
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
                  <v-btn icon class="mr-2" v-on="on">
                    <v-icon> mdi-dots-horizontal </v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item
                    v-for="(m, $index) in demoMenuItems(item)"
                    :key="$index"
                    @click="action(m.click, item)"
                  >
                    <v-list-item-title>
                      <v-icon left> mdi-{{ m.icon }} </v-icon>
                      {{ m.title }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    v-if="item.status == 'FORCE_CHANGE_PASSWORD'"
                    @click="inviteDemo(item)"
                  >
                    <v-list-item-title>
                      <v-icon left> mdi-email-send </v-icon>
                      invite demo
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    v-if="item.status == 'FORCE_CHANGE_PASSWORD'"
                    @click="invite(item)"
                  >
                    <v-list-item-title>
                      <v-icon left> mdi-email-send </v-icon>
                      invite
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="promoteToCustomer(item)">
                    <v-list-item-title>
                      <v-icon left> mdi-email-send </v-icon>
                      make customer
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
      :total="getTotalCount"
      :pages="getPages"
      :page="page"
      :limit="limit"
      @fetchData="fetchData"
      @handleLimit="handleLimit"
    />
    <AddUserDialog
      v-model="dialogs.addUser.visible"
      :error="dialogs.addUser.error"
      :busy="dialogBusy"
      @submit="createUser"
      @close="closeDialog"
    />
    <EditUserDialog
      v-model="dialogs.editUser.visible"
      :user-id="dialogs.editUser.userId"
      :error="dialogs.editUser.error"
      :busy="dialogBusy"
      @submit="updateUser"
      @close="closeDialog"
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
      :user-id="dialogs.deleteUser.userId"
      :error="dialogs.deleteUser.error"
      :busy="dialogBusy"
      @submit="deleteUser"
      @close="closeDialog"
    />
    <EditUserProductsDialog
      v-model="dialogs.editUserProducts.visible"
      :user-id="dialogs.editUserProducts.userId"
      :busy="dialogBusy"
      user-type="demo"
      @submit="syncUserProducts"
      @close="closeDialog"
    />
    <!-- <EditUserDialog
      v-model="dialogs.editUser"
      @edit="editUser"
      @close="dialogs.editUser = false"
    /> -->
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
      demo: true,
    };
  },

  computed: {
    ...mapState({
      users: state => state.users.demoUsers,
    }),
    isLoading() {
      return this.$store.state.users.isLoading;
    },
    getUsersCount() {
      return this.$store.state.users.demoUsers
        ? this.$store.state.users.demoUsers.length
        : 0;
    },
    getTotalCount() {
      return this.$store.state.users.demoUsersCount
        ? this.$store.state.users.demoUsersCount
        : 0;
    },
    getPages() {
      return this.$store.state.users.demoUsersNextToken
        ? this.$store.state.users.demoUsersNextToken.length
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
    loadUsers() {
      this.fetchData(1, true);
    },
    handleLimit(limit) {
      this.limit = limit;
    },
    fetchData(page, init) {
      this.page = page;

      const index = page - 1;

      const nextToken = this.$store.state.users.demoUsersNextToken[index];

      const filter = this.search.toLocaleLowerCase();

      this.$store.dispatch({
        init,
        page,
        filter,
        type: 'users/getDemoUsers',
        nextToken: nextToken ? JSON.stringify(nextToken) : null,
        userType: 'demo',
        limit: this.limit === 'All' ? null : this.limit,
      });

      if (filter) return;

      this.$store.dispatch({ type: 'users/getDemoUsersCount' });
    },
  },
};
</script>

<style lang="scss">
.UsersTable {
  width: 100%;
}
</style>
