export default {
  get_balance(state, payload) {
    Object.assign(state, payload);
  },
  get_month_balance(state, payload) {
    Object.assign(state, payload);
  },
  get_monthly_amounts(state, payload) {
    Object.assign(state.data.totals, payload);
  },
};
