<template>
  <div class="">
    <div class="mb-2 overline">
      Scheduled to
      {{ timezoneName ? `(${timezoneName} time | UTC${targetTZOffset})` : '' }}
    </div>
    <div>
      {{ value | toZonedTime(timezone) }}
    </div>
    <div v-if="scheduleChanged">
      new schedule:
      <div>{{ newlyScheduled | toZonedTime(timezone) }}</div>
    </div>
    <v-btn outlined x-small color="green" @click="dialogOpen = true">
      change
    </v-btn>
    <v-dialog v-model="dialogOpen" width="500" @click:outside="$emit('close')">
      <v-card>
        <v-card-title class="headline" primary-title> Edit date </v-card-title>

        <v-card-text>
          <v-menu :close-on-content-click="false">
            <template #activator="{ on }">
              <v-btn outlined :color="color" v-on="!disabled ? on : () => ({})">
                {{ modalDate }}
              </v-btn>
            </template>
            <v-date-picker
              v-model="modalDate"
              :min="todayISO"
              :disabled="disabled"
            />
          </v-menu>
          <v-menu :close-on-content-click="false">
            <template #activator="{ on }">
              <v-btn outlined :color="color" v-on="!disabled ? on : () => ({})">
                {{ modalTime }}
              </v-btn>
            </template>
            <v-time-picker
              v-model="modalTime"
              format="24hr"
              :allowed-minutes="allowedStep"
              :allowed-hours="allowedHours"
              :disabled="disabled"
            />
          </v-menu>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="grey" text @click="dialogOpen = false"> cancel </v-btn>
          <v-btn color="primary" @click="saveTime"> Accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div></div>
  </div>
</template>

<script>
const {
  isValid,
  formatISO,
  parseISO,
  isEqual,
  isSameDay,
  formatRFC3339,
} = require('date-fns');
const { zonedTimeToUtc, getTimezoneOffset } = require('date-fns-tz');

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
    newlyScheduled: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      date: '',
      time: '',
      modalTime: '',
      modalDate: '',
      newSchedule: '',
      timezones,
      dialogOpen: false,
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
    targetTZOffset() {
      return getTimezoneOffset(this.timezone) / (60 * 60 * 1000);
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
    scheduleChanged() {
      return !isEqual(parseISO(this.value), parseISO(this.newlyScheduled));
    },
  },
  watch: {
    newSchedule: {
      handler(newVal) {
        const date = parseISO(newVal);
        if (!isValid(date)) return;
        if (isEqual(date, parseISO(this.value))) return;

        this.$emit('input', newVal);
      },
      immediate: true,
    },
  },
  created() {
    this.setDefaultDateTime();
  },

  methods: {
    allowedStep: m => m % 30 === 0,
    setDefaultDateTime() {
      const date = formatISO(this.defaultDate, {
        representation: 'date',
      });
      this.modalDate = date;
      const time = formatISO(this.defaultDate, {
        representation: 'time',
      });
      this.modalTime = time.slice(0, 5);
    },
    closeDialog() {
      this.modalDate = this.modalTime = null;
    },
    saveTime() {
      const newDate = zonedTimeToUtc(
        `${this.modalDate} ${this.modalTime}`,
        this.timezone,
      );
      this.newSchedule = formatRFC3339(newDate);
      this.dialogOpen = false;
    },
  },
};
</script>
