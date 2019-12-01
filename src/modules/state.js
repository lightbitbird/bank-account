const transaction = {
  id: '',
  amount: 0,
};

const account = {
  id: '',
  name: '',
  account_number: 0,
};

const totals = {
  deposits: { current: transaction, months: [] },
  withdrawals: { current: transaction, months: [] },
};

const histories = {
  today: {
    withdrawals: [],
    deposits: [],
  },
  yesterday: {
    withdrawals: [],
    deposits: [],
  },
  month: {
    withdrawals: [],
    deposits: [],
  },
  withdrawals: { months: [] },
  deposits: { months: [] },
};

export const state = {
  transaction_histories: {
    namespaced: true,
    account,
    totals,
    histories,
  },
};
