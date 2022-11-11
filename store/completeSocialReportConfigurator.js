export const state = () => ({
  showBanner: true,
  showMarketStatus: true,
  showBenchmark: true,
  showActiveSold: true,
  showAdom: true,
});

export const mutations = {
  SET_SHOW_BANNER(state, payload) {
    state.showBanner = payload;
  },
  SET_SHOW_MARKET_STATUS(state, payload) {
    state.showMarketStatus = payload;
  },
  SET_SHOW_BENCHMARK(state, payload) {
    state.showBenchmark = payload;
  },
  SET_SHOW_ACTIVE_SOLD(state, payload) {
    state.showActiveSold = payload;
  },
  SET_SHOW_ADOM(state, payload) {
    state.showAdom = payload;
  },
};

export const getters = {
  showBanner: ({ showBanner }) => showBanner,
  showMarketStatus: ({ showMarketStatus }) => showMarketStatus,
  showBenchmark: ({ showBenchmark }) => showBenchmark,
  showActiveSold: ({ showActiveSold }) => showActiveSold,
  showAdom: ({ showAdom }) => showAdom,
};
