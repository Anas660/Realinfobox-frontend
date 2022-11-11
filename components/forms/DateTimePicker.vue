<template>
  <div class="">
    <div class="overline">
      Scheduled to
      {{ timezoneName ? `(${timezoneName} time | UTC${targetTZOffset})` : '' }}
    </div>
    <div>
      <v-menu :close-on-content-click="false">
        <template #activator="{ on }">
          <v-btn outlined :color="color" v-on="!disabled ? on : () => ({})">
            {{ date }}
          </v-btn>
        </template>
        <v-date-picker v-model="date" :min="todayISO" :disabled="disabled" />
      </v-menu>
      <v-menu :close-on-content-click="false">
        <template #activator="{ on }">
          <v-btn outlined :color="color" v-on="!disabled ? on : () => ({})">
            {{ time }}
          </v-btn>
        </template>
        <v-time-picker
          v-model="time"
          format="24hr"
          :allowed-minutes="allowedStep"
          :allowed-hours="allowedHours"
          :disabled="disabled"
        />
      </v-menu>
    </div>
  </div>
</template>

<script>
const {
  isValid,
  formatISO,
  parseISO,
  isEqual,
  isSameDay,
  addHours,
  formatRFC3339,
} = require('date-fns');
const {
  zonedTimeToUtc,
  utcToZonedTime,
  getTimezoneOffset,
} = require('date-fns-tz');

import { timezones } from '~/config.json';

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    timezone: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      date: '',
      time: '',
      timezones,
      currentOffset: 0,
      offsetHrsDelta: 0,
      localTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      initialOffset: 0,
      i: 0,
    };
  },
  computed: {
    now() {
      return new Date();
    },
    defaultDate() {
      const newDate = new Date();
      newDate.setHours(newDate.getHours() + 1);
      newDate.setMinutes(0);
      newDate.setSeconds(0);
      return newDate;
    },
    allowedHours() {
      const hours = [...Array(24).keys()];
      return hours.filter(h => {
        if (isSameDay(this.selectedDate, this.now)) {
          return h > this.now.getHours();
        }
        return true;
      });
    },
    selectedDate() {
      return new Date(this.date);
    },
    todayISO() {
      return this.now.toISOString().slice(0, 10);
    },
    timezoneName() {
      const found = timezones.find(tz => tz.value === this.timezone);
      return found ? found.name : '';
    },
    targetTZOffset() {
      return getTimezoneOffset(this.timezone) / (60 * 60 * 1000);
    },
    localTZOffset() {
      return getTimezoneOffset(this.localTimezone) / (60 * 60 * 1000);
    },
    targetToInputOffset() {
      return this.targetTZOffset - this.initialOffset;
    },
    localToTargetTZOffset() {
      return (
        (getTimezoneOffset(this.timezone) -
          getTimezoneOffset(this.localTimezone)) /
        (60 * 60 * 1000)
      );
    },
    outputDateString() {
      const newDate = zonedTimeToUtc(
        `${this.date} ${this.time}`,
        this.timezone,
      );
      if (!isValid(newDate)) return null;
      return formatRFC3339(newDate);
    },
  },
  watch: {
    value: {
      handler(newVal) {
        if (newVal) {
          let toParse = new Date(newVal);
          if (isEqual(parseISO(newVal), parseISO(this.outputDateString)))
            return;
          if (!isValid(toParse)) return;

          this.initialOffset = parseInt(newVal.slice(-6, -3));

          if (this.localTZOffset > 0)
            toParse = utcToZonedTime(toParse, this.timezone);
          else toParse = addHours(toParse, this.targetToInputOffset);

          if (isEqual(parseISO(newVal), parseISO(this.outputDateString)))
            return;
          if (!isValid(toParse)) return;

          const time = formatISO(toParse, {
            representation: 'time',
          });
          this.time = time.slice(0, 5);
          this.date = formatISO(toParse, {
            representation: 'date',
          });
        } else {
          this.setDefaultDateTime();
        }
      },
      immediate: true,
    },
    outputDateString: {
      handler(newVal) {
        const date = parseISO(newVal);
        if (!isValid(date)) return;
        if (isEqual(date, parseISO(this.value))) return;

        this.$emit('input', newVal);
      },
      immediate: true,
    },
  },

  methods: {
    allowedStep: m => m % 30 === 0,
    setDefaultDateTime() {
      const date = formatISO(this.defaultDate, {
        representation: 'date',
      });
      this.date = date;
      const time = formatISO(this.defaultDate, {
        representation: 'time',
      });
      this.time = time.slice(0, 5);
    },
  },
};
</script>
