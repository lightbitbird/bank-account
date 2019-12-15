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
  getUser() {
    return '';
  },
};
