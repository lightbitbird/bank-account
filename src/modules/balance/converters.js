export default {
  get_balance(payload) {
    return {
      transaction_histories: payload,
    };
  },
};
