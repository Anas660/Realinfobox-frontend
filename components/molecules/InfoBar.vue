<template>
  <div
    :class="`
      d-flex
      mb-2
      cursor-pointer
      items-center
      rounded-small
      p-4
      text-white
      ${isError ? 'bg-thunderbird' : 'bg-tango'}
      `"
    @click="$emit('on-click')"
  >
    <ExclamationCircleIcon v-if="isError" class="mr-3" />
    <InformationCircleIcon v-else class="mr-3" />
    <span>
      {{ text }}
    </span>
    <ChevronRight v-if="isError" class="ml-auto" />
    <CancelIcon v-else class="ml-auto" />
  </div>
</template>

<script>
import ChevronRight from '~/components/svgIcons/newsletter-report-icons/ChevronRight';
import ExclamationCircleIcon from '~/components/svgIcons/newsletter-report-icons/ExclamationCircleIcon';
import CancelIcon from '~/components/svgIcons/CancelIcon.vue';
import InformationCircleIcon from '../svgIcons/InformationCircleIcon.vue';

export default {
  components: {
    ChevronRight,
    ExclamationCircleIcon,
    CancelIcon,
    InformationCircleIcon,
  },
  props: {
    text: { type: String, required: true },
    isError: { type: Boolean, default: false },
  },
};
</script>
