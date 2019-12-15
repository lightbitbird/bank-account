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
  deposits: { current: transaction, months: [] },
  withdrawals: { current: transaction, months: [] },
};

const month = {
  name: '',
  transactions: [],
};

const histories = {
  today: [],
  yesterday: [],
  months: [],
  month: {},
};

export default {
  transaction_histories: {
    balance: 0,
    account: account,
    totals: totals,
    histories: histories,
    session: session,
  },
};
