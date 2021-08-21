import { api } from '../../lib/api';
import converters from './converters';
import moment from 'moment';

export default {
  async getBalance({ commit }) {
    const tm = moment()
      .utcOffset('+9:00')
      .format('YYYYMMDDHHmmss');
    const params = { date: tm };
    const payload = await api.requestGet('/balance', params);
    const result = converters.get_balance(payload);
    commit('get_balance', result);
  },
  async getMonthBalance(
    { commit },
    tm = moment()
      .utcOffset('+9:00')
      .format('YYYYMMDDHHmmss')
  ) {
    const params = { target_timestamp: tm, account_number: 'FNE00105' };
    const payload = await api.requestGet('/transaction/history/month', params);
    const result = converters.get_month_balance(payload.data);
    commit('get_month_balance', result);
  },
  async getMonthlyAmounts({ commit }) {
    const tm = moment()
      .utcOffset('+9:00')
      .format('YYYYMMDDHHmmss');
    const params = { target_timestamp: tm, account_number: 'FNE00105' };
    const payload = await api.requestGet(
      '/transaction/history/monthly/amount',
      params
    );
    const result = converters.get_monthly_amounts(payload);
    commit('get_monthly_amounts', result);
  },
  getUser() {
    return '';
  },
};
