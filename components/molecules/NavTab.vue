<template>
  <div class="flex flex-col" @click="$emit(event)">
    <nuxt-link
      class="d-flex mb-2 h-11 items-center rounded-small px-3.5 no-underline"
      :style="{
        background: isActive ? 'rgba(240, 116, 35, 0.08)' : 'transparent',
      }"
      :to="href"
    >
      <div class="d-flex cursor-pointer items-center" @click="$emit('click')">
        <component :is="`${icon}NavIcon`" class="mr-3" :is-active="isActive" />
        <p
          :class="`
          m-0
          text-sm
          ${isActive ? 'text-tango' : 'text-white'}
          ${isActive ? 'opacity-100' : 'opacity-60'}
          `"
        >
          {{ title }}
        </p>
      </div>
      <div
        v-if="subItems.length !== 0"
        :class="`padding-2 ml-auto ${!isExpanded ? 'rotate-180' : ''}`"
        @click="handleArrowClick()"
      >
        <ChevronDownNavIcon :is-upside-down="isActive" />
      </div>
    </nuxt-link>
    <div
      v-if="isExpanded"
      class="ml-6 border-0 border-l-2 border-solid border-shaft"
    >
      <SubNavItemButton
        v-for="subItem in subItems"
        :key="subItem.title"
        :label="subItem.title"
        :is-active="isSubItemActive(subItem.title)"
        :to="subItem.href"
        :sub-items="subItem.subItems"
      />
    </div>
  </div>
</template>

<script>
import SettingsNavIcon from '~/components/svgIcons/SettingsNavIcon';
import UsersNavIcon from '~/components/svgIcons/UsersNavIcon';
import ClientsNavIcon from '~/components/svgIcons/ClientsNavIcon';
import CollapseNavIcon from '~/components/svgIcons/CollapseNavIcon';
import DemoNavIcon from '~/components/svgIcons/DemoNavIcon';
import LogoutNavIcon from '~/components/svgIcons/LogoutNavIcon';
import MarketReportsNavIcon from '~/components/svgIcons/MarketReportsNavIcon';
import NewsletterNavIcon from '~/components/svgIcons/NewsletterNavIcon';
import SubNavItemButton from '~/components/atoms/SubNavItemButton';
import ChevronDownNavIcon from '~/components/svgIcons/ChevronDownNavIcon';
import createLink from '~/helpers/create-link';

export default {
  components: {
    SettingsNavIcon,
    UsersNavIcon,
    ClientsNavIcon,
    CollapseNavIcon,
    DemoNavIcon,
    LogoutNavIcon,
    MarketReportsNavIcon,
    NewsletterNavIcon,
    SubNavItemButton,
    ChevronDownNavIcon,
  },

  props: {
    event: { type: String, default: '' },
    isActive: { type: Boolean, default: false },
    icon: { type: String, default: 'Newsletter' },
    title: { type: String, required: true },
    href: { type: String, default: '' },
    subItems: { type: Array, default: () => [] },
  },

  data() {
    return {
      isExpanded: false,
    };
  },

  computed: {
    routePath() {
      return this.$route.path;
    },
  },

  methods: {
    handleArrowClick() {
      this.isExpanded = !this.isExpanded;
    },

    isSubItemActive(title) {
      const linkifiedTitle = createLink(title);
      return this.routePath.toLowerCase().includes(linkifiedTitle);
    },
  },
};
</script>
