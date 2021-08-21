let moment = require('moment');
let mocky = require('mocky');

const account = {
  id: 'abce123456',
  name: 'Mad Max',
  account_number: 0,
};

const year = moment().year();

const months = [
  {
    month: {
      name: 'Jan',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 99000,
          timestamp: `${year}/01/03 10:10:20`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 99000,
          timestamp: `${year}/01/16 19:42:36`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 12550,
          timestamp: `${year}/01/22 17:48:54`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 30480,
          timestamp: `${year}/01/25 11:23:36`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'Amazon',
          amount: 30480,
          timestamp: `${year}/01/25 11:23:36`,
          operation: 'Transfer',
        },
      ],
    },
  },
  {
    month: {
      name: 'Feb',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 12000,
          timestamp: `${year}/02/08 20:48:16`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'Google',
          amount: 5200,
          timestamp: `${year}/02/11 16:20:32`,
          operation: 'Transfer',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 7700,
          timestamp: `${year}/02/18 09:48:41`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 1000,
          timestamp: `${year}/02/26 18:40:25`,
          operation: 'Deposit',
        },
      ],
    },
  },
  {
    month: {
      name: 'Mar',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 13000,
          timestamp: `${year}/03/03 19:32:01`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 8800,
          timestamp: `${year}/03/11 15:03:06`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 27000,
          timestamp: `${year}/03/14 22:22:15`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'FIFA',
          amount: 3400,
          timestamp: `${year}/03/23 13:55:36`,
          operation: 'Transfer',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 3400,
          timestamp: `${year}/03/30 17:03:01`,
          operation: 'Deposit',
        },
      ],
    },
  },
  {
    month: {
      name: 'Apr',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 21500,
          timestamp: `${year}/04/06 12:47:01`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 18000,
          timestamp: `${year}/04/15 13:05:30`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'XYZ Company',
          amount: 2400,
          timestamp: `${year}/04/20 10:08:33`,
          operation: 'Transfer',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 1200,
          timestamp: `${year}/04/24 17:40:01`,
          operation: 'Withdrawal',
        },
      ],
    },
  },
  {
    month: {
      name: 'May',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 33100,
          timestamp: `${year}/05/02 19:13:00`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 16800,
          timestamp: `${year}/05/14 15:17:16`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 900,
          timestamp: `${year}/05/20 18:50:21`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'Korea',
          amount: 2700,
          timestamp: `${year}/05/22 19:20:28`,
          operation: 'Transfer',
        },
      ],
    },
  },
  {
    month: {
      name: 'Jun',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 4700,
          timestamp: `${year}/06/09 15:21:28`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 7500,
          timestamp: `${year}/06/10 19:20:12`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'Japan',
          amount: 3600,
          timestamp: `${year}/06/19 16:47:04`,
          operation: 'Transfer',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 8200,
          timestamp: `${year}/06/23 09:00:19`,
          operation: 'Withdrawal',
        },
      ],
    },
  },
  {
    month: {
      name: 'Jul',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'America',
          amount: 43000,
          timestamp: `${year}/07/13 10:10:25`,
          operation: 'Transfer',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 183400,
          timestamp: `${year}/07/21 11:51:06`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 8000,
          timestamp: `${year}/07/23 18:05:15`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 32000,
          timestamp: `${year}/07/28 20:10:42`,
          operation: 'Deposit',
        },
      ],
    },
  },
  {
    month: {
      name: 'Aug',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 13200,
          timestamp: `${year}/08/07 08:50:30`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 9200,
          timestamp: `${year}/08/11 17:36:46`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'ABC Company',
          amount: 2500,
          timestamp: `${year}/08/22 08:30:37`,
          operation: 'Transfer',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 4600,
          timestamp: `${year}/08/27 19:06:02`,
          operation: 'Withdrawal',
        },
      ],
    },
  },
  {
    month: {
      name: 'Sep',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 59800,
          timestamp: `${year}/09/10 13:25:42`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 345000,
          timestamp: `${year}/09/16 12:27:33`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 62000,
          timestamp: `${year}/09/24 22:40:06`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 345000,
          timestamp: `${year}/09/29 19:31:50`,
          operation: 'Withdrawal',
        },
      ],
    },
  },
  {
    month: {
      name: 'Oct',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 49000,
          timestamp: `${year}/10/10 21:03:57`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 65000,
          timestamp: `${year}/10/18 20:24:49`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 20000,
          timestamp: `${year}/10/22 18:30:45`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'ZZZ Company',
          amount: 20000,
          timestamp: `${year}/10/28 23:49:40`,
          operation: 'Transfer',
        },
      ],
    },
  },
  {
    month: {
      name: 'Nov',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 262000,
          timestamp: `${year}/11/08 23:59:50`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'BBB Company',
          amount: 10000,
          timestamp: `${year}/11/09 18:14:00`,
          operation: 'Transfer',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 10000,
          timestamp: `${year}/11/11 19:07:01`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 5000,
          timestamp: `${year}/11/14 08:00:01`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 10000,
          timestamp: `${year}/11/14 20:49:06`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 24500,
          timestamp: `${year}/11/15 16:24:18`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 72000,
          timestamp: `${year}/11/15 09:55:10`,
          operation: 'Withdrawal',
        },
      ],
    },
  },
  {
    month: {
      name: 'Dec',
      transactions: [
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'London',
          amount: 33000,
          timestamp: `${year}/12/11 08:00:25`,
          operation: 'Deposit',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 72000,
          timestamp: `${year}/12/15 09:55:10`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'deposit',
          place: 'AAA Company',
          amount: 14500,
          timestamp: `${year}/12/28 11:27:30`,
          operation: 'Transfer',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 37700,
          timestamp: `${year}/12/29 20:44:28`,
          operation: 'Withdrawal',
        },
        {
          id: 'abc12345678',
          activity: 'withdrawal',
          place: 'London',
          amount: 14500,
          timestamp: `${year}/12/30 17:30:04`,
          operation: 'Withdrawal',
        },
      ],
    },
  },
];

