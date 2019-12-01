var mocky = require('mocky');

const dep_transaction = {
  id: 'abc1234567',
  amount: 5740000,
  timestamp: '2019/11/26 14:25:03',
};

const wd_transaction = {
  id: 'abc1234567',
  amount: 278800,
  timestamp: '2019/11/12 20:18:54',
};

const account = {
  id: wd_transaction.id,
  name: 'Mad Max',
  account_number: 0,
};

const dep_months = [
  {
    name: 'Jan',
    transactions: [
      {
        id: 'abc12345678',
        amount: 12550,
        timestamp: '2019/01/22 17:48:54',
      },
    ],
  },
  {
    name: 'Feb',
    transactions: [
      {
        id: 'abc12345678',
        amount: 7700,
        date: '2019/02/18 09:48:41',
      },
    ],
  },
  {
    name: 'Mar',
    transactions: [
      {
        id: 'abc12345678',
        amount: 13000,
        date: '2019/03/03 19:32:01',
      },
    ],
  },
  {
    name: 'Apr',
    transactions: [
      {
        id: 'abc12345678',
        amount: 8300,
        date: '2019/04/15 13:05:30',
      },
    ],
  },
  {
    name: 'May',
    transactions: [
      {
        id: 'abc12345678',
        amount: 33100,
        date: '2019/05/02 19:13:00',
      },
    ],
  },
  {
    name: 'Jun',
    transactions: [
      {
        id: 'abc12345678',
        amount: 4700,
        date: '2019/06/09 15:21:28',
      },
    ],
  },
  {
    name: 'Jul',
    transactions: [
      {
        id: 'abc12345678',
        amount: 183400,
        date: '2019/07/21 11:51:06',
      },
    ],
  },
  {
    name: 'Aug',
    transactions: [
      {
        id: 'abc12345678',
        amount: 9200,
        date: '2019/08/20 17:36:46',
      },
    ],
  },
  {
    name: 'Sep',
    transactions: [
      {
        id: 'abc12345678',
        amount: 345000,
        date: '2019/09/29 12:27:33',
      },
    ],
  },
  {
    name: 'Oct',
    transactions: [
      {
        id: 'abc12345678',
        amount: 49000,
        date: '2019/10/10 21:03:57',
      },
    ],
  },
  {
    name: 'Nov',
    transactions: [
      {
        id: 'abc12345678',
        amount: 262000,
        date: '2019/11/08 23:59:50',
      },
      {
        id: 'abc12345678',
        amount: 5000,
        date: '2019/11/14 08:00:01',
      },
      {
        id: 'abc12345678',
        amount: 72000,
        date: '2019/11/15 09:55:10',
      },
    ],
  },
  {
    name: 'Dec',
    transactions: [
      {
        id: 'abc12345678',
        amount: 14500,
        date: '2019/12/18 11:27:30',
      },
    ],
  },
];

const wd_months = [
  {
    name: 'Jan',
    transactions: [
      {
        id: 'abc12345678',
        amount: 99000,
        date: '2019/01/03 10:10:20',
      },
    ],
  },
  {
    name: 'Feb',
    transactions: [
      {
        id: 'abc12345678',
        amount: 12000,
        date: '2019/02/08 20:48:16',
      },
    ],
  },
  {
    name: 'Mar',
    transactions: [
      {
        id: 'abc12345678',
        amount: 8800,
        date: '2019/03/11 15:03:06',
      },
    ],
  },
  {
    name: 'Apr',
    transactions: [
      {
        id: 'abc12345678',
        amount: 21500,
        date: '2019/04/06 12:47:01',
      },
    ],
  },
  {
    name: 'May',
    transactions: [
      {
        id: 'abc12345678',
        amount: 16800,
        date: '2019/05/24 18:50:21',
      },
    ],
  },
  {
    name: 'Jun',
    transactions: [
      {
        id: 'abc12345678',
        amount: 7500,
        date: '2019/06/10 19:20:14',
      },
    ],
  },
  {
    name: 'Jul',
    transactions: [
      {
        id: 'abc12345678',
        amount: 43000,
        date: '2019/07/23 18:05:15',
      },
    ],
  },
  {
    name: 'Aug',
    transactions: [
      {
        id: 'abc12345678',
        amount: 13200,
        date: '2019/08/07 08:50:30',
      },
    ],
  },
  {
    name: 'Sep',
    transactions: [
      {
        id: 'abc12345678',
        amount: 59800,
        date: '2019/09/20 13:25:42',
      },
    ],
  },
  {
    name: 'Oct',
    transactions: [
      {
        id: 'abc12345678',
        amount: 20000,
        date: '2019/10/22 18:30:45',
      },
    ],
  },
  {
    name: 'Nov',
    transactions: [
      {
        id: 'abc12345678',
        amount: 10000,
        date: '2019/11/09 18:14:00',
      },
      {
        id: 'abc12345678',
        amount: 10000,
        date: '2019/11/11 19:07:01',
      },
      {
        id: 'abc12345678',
        amount: 10000,
        date: '2019/11/14 20:49:06',
      },
      {
        id: 'abc12345678',
        amount: 24500,
        date: '2019/11/15 16:24:18',
      },
    ],
  },
  {
    name: 'Dec',
    transactions: [
      {
        id: 'abc12345678',
        amount: 33000,
        date: '2019/12/11 08:00:25',
      },
    ],
  },
];

const totals = {
  deposits: {
    current: dep_transaction,
    months: [
      350000,
      450000,
      430000,
      790000,
      920000,
      460000,
      370000,
      840000,
      640000,
      380000,
      770000,
      510000,
    ],
  },
  withdrawals: {
    current: wd_transaction,
    months: [
      170000,
      180000,
      250000,
      330000,
      150000,
      170000,
      130000,
      260000,
      350000,
      130000,
      340000,
      270000,
    ],
  },
};

const histories = {
  today: {
    withdrawals: wd_months[10].transactions[2],
    deposits: dep_months[10].transactions[2],
  },
  yesterday: {
    withdrawals: wd_months[10].transactions[1],
    deposits: dep_months[10].transactions[1],
  },
  month: {
    withdrawals: [wd_months[10].transactions],
    deposits: [dep_months[10].transactions],
  },
  withdrawals: { months: wd_months },
  deposits: { months: dep_months },
};

const transaction_histories = {
  totals,
  histories,
};

mocky
  .createServer([
    {
      url: '/bank-account',
      method: 'get',
      headers: {
        'Content-type': 'text/json',
      },
      res: {
        status: 200,
        headers: {
          'Content-type': 'text/html',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(transaction_histories),
      },
    },
  ])
  .listen(5000);
