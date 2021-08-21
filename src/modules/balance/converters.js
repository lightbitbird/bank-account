export default {
  get_balance(payload) {
    return {
      transaction_histories: payload,
    };
  },
  get_month_balance(payload) {
    if (payload.month.transactions && payload.month.transactions.length > 0) {
      payload.month.transactions.map(d => {
        d.type = d.type === 1 || d.type === 3 ? 'deposit' : 'withdrawal';
        return d;
      });
    }
    if (payload.today && payload.today.length > 0) {
      payload.today.map(d => {
        d.type = d.type === 1 || d.type === 3 ? 'deposit' : 'withdrawal';
        return d;
      });
    }
    if (payload.yesterday && payload.yesterday.length > 0) {
      payload.yesterday.map(d => {
        d.type = d.type === 1 || d.type === 3 ? 'deposit' : 'withdrawal';
        return d;
      });
    }
    return {
      transaction_histories: payload,
    };
  },
  get_monthly_amounts(payload) {
    return {
      totals: payload,
    };
  },
};