const totals = {
  deposits: {
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

const sortMonths = current => {
  // let n = 0;
  let startToEndMonths = [];
  const start = current - 11;
  let target = {};
  for (let n = start; n <= current; n++) {
    if (n < 0) {
      const year = moment().year() - 1;
      target = months[n + 12];
      target.month.transactions.forEach((value, idx) => {
        let timestamp = moment(value.timestamp.replace(/\//gi, '-'))
          .add(-1, 'year')
          .format('YYYY/MM/DD HH:mm:ss');
        value.timestamp = timestamp;
      });
    } else {
      target = months[n];
    }
    startToEndMonths.push(target);
  }
  return startToEndMonths;
};

const histories = {
  today: [months[11].month.transactions[1]],
  yesterday: [months[11].month.transactions[0]],
  months: sortMonths(moment().month()),
  month: months[11].month,
};

const transaction_histories = {
  balance: 2864000,
  totals,
  histories,
};

const monthNames = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

const getHistories = () => {
  const todayTm = moment().format('YYYY/MM/DD HH:mm:ss');
  const monthObj = transaction_histories.histories.months[11].month;
  monthObj.transactions[2].timestamp = todayTm;
  monthObj.transactions[3].timestamp = todayTm;
  const todayTs = [monthObj.transactions[2], monthObj.transactions[3]];
  const today = {
    name: monthNames[11],
    transactions: todayTs,
  };
  const yesterdayTm = moment()
    .add(-1, 'days')
    .format('YYYY/MM/DD HH:mm:ss');
  monthObj.transactions[0].timestamp = yesterdayTm;
  monthObj.transactions[1].timestamp = yesterdayTm;
  const yesterdayTs = [monthObj.transactions[2], monthObj.transactions[3]];
  const yesterday = {
    name: monthNames[11],
    transactions: yesterdayTs,
  };
  transaction_histories.histories.today = today;
  transaction_histories.histories.yesterday = yesterday;
  transaction_histories.histories.month = monthObj;
  return transaction_histories;
};

mocky
  .createServer([
    {
      url: /\/balance\?date=\d+/,
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
        body: JSON.stringify(getHistories()),
      },
    },
  ])
  .listen(9000);
