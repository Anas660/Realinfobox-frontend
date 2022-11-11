import { normalize } from '~/vuex/utils';
import { MailingList } from '~/vuex/schema';

export const state = () => ({
  mailingList: {},
  mailingListTotals: {
    totals: {},
    totals_percent: {},
  },
  tags: [],
  statuses: [
    {
      value: 'ok',
      text: 'Active',
    },
    {
      value: 'complaint',
      text: 'Inactive',
    },
    {
      value: 'bounce',
      text: 'Invalid',
    },
    {
      value: 'unsubscribed',
      text: 'Unsubscribed',
    },
  ],
});

export const mutations = {
  MAILING_LIST_SET(state, { mailingList }) {
    state.mailingList = mailingList;
  },
  MAILING_LIST_TOTALS_SET(state, { totals, totals_percent }) {
    state.mailingListTotals = {
      totals,
      totals_percent,
    };
  },
  ADDRESS_DELETE(state, { email }) {
    this._vm.$delete(state.mailingList, email);
  },
  TAGS_SET(state, payload) {
    state.tags = payload;
  },
};

export const actions = {
  async getMailingList({ commit }) {
    const { data, totals, totals_percent } = await this.$axios.$get(
      '/mailing-list',
    );
    const { entities } = normalize(data, MailingList);
    commit('MAILING_LIST_SET', entities);
    commit('MAILING_LIST_TOTALS_SET', { totals, totals_percent });
  },

  async getTags({ commit }) {
    const response = await this.$axios.$get('/mailing-list/tags');
    commit('TAGS_SET', response);
  },

  async updateTags({ commit }, payload) {
    const response = await this.$axios.$patch('/mailing-list/tags', {
      tags: payload,
    });
    commit('TAGS_SET', response.tags);
  },

  async deleteAddress({ commit }, email) {
    const escapedMail = encodeURIComponent(email);
    await this.$axios.$delete(`/mailing-list/${escapedMail}`);
    commit('ADDRESS_DELETE', { email });
  },

  async deleteMany({ state, commit }, emails) {
    try {
      const { success, fail } = await this.$axios.$post(
        '/mailing-list/delete-many',
        { emails },
      );

      if (success.length < 10) {
        success.forEach(email => {
          commit('ADDRESS_DELETE', { email });
        });
      } else {
        const toKeep = { ...state.mailingList };

        success.forEach(email => {
          delete toKeep[email];
        });

        commit('MAILING_LIST_SET', { mailingList: toKeep });
      }

      if (fail.length) {
        this.$snack.show('Some emails failed to delete', 'danger');
      } else {
        this.$snack.show('Emails deleted successfully', 'success');
      }
    } catch (error) {
      this.$snack.show('Error deleting', 'danger');
    }
    return true;
  },
};

export const getters = {
  mailingListArray(state) {
    if (!state.mailingList) return [];
    return Object.values(state.mailingList);
  },
};
