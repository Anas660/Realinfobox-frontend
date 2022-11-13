const endpointNames = {
  auth: {
    resetPassword: '/auth/password/forgot',
  },
  payments: {
    invoice: '/payment/invoice',
    products: '/payment/products',
    subscriptions: '/payment/subscriptions',
    mySubscriptions: '/payment/mySubscriptions',
    session: '/payment/session',
    recurringInvoice: '/payment/invoice/recurring',
  },
};

export default endpointNames;
