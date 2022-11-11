export default ({ store: { commit }, app }, inject) => {
  inject('snack', {
    show: (message, color = undefined, timeout = undefined) => {
      const payload = {
        message,
      };
      if (color) payload.color = color;
      if (timeout) payload.timeout = timeout;

      commit('ui/SNACKBAR_SHOW', {
        color,
        timeout,
        message,
      });
    },
  });
  inject('isNull', value => !value && value !== 0);
  inject('dateWithTimeZone', (timeZone, year, month = 1, day = 1, hour = 1, minute = 1, second = 1) => {
    let date = new Date(Date.UTC(year, month, day, hour, minute, second));
    let utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    let tzDate = new Date(date.toLocaleString('en-US', { timeZone: timeZone }));
    let offset = utcDate.getTime() - tzDate.getTime();

    date.setTime(date.getTime() + offset);

    return date;
  });
  inject('pad0', (value, length = 2) => {
    return `${value}`.padStart(length, 0);
  });
};
