import { normalize } from '~/vuex/utils';
import { Campaigns } from '~/vuex/schema';
import Vue from 'vue';

export const state = () => ({
  campaigns: {},
  loading: false,
});

export const mutations = {
  CAMPAIGNS_SET(state, { campaigns }) {
    state.campaigns = campaigns;
  },
  CAMPAIGN_DELETE(state, { campaignId }) {
    Vue.delete(state.campaigns, campaignId);
  },
  LOADING_SET(state, payload) {
    state.loading = payload;
  },
};

export const actions = {
  async getCampaigns({ commit }) {
    commit('LOADING_SET', true);
    try {
      const list = await this.$axios.$get('/campaigns');
      const { entities } = normalize(list, Campaigns);
      commit('CAMPAIGNS_SET', entities);
    } catch (error) {
      this.$snack.show('Campaign error', 'danger');
    }
    commit('LOADING_SET', false);
  },
};
export const getters = {
  campaignsArray(state) {
    if (!state.campaigns) return [];
    return Object.values(state.campaigns);
  },
};
