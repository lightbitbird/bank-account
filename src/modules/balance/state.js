const transaction = {
  id: '',
  amount: 0,
  timestamp: '',
  operation: '',
};

const session = {
  token: '',
};

const account = {
  id: '',
  name: '',
  account_number: 0,
};

const totals = {
  deposit: [],
  withdrawal: [],
};

const month = {
  name: '',
  transactions: [],
  today: [],
  yesterday: [],
};

const histories = {
  today: [],
  yesterday: [],
  months: [],
  month: {},
};

export default {
  // transaction_histories: {
  //   balance: 0,
  //   account: account,
  //   totals: {
  //     deposit: { current: transaction, months: [] },
  //     withdrawal: { current: transaction, months: [] },
  //   },
  //   histories: histories,
  //   session: session,
  // },
  transaction_histories: {
    balance: {
      deposit: 0,
      withdrawal: 0,
      total: 0,
    },
    month: month,
    totals: totals,
    today: [],
    yesterday: [],
  },
};
