module.exports = {
  rules: {
    required: (value, message = undefined) => !!value || message || 'Required',
  },
};
