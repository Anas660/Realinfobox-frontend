<template>
  <div>
    <nuxt-link
      :to="to"
      class="d-flex mb-2 cursor-pointer items-center no-underline"
    >
      <div class="h-[2px] w-5 bg-shaft" />
      <div
        :class="`
          d-flex
          h-8
          cursor-pointer
          flex-col
          justify-center
          rounded-small
          ${isActive ? 'bg-tundora' : 'transparent'}
          p-3.5
          `"
      >
        <p
          :class="`
          m-0
          ${isActive ? 'text-tango' : 'text-white'}
          ${isActive ? 'opacity-100' : 'opacity-60'}
          `"
        >
          {{ label }}
        </p>
      </div>
    </nuxt-link>

    <div v-if="subItems.length !== 0" class="ml-3">
      <nuxt-link
        v-for="item in subItems"
        :key="item.title"
        :to="item.href"
        class="d-flex mb-2 cursor-pointer items-center no-underline"
      >
        <div class="h-[2px] w-5 bg-shaft" />
        <div
          :class="`
          d-flex
          h-8
          cursor-pointer
          flex-col
          justify-center
          rounded-small
          ${isSubItemActive(item.title) ? 'bg-tundora' : 'transparent'}
          p-3.5
          `"
        >
          <p
            :class="`
          m-0
          ${isSubItemActive(item.title) ? 'text-tango' : 'text-white'}
          ${isSubItemActive(item.title) ? 'opacity-100' : 'opacity-60'}
          `"
          >
            {{ item.title }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import createLink from '~/helpers/create-link';

export default {
  props: {
    label: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    to: { type: String, required: true },
    subItems: { type: Array, default: () => [] },
  },

  computed: {
    routePath() {
      return this.$route.path;
    },
  },

  methods: {
    isSubItemActive(title) {
      const linkifiedTitle = createLink(title);

      return this.routePath.toLowerCase().includes(linkifiedTitle);
    },
  },
};
</script>
