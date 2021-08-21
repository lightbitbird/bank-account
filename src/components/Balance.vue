<template xmlns:div="http://www.w3.org/1999/html">
  <div class="wallet-frame">
    <menu-container></menu-container>
    <div class="container">
      <div class="deposit-menu-row">
        <div class="deposit-menu-text">Deposite balance</div>
        <div class="balance">
          ${{ transaction_histories.balance.total | numberFormat }}
        </div>
      </div>
      <div class="monthly-in-out">
        <div
          v-for="(data, key) in transaction_histories.totals.deposit"
          class="month"
          :key="key"
        >
          <div class="histogram">
            <div class="month-label-box">
              <div class="deposit-histo" :style="styleDepositHistogram(key)">
                <a
                  v-on:click="changeMonth(key)"
                  :style="styleDepositHistogram(key)"
                  >-</a
                >
              </div>
              <div
                class="withdrawal-histo"
                :style="styleWithdrawalHistogram(key)"
              >
                <a
                  v-on:click="changeMonth(key)"
                  :style="styleWithdrawalHistogram(key)"
                  >-</a
                >
              </div>
            </div>
            <div class="month-label">
              {{ histoName(key) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-body">
      <div class="in-out-row">
        <div class="month-deposit">
          <div class="deposit-text">Deposite</div>
          <div class="deposit-amount">
            {{ getCurrentTotalDeposit() }}
          </div>
        </div>
        <div class="month-withdrawal">
          <div class="withdrawal-text">Withdrawal</div>
          <div class="withdrawal-amount">
            {{ getCurrentTotalWithdrawal() }}
          </div>
        </div>
      </div>
      <div class="border-line" v-show="currentMonth === targetMonth">
        Today
      </div>
      <ul class="statements" v-show="currentMonth === targetMonth">
        <li
          v-for="(transaction, key) in transaction_histories.today"
          :class="transaction.type"
          :key="key"
        >
          <div class="detail">
            <div class="transaction-line">
              <span class="timestamp">{{ transaction.transaction_at }}</span>
              <span class="dep-type">{{ transaction.operation }}</span
              >&nbsp;<span class="place">{{ transaction.place }}</span
              >&nbsp;
            </div>
            <div :class="`${transaction.type}-amount`">
              ${{ transaction.amount | numberFormat }}
            </div>
          </div>
        </li>
      </ul>
      <div class="border-line" v-show="currentMonth === targetMonth">
        Yesterday
      </div>
      <ul class="statements" v-show="currentMonth === targetMonth">
        <li
          v-for="(transaction, key) in transaction_histories.yesterday"
          :class="transaction.type"
          :key="key"
        >
          <div class="detail">
            <div class="transaction-line">
              <span class="timestamp">{{ transaction.transaction_at }}</span>
              <span class="dep-type">{{ transaction.operation }}</span
              >&nbsp; <span class="place">{{ transaction.place }}</span
              >&nbsp;
            </div>
            <div :class="`${transaction.type}-amount`">
              ${{ transaction.amount | numberFormat }}
            </div>
          </div>
        </li>
      </ul>
      <div class="border-line">
        {{ currentMonthTitle(transaction_histories.month.name) }}
      </div>
      <ul class="statements">
        <li
          v-for="(transaction, key) in transaction_histories.month.transactions"
          :class="transaction.type"
          :key="key"
        >
          <div class="detail">
            <div class="transaction-line">
              <span class="timestamp">{{ transaction.transaction_at }}</span>
              <span class="dep-type">{{ transaction.operation }}</span
              >&nbsp; <span class="place">{{ transfer(transaction) }}</span
              >&nbsp;
            </div>
            <div :class="`${transaction.type}-amount`">
              ${{ transaction.amount | numberFormat }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script id="renderd-js">
import { mapActions, mapState } from 'vuex';
import MenuContainer from './common/MenuContainer';
import moment from 'moment';
import messages from '../constants/messages';

export default {
  name: 'balance',
  components: { MenuContainer },
  data: function() {
    return {
      isActive: false,
      maxWithdrawal: 0,
      minWithdrawal: 0,
      maxDeposit: 0,
      minDeposit: 0,
      currentMonth: `${moment().year()}${('0' + moment().month()).slice(-2)}`,
      targetMonth: `${moment().year()}${('0' + moment().month()).slice(-2)}`,
      // monthInfo: { transactions: [], name: '' },
    };
  },
  props: {
    msg: String,
  },
  computed: {
    ...mapState('balance', ['transaction_histories']),
    styleWithdrawalHistogram() {
      return function(month_date) {
        let style = '';
        if (this.maxWithdrawal > 0) {
          const target = this.transaction_histories.totals.withdrawal[
            month_date
          ];
          if (target) {
            const height = (target * 50) / this.maxWithdrawal;
            const top = 20 - height;
            const current =
              this.realMonth() === month_date
                ? 'background-color: #ffffff; border-radius: 3px;'
                : '';
            style = `top: ${top}px; height: ${height}px;${current}`;
          }
        }
        return `${style}`;
      };
    },
    styleDepositHistogram() {
      return function(month_date) {
        let style = '';
        if (this.maxDeposit > 0) {
          const target = this.transaction_histories.totals.deposit[month_date];
          if (target) {
            const height = (target * 50) / this.maxDeposit;
            const top = 20 - height;
            const current =
              this.realMonth() === month_date
                ? 'background-color: #385a65; border-radius: 3px;'
                : '';
            style = `top: ${top}px; height: ${height}px;${current}`;
          }
        }
        return `${style}`;
      };
    },
    histoName() {
      return function(month_date) {
        const month = month_date ? parseInt(month_date.substr(4, 2)) : 0;
        return messages.monthNames[month];
      };
    },
    currentMonthTitle() {
      return function(name) {
        const month = parseInt(this.targetMonth.substr(4, 2));
        return this.currentMonth === month ? 'This Month' : name;
      };
    },
  },
  methods: {
    ...mapActions('balance', ['getMonthBalance']),
    getCurrentTotalWithdrawal: function() {
      return this.transaction_histories.balance.withdrawal
        ? `$${this.transaction_histories.balance.withdrawal.toLocaleString()}`
        : `$0`;
    },
    getCurrentTotalDeposit: function() {
      return this.transaction_histories.balance.deposit
        ? `$${this.transaction_histories.balance.deposit.toLocaleString()}`
        : `$0`;
    },
    setMonth: function(month_date) {
      const year = parseInt(month_date.substr(0, 4));
      const m = parseInt(month_date.substr(4, 2)) - 1;
      const month = ('0' + m).slice(-2);
      this.targetMonth = `${year}${month}`;
    },
    changeMonth: async function(month_date) {
      const tm = moment([
        parseInt(month_date.substr(0, 4)),
        parseInt(month_date.substr(4, 2)) - 1,
        1,
      ])
        .utcOffset('+9:00')
        .format('YYYYMMDDHHmmss');

      this.setMonth(month_date);
      this.getMonthBalance(tm);
      await this.$nextTick();
    },
    realMonth: function() {
      const year = parseInt(this.targetMonth.substr(0, 4));
      const m = parseInt(this.targetMonth.substr(4, 2));
      const month = ('0' + (m + 1)).slice(-2);
      return `${year}${month}`;
    },
    transfer: function(transaction) {
      return transaction.account_from &&
        transaction.account_number !== transaction.account_from
        ? `From ${transaction.account_from}`
        : transaction.account_to &&
          transaction.account_number !== transaction.account_to
        ? `To ${transaction.account_to}`
        : '';
    },
  },
  async mounted() {
    await this.getMonthBalance();
    // this.monthInfo = this.transaction_histories.month;
    if (this.transaction_histories.totals.withdrawal) {
      const max = Math.max(
        ...Object.values(this.transaction_histories.totals.withdrawal)
      );
      const min = Math.min(
        ...Object.values(this.transaction_histories.totals.withdrawal)
      );
      this.maxWithdrawal = max;
      this.minWithdrawal = min;
    }
    if (this.transaction_histories.totals.deposit) {
      const max = Math.max(
        ...Object.values(this.transaction_histories.totals.deposit)
      );
      const min = Math.min(
        ...Object.values(this.transaction_histories.totals.deposit)
      );
      this.maxDeposit = max;
      this.minDeposit = min;
    }
  },
};
</script>

<style scoped>
@media only screen {
  html {
    font-size: 1.5rem;
  }
}

html {
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.87);
}

@media only screen and (min-width: 601px) {
  .wallet-frame {
    width: 80%;
  }
}

.wallet-frame {
  position: relative;
  background: #ffffff;
  border-radius: 5px;
  margin: 0 auto 0;
  padding: 1px 0 40px 0;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.12), 0 1px 2px rgb(0, 0, 0, 0.24);
  transition: 0.3s ease;
}

.deposit-menu-row {
  top: 15px;
  width: 100%;
  display: block;
  padding: 0 auto 0;
  position: absolute;
}

.deposit-menu-text {
  position: relative;
  padding: 0 auto 0;
  text-align: center;
  font-size: 1.2em;
}

.balance {
  position: relative;
  padding: 0 auto 0;
  text-align: center;
  font-size: 1.05em;
}

.container {
  position: relative;
  display: block;
  height: 190px;
  width: 100%;
  margin: 0 auto 0;
  color: rgba(255, 255, 255, 0.87);
  background-color: #43a18d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.monthly-in-out {
  position: relative;
  display: flex;
  top: 130px;
  width: 100%;
  justify-content: space-evenly;
}

.deposit-histo {
  position: relative;
  top: 20px;
  width: 6px;
  height: 0;
  display: block;
  border-radius: 3px;
  background-color: #4c7b89;
  z-index: 2;
}

.withdrawal-histo {
  position: relative;
  top: 20px;
  width: 6px;
  height: 0;
  display: block;
  border-radius: 3px;
  background-color: #c6cbc6;
  z-index: 2;
}

div.month-label-box a {
  display: block;
  cursor: pointer;
  color: rgba(0, 0, 0, 0);
}

.histogram {
  display: inline-flex;
  width: 100%;
  justify-content: center;
}

.month-label-box {
  position: absolute;
  display: flex;
  justify-content: center;
}

.month-label {
  top: 30px;
  position: relative;
  display: block;
  text-align: center;
  padding: 4 0 3;
  height: 25px;
  font-size: 0.75em;
}

.month {
  position: relative;
  display: block;
  width: 50px;
  justify-content: center;
}

.container-body {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto 0;
  color: rgba(255, 255, 255, 0.87);
  background-color: #eceeed;
  box-shadow: 0 1px 1px rgb(0, 0, 0, 0.12), 0 1px 1px rgb(0, 0, 0, 0.12);
}

.in-out-row {
  position: relative;
  display: inline-flex;
  height: 60px;
  width: 100%;
  margin: 0 auto 0;
  justify-items: auto;
  color: rgba(255, 255, 255, 0.7);
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgb(0, 0, 0, 0.12);
}

.month-withdrawal,
.month-deposit {
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 0 auto 0;
  padding: inherit;
  color: rgba(51, 52, 53, 0.336);
  background-color: #ffffff;
  border: 1px solid rgb(0, 0, 0, 0.12);
  text-align: center;
}

.deposit-text {
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 30px;
  margin: 0 auto 0;
  font-size: 0.975em;
  color: rgba(51, 52, 53, 0.58);
}

.transaction-line {
  position: relative;
  display: inline-block;
  width: 70%;
  text-align: left;
}

.deposit-amount {
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 25px;
  margin: 0 auto 0;
  font-size: 0.9em;
  color: rgba(23, 128, 93, 0.7);
}

.detail .deposit-amount {
  text-align: right;
}

.withdrawal-text {
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 30px;
  margin: 0 auto 0;
  font-size: 0.975em;
  color: rgba(51, 52, 53, 0.58);
}

.withdrawal-amount {
  position: relative;
  display: inline-block;
  line-height: 25px;
  width: 100%;
  margin: 0 auto 0;
  font-size: 0.9em;
  color: rgba(51, 52, 53, 0.58);
}

.detail .withdrawal-amount {
  text-align: right;
}

.border-line {
  position: relative;
  display: inline-block;
  top: 1px;
  left: 4px;
  margin: 0 auto 0;
  padding: 2px 0 3px;
  font-size: 0.75em;
  color: rgba(0, 0, 0, 0.6);
}

.statements {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto 0;
  padding: unset;
  color: rgba(255, 255, 255, 0.87);
  background-color: #f0f5f3;
}

.deposit {
  position: relative;
  display: block;
  width: 100%;
  height: 33px;
  margin: 0 auto 0;
  background-color: #f5fafa;
}

.withdrawal {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 33px;
  margin: 0 auto 0;
  background-color: #ffffff;
}

.detail {
  position: relative;
  display: flex;
  overflow: auto;
  justify-content: space-between;
  width: 98%;
  top: 1px;
  margin: 0 auto 0;
  padding: 2px 0 3px;
  color: rgba(0, 0, 0, 0.7);
}

.dep-type {
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.85em;
}

.place {
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.85em;
}

.d-withdrawal-amount {
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.85em;
}

.d-deposit-amount {
  color: rgba(23, 128, 93, 0.7);
  font-size: 0.85em;
}

.timestamp {
  color: rgba(145, 148, 150, 1);
  font-size: 0.85em;
}
</style>
