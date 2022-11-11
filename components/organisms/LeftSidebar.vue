<template>
  <div
    class="d-flex w-64 flex-col items-center overflow-y-auto overflow-x-hidden bg-mineShaft px-5 pt-6 pb-8"
  >
    <div class="min-h-8 h-8 w-36">
      <logo-full />
    </div>
    <div class="mt-8 w-full">
      <NavTab
        v-for="{ icon, title, href, subItems } in upperNavItems"
        :key="title"
        :href="href"
        :icon="icon"
        :is-active="isNavItemActive(title)"
        :is-sub-item-active="routePath.includes(href)"
        :sub-items="subItems"
        :title="title"
      />
    </div>
    <div class="mt-auto w-full">
      <NavTab
        v-if="hasNotifications"
        title="Notifications"
        href="/notifications"
        icon="Settings"
        :is-active="routePath.includes('notifications')"
      />
      <NavTab
        v-for="item in bottomNavItems"
        :key="item.title"
        :title="item.title"
        :href="item.href"
        :icon="item.icon"
        :is-active="routePath.includes(item.title.toLocaleLowerCase())"
        :sub-items="item.subItems"
      />
      <NavTab
        title="Logout"
        icon="Logout"
        event="logout"
        @logout="handleLogout"
      />
    </div>
  </div>
</template>

<script>
import createLink from '~/helpers/create-link';

import NavTab from '~/components/molecules/NavTab';
import LogoFull from '~/components/svgIcons/LogoFull';

import RolesMixin from '~/mixins/auth';
import NotificationsMixin from '~/mixins/notificationMixin';

export default {
  components: {
    LogoFull,
    NavTab,
  },

  mixins: [RolesMixin, NotificationsMixin],

  computed: {
    routePath() {
      return this.$route.path;
    },

    impersonatedId() {
      return this.$store.state.authLocal.impersonatedId;
    },

    hasReports() {
      return this.me.allows.includes('reports');
    },

    hasNewsletter() {
      return this.me.allows.includes('newsletter');
    },

    upperNavItems() {
      const clients = {
        title: 'Clients',
        href: '/clients',
        icon: 'Clients',
      };

      const demo = {
        title: 'Demo',
        href: '/demo',
        icon: 'Demo',
      };

      const dataEntry = {
        title: 'Data entry',
        href: '/data-entry',
        icon: 'MarketReports',
      };

      const newsletter = {
        title: 'Newsletter',
        href: '/newsletter',
        icon: 'Newsletter',
      };

      const marketReports = {
        title: 'Market reports',
        href: '/market-reports',
        icon: 'MarketReports',
      };

      let userItems = [];
      const adminItems = [clients, demo, newsletter, marketReports, dataEntry];

      if (this.isUser && this.hasNewsletter) {
        userItems.push(newsletter);
      }

      if (this.isUser && this.hasReports) {
        userItems.push(marketReports);
      }

      return this.isUser ? userItems : adminItems;
    },

    bottomNavItems() {
      const notifications = {
        title: 'Notifications',
        href: '/notifications',
        icon: 'Settings',
      };

      const statistics = {
        title: 'Statistics',
        href: '/statistics',
        icon: 'Settings',
      };

      const adminSettingsSubItems = [
        {
          title: 'Newsletter',
          href: '/settings/newsletter',
        },
        {
          title: 'Market reports',
          href: '/settings/market-reports',
        },
        {
          title: 'Cities',
          href: '/settings/cities',
        },
        {
          title: 'Demo',
          href: '/settings/demo',
        },
        {
          title: 'Account',
          href: '/settings/account',
        },
        {
          title: 'Products',
          href: '/settings/products',
        },
        {
          title: 'Users',
          href: '/settings/users',
        },
      ];

      const newsletter = {
        title: 'Newsletter',
        href: '/settings/client-newsletter',
      };

      const marketReports = {
        title: 'Market Reports',
        href: '/settings/market-reports',
      };

      let userSettingsSubItems = [
        {
          title: 'Billing',
          href: '/settings/billing',
        },
      ];

      if (this.hasReports) {
        userSettingsSubItems.unshift(marketReports);
      }

      if (this.hasNewsletter) {
        userSettingsSubItems.unshift(newsletter);
      }

      const clientSettingsItemTo =
        this.isUser && this.hasReports
          ? '/settings/market-reports'
          : '/settings/client-newsletter';

      const settings = {
        title: 'Settings',
        href: clientSettingsItemTo,
        icon: 'Settings',
        subItems: this.isUser ? userSettingsSubItems : adminSettingsSubItems,
      };

      const adminItems = [statistics, settings];
      const userItems = [settings];

      return this.isUser ? userItems : adminItems;
    },
  },

  methods: {
    handleLogout() {
      if (this.impersonatedId) {
        this.$store.dispatch('authLocal/deactivateImpersonation');
      }

      this.$auth.logout();
    },

    isNavItemActive(title) {
      const linkifiedTitle = createLink(title);
      const [_, routeName] = this.routePath.split('/');

      return routeName === linkifiedTitle;
    },
  },
};
</script>
