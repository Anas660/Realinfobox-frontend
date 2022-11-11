import Vue from 'vue';
import subMonths from 'date-fns/subMonths';
import { getTimezoneOffset } from 'date-fns-tz';

Vue.filter('number', value => {
  if (!value) return '';

  return value.toLocaleString();
});

Vue.filter('round', value => {
  return Math.round((value + Number.EPSILON) * 100) / 100;
});

Vue.filter('datetime', value => {
  if(!value) return '';

  const localDate = new Date(value);

  return localDate.toLocaleString();
});

Vue.filter('currency', value => {
  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  if(!value) return formatter.format(0);

  return formatter.format(value);
});

Vue.filter('date', value => {
  if(!value) return '';

  const localDate = new Date(value);

  return localDate.toLocaleDateString();
});

Vue.filter('stripeDate', value => {
  if(!value) return '';

  const localDate = new Date(value*1000);

  return localDate.toLocaleString('en-us', { dateStyle: 'short', timeStyle: 'short' });
});

Vue.filter('month', (value, format = 'long') => {
  const localDate = new Date();
  localDate.setMonth(value);
  return localDate.toLocaleString('en-us', { month: format });
});

Vue.filter('shortMonth', (value, format = 'short') => {
  const localDate = new Date();
  localDate.setMonth(value);
  return localDate.toLocaleString('en-us', { month: format }).toUpperCase();
});

Vue.filter('prevMonth', (value, format = 'long') => {
  const localDate = new Date();
  localDate.setMonth(value);
  const prevMonth = subMonths(localDate, 1);

  return prevMonth.toLocaleString('en-us', { month: format });
});

Vue.filter('shortPrevMonth', (value, format = 'long') => {
  const localDate = new Date();
  localDate.setMonth(value);
  const prevMonth = subMonths(localDate, 1);

  return prevMonth.toLocaleString('en-us', { month: format });
});

Vue.filter('datetimeTz', (date, timezone) => {
  const newDate = new Date(date);
  return newDate.toLocaleString('en-US', { timeZone: timezone });
});
Vue.filter('toZonedTime', (date, timezone) => {
  let d = new Date(date);
  const offset = getTimezoneOffset(timezone) / (60 * 60 * 1000);
  let utc = d.getTime() + d.getTimezoneOffset() * 60000;
  let nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
});

Vue.filter('pluralize', (count, single, double, more) => {
  if (count === 1) return single;

  if (count > 1 && count < 5) return double;

  return more;
});

Vue.filter('capitalize', string => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
});

Vue.filter('uppercase', string => {
  if (!string) return '';
  return string.toUpperCase();
});

Vue.filter('lowercase', string => {
  if (!string) return '';
  return string.toLowerCase();
});

Vue.filter('commify', string => {
  if (!string && string !== 0) return '';
  return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

Vue.filter('truncate', (text, length, clamp) => {
  text = text || '';
  clamp = clamp || '...';
  length = length || 30;

  if (text.length <= length) return text;

  var tcText = text.slice(0, length - clamp.length);
  var last = tcText.length - 1;

  while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1;

  // Fix for case when text dont have any `space`
  last = last || length - clamp.length;

  tcText = tcText.slice(0, last);

  return tcText + clamp;
});

/**
 * 1] normalizing to NFD Unicode normal form decomposes combined graphemes into the combination of simple ones. The è of Crème ends up expressed as e + ̀.
 * 2] Using a regex character class to match the U+0300 → U+036F range, it is now trivial to globally get rid of the diacritics, which the Unicode standard conveniently groups as the Combining Diacritical Marks Unicode block.
 */
Vue.filter('unaccent', string => {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
});

Vue.prototype.$filters = Vue.options.filters;
