import { mapState } from 'vuex';
import AddUserDialog from '~/components/organisms/AddUserDialog';
import EditUserDialog from '~/components/organisms/EditUserDialog';
import CreateInvoiceDialog from '~/components/organisms/CreateInvoiceDialog';
import CreateInvoiceRecurringDialog from '~/components/organisms/CreateInvoiceRecurringDialog';
import DeleteUserDialog from '~/components/organisms/DeleteUserDialog';
import EditUserProductsDialog from '~/components/organisms/EditUserProductsDialog';
import PageHeader from '~/components/organisms/PageHeader';
import ListsMixin from '~/mixins/lists';
import UserStatisticsDialog from '~/components/organisms/UserStatisticsDialog';
import endpoints from '~/constants/endpoints';

export default {
  components: {
    AddUserDialog,
    EditUserDialog,
    CreateInvoiceDialog,
    CreateInvoiceRecurringDialog,
    UserStatisticsDialog,
    DeleteUserDialog,
    EditUserProductsDialog,
    PageHeader,
  },
  mixins: [ListsMixin],
  data() {
    return {
      dialogs: {
        addUser: {
          visible: false,
          errors: null,
        },
        editUser: {
          userId: null,
          visible: false,
          error: null,
        },
        deleteUser: {
          userId: null,
          visible: false,
          error: null,
        },
        editUserProducts: {
          userId: null,
          visible: false,
        },
        userStatistics: {
          userId: null,
          visible: false,
          error: null,
        },
        createInvoice: {
          userId: null,
          visible: false,
          error: null,
        },
        CreateInvoiceRecurring: {
          userId: null,
          visible: false,
          error: null,
        },
      },
      impersonationLoading: false,
      dialogBusy: false,
      search: '',
      view: 'default',
      demo: false,
    };
  },
  computed: {
    ...mapState({
      users: state => state.users.users,
      cities: state => state.config.cities,
    }),
    tableHeaders() {
      const fields = [
        { text: 'Name', value: 'full_name', width: '250px' },
        { text: 'City', value: 'city_name' },
        { text: 'Account Email', value: 'email' },
      ];

      if (this.view === 0)
        fields.push(
          ...[
            { text: 'Activated', value: 'forced_password_reset' },
            { text: 'Email Verified', value: 'ses_verified' },
            { text: 'Account Enabled', value: 'enabled' },
            { text: 'Products', value: 'allows' },
          ],
        );
      if (this.view === 1)
        fields.push(
          ...[
            { text: 'Campaign publishing', value: 'campaigns_enabled' },
            { text: 'Last Campaign', value: 'last_campaign_name' },
            { text: 'Status', value: 'last_campaign_status' },
            { text: 'Sent', value: 'delivery_sent', width: '100px' },
            { text: 'Failed', value: 'delivery_failed', width: '100px' },
          ],
        );

      if (this.view === 2)
        fields.push(
          ...[
            { text: 'Created At (demo)', value: 'created_at' },
            { text: 'Updated At', value: 'updated_at' },
            {
              text: 'Account Enabled / Disabled',
              value: 'account_status_updated_at',
            },
            { text: 'Products', value: 'allows' },
          ],
        );

      if (this.demo) {
        fields.push({ text: 'Registered', value: 'created_at' });
        fields.push({ text: 'Invited', value: 'invited_at' });
      }

      fields.push({
        text: 'Mailing List Limit',
        value: 'mailing_list_limit',
        width: '100px',
      });
      fields.push({
        text: 'Actions',
        value: 'action',
        sortable: false,
        align: 'right',
      });
      return fields;
    },
    tableData() {
      if (!this.users) return [];
      return this.users.map(user => {
        const city = this.cities[user.attributes.city_id];
        let tableRow = {
          id: user.attributes.sub,
          full_name:
            user.attributes.given_name + ' ' + user.attributes.family_name,
          status: user.status,
          email: user.attributes.email,
          forced_password_reset: user.status === 'FORCE_CHANGE_PASSWORD',
          ses_verified: user.email_verified,
          city_name: user.attributes.city_name,
          timezone: city ? city.attributes.timezone : undefined,
          enabled: user.enabled,
          campaigns_enabled: user.attributes.campaigns_enabled,
          created_at: user.createdAt,
          updated_at: user.updatedAt,
          account_status_updated_at: user.account_status_updated_at,
          invited_at: user.attributes.invited_at,
          mailing_list_limit: user.attributes.mailing_list_limit,
          mailing_list_usage: user.attributes.mailing_list_usage,
          allowsNewsletter: user.allows.includes('newsletter'),
          allowsReports: user.allows.includes('reports'),
        };
        if (user.last_campaign) {
          tableRow = {
            ...tableRow,
            last_campaign_name: user.last_campaign.campaign_name,
            last_campaign_status: user.last_campaign.status,
            delivery_sent: user.last_campaign.delivery_stats.sent,
            delivery_failed: user.last_campaign.delivery_stats.bounce,
            scheduled: user.last_campaign.scheduled,
          };
        }
        return tableRow;
      });
    },
  },
  created() {
    this.loadUsers();
    this.$store.dispatch('config/loadCities', {});
  },
  methods: {
    async createUser(data) {
      try {
        this.dialogBusy = true;
        await this.$axios.$post('/users', data);
        await this.loadUsers();
        this.dialogs.addUser.visible = false;
        this.$snack.show('User added successfully!', 'success');
        this.dialogBusy = false;
      } catch (error) {
        this.dialogBusy = false;
        this.$snack.show('Failed to create user', 'danger');
      }
    },

    async updateUser(data) {
      try {
        this.dialogBusy = true;
        await this.$axios.$patch(`/users/${data.userId}`, data);
        await this.loadUsers();
        this.dialogs.editUser.visible = false;
        this.$snack.show('Saved successfully!', 'success');
      } catch (error) {
        this.dialogBusy = false;
        this.$snack.show('Failed to upadate the user', 'danger');
      }
    },
    async createInvoice(data) {
      try {
        this.dialogBusy = true;
        await this.$axios.$post(endpoints.payments.invoice, data);
        this.$snack.show('Invoice created successfully', 'success');
        this.error = '';
      } catch (error) {
        this.$snack.show('Invoice creation failed', 'error');
      } finally {
        this.dialogs.createInvoice.visible = false;
        this.dialogBusy = false;
      }
    },
    async CreateInvoiceRecurring(data) {
      try {
        this.dialogBusy = true;
        await this.$axios.$post(endpoints.payments.recurringInvoice, data);
        this.$snack.show('Invoice created successfully', 'success');
        this.error = '';
      } catch (error) {
        this.$snack.show('Invoice creation failed', 'error');
      } finally {
        this.dialogs.CreateInvoiceRecurring.visible = false;
        this.dialogBusy = false;
      }
    },
    async syncUserProducts(data) {
      try {
        this.dialogBusy = true;
        await this.$axios.$post(`/users/${data.userId}/products`, data);
        await this.loadUsers();
        this.dialogs.editUserProducts.visible = false;
        this.$snack.show('Saved successfully!', 'success');
        this.dialogBusy = false;
      } catch (error) {
        this.dialogBusy = false;
        this.$snack.show('Update failed', 'error');
      }
    },
    async toggleAccountEnabled(item) {
      try {
        await this.$axios.$post(`/users/${item.id}/status/account`, {
          value: !item.enabled,
        });
        await this.loadUsers();
        this.$snack.show('Saved successfully!', 'success');
      } catch (error) {
        this.$snack.show('Update failed', 'error');
      }
    },
    async toggleCampaignsEnabled(item) {
      try {
        await this.$axios.$post(`/users/${item.id}/status/publish`, {
          value: !item.campaigns_enabled,
        });
        await this.loadUsers();
        this.$snack.show('Saved successfully!', 'success');
      } catch (error) {
        this.$snack.show('Update failed', 'error');
      }
    },
    async deleteUser(userId) {
      try {
        // this.dialogBusy = true;
        await this.$axios.$delete(`/users/${userId}`);
        await this.loadUsers();
        this.dialogs.deleteUser.visible = false;
        this.$snack.show('Deleted successfully!', 'success');
      } catch (error) {
        this.$snack.show('Deletion failed', 'error');
      }
      this.dialogBusy = false;
    },
    editItem(item) {
      this.dialogs.editUser.userId = item.id;
      this.dialogs.editUser.visible = true;
    },

    editUserProducts(item) {
      this.dialogs.editUserProducts.userId = item.id;
      this.dialogs.editUserProducts.visible = true;
    },

    userStatistics(item) {
      this.dialogs.userStatistics.userId = item.id;
      this.dialogs.userStatistics.visible = true;
    },

    openInvoiceCreation(item) {
      this.dialogs.createInvoice.userId = item.id;
      this.dialogs.createInvoice.visible = true;
    },
    openInvoiceCreationRecurring(item) {
      this.dialogs.CreateInvoiceRecurring.userId = item.id;
      this.dialogs.CreateInvoiceRecurring.visible = true;
    },

    deleteItem(item) {
      this.dialogs.deleteUser.userId = item.id;
      this.dialogs.deleteUser.visible = true;
    },

    action(actionFcnName, item) {
      this[actionFcnName](item);
    },

    async impersonate(item) {
      this.$store.dispatch('authLocal/activateImpersonation', item.id);
    },
    async inviteDemo(item) {
      try {
        await this.$axios.$post(`/users/${item.id}/inviteDemo`);
        this.$snack.show('Demo Invitation sent!', 'success');
      } catch (error) {
        this.$snack.show('Demo Invitation failed', 'error');
      }
    },
    async invite(item) {
      try {
        await this.$axios.$post(`/users/${item.id}/invite`);
        this.$snack.show('Invitation sent!', 'success');
      } catch (error) {
        this.$snack.show('Invitation failed', 'error');
      }
    },
    async promoteToCustomer(item) {
      try {
        await this.$axios.$post(`/users/${item.id}/undemo`);
        await this.loadUsers();
        this.$snack.show('Promoted to customer', 'success');
      } catch (error) {
        this.$snack.show('Failed', 'error');
      }
    },
    menuItems(item) {
      return [
        {
          icon: 'account-switch',
          title: 'impersonate',
          click: 'impersonate',
        },
        {
          icon: 'pencil',
          title: 'edit',
          click: 'editItem',
        },
        {
          icon: 'currency-usd',
          title: 'assign products',
          click: 'editUserProducts',
        },

        {
          icon: 'file-chart',
          title: 'statistics',
          click: 'userStatistics',
        },
        {
          icon: `account-${item.enabled ? 'cancel' : 'check'}`,
          title: (item.enabled ? 'disable' : 'enable') + ' account',
          click: 'toggleAccountEnabled',
        },
        {
          icon: `calendar-${item.campaigns_enabled ? 'remove' : 'check'}`,
          title: (item.campaigns_enabled ? 'disable' : 'enable') + ' campaigns',
          click: 'toggleCampaignsEnabled',
        },
        {
          icon: 'delete',
          title: 'delete',
          click: 'deleteItem',
        },
      ];
    },
    clientMenuItems(item) {
      const clientItems = this.menuItems(item);

      clientItems.splice(3, 0, {
        icon: 'receipt-text-plus-outline',
        title: 'create invoice',
        click: 'openInvoiceCreation',
      });

      return clientItems;
    },
    demoMenuItems(item) {
      const demoItems = this.menuItems(item);

      return demoItems;
    },
    chipColor(status) {
      switch (status) {
        case 'scheduled':
          return 'warning';

        case 'draft':
          return 'info';

        case 'sent':
          return 'success';

        default:
          break;
      }
    },
  },
};
