<template xmlns:div="http://www.w3.org/1999/html">
  <div class="wallet-frame">
    <menu-container></menu-container>
    <div class="container">
      <div class="deposit-menu-row">
        <div class="deposit-menu-text">Deposite balance</div>
        <div class="balance">
          ${{ transaction_histories.balance | numberFormat }}
        </div>
      </div>
      <div class="monthly-in-out">
        <div
          v-for="(history, key) in transaction_histories.totals.deposits.months"
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
              {{ transaction_histories.histories.months[key].month.name }}
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
      <div class="border-line" v-show="thisMonth === currentMonth">
        Today
      </div>
      <ul class="statements" v-show="thisMonth === currentMonth">
        <li
          v-for="(transaction, key) in transaction_histories.histories.today
            .transactions"
          :class="transaction.activity"
          :key="key"
        >
          <div class="detail">
            <div class="">
              <span class="dep-type">{{ transaction.operation }}</span
              >&nbsp;<span class="place">{{ transaction.place }}</span
              >&nbsp;
              <span class="timestamp">{{ transaction.timestamp }}</span>
            </div>
            <div :class="`d-${transaction.activity}-amount`">
              ${{ transaction.amount | numberFormat }}
            </div>
          </div>
        </li>
      </ul>
      <div class="border-line" v-show="thisMonth === currentMonth">
        Yesterday
      </div>
      <ul class="statements" v-show="thisMonth === currentMonth">
        <li
          v-for="(transaction, key) in transaction_histories.histories.yesterday
            .transactions"
          :class="transaction.activity"
          :key="key"
        >
          <div class="detail">
            <div class="">
              <span class="dep-type">{{ transaction.operation }}</span
              >&nbsp; <span class="place">{{ transaction.place }}</span
              >&nbsp;
              <span class="timestamp">{{ transaction.timestamp }}</span>
            </div>
            <div :class="`d-${transaction.activity}-amount`">
              ${{ transaction.amount | numberFormat }}
            </div>
          </div>
        </li>
      </ul>
      <div class="border-line">{{ currentMonthTitle }}</div>
      <ul class="statements">
        <li
          v-for="(transaction, key) in monthList.transactions"
          :class="transaction.activity"
          :key="key"
        >
          <div class="detail">
            <div class="">
              <span class="dep-type">{{ transaction.operation }}</span
              >&nbsp; <span class="place">{{ transaction.place }}</span
              >&nbsp;
              <span class="timestamp">{{ transaction.timestamp }}</span>
            </div>
            <div :class="`d-${transaction.activity}-amount`">
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
      currentMonth: moment().month(),
      thisMonth: moment().month(),
      monthList: {},
    };
  },
  props: {
    msg: String,
  },
  computed: {
    ...mapState('balance', ['transaction_histories']),
    styleWithdrawalHistogram() {
      return function(idx) {
        let style = '';
        if (this.maxWithdrawal > 0) {
          const height =
            (this.transaction_histories.totals.withdrawals.months[idx] * 50) /
            this.maxWithdrawal;
          const top = 20 - height;
          const current =
            this.currentMonth === idx
              ? 'background-color: #ffffff; border-radius: 3px;'
              : '';
          style = `top: ${top}px; height: ${height}px;${current}`;
        }
        return `${style}`;
      };
    },
    styleDepositHistogram() {
      return function(idx) {
        let style = '';
        if (this.maxDeposit > 0) {
          const height =
            (this.transaction_histories.totals.deposits.months[idx] * 50) /
            this.maxDeposit;
          const top = 20 - height;
          const current =
            this.currentMonth === idx
              ? 'background-color: #385a65; border-radius: 3px;'
              : '';
          style = `top: ${top}px; height: ${height}px;${current}`;
        }
        return `${style}`;
      };
    },
    currentMonthTitle() {
      return moment().month() === this.currentMonth
        ? 'This Month'
        : messages.monthNames[this.currentMonth];
    },
  },
  methods: {
    ...mapActions('balance', ['getBalance']),
    getCurrentTotalWithdrawal: function() {
      return this.transaction_histories.totals.withdrawals.months.length > 0
        ? `$${this.transaction_histories.totals.withdrawals.months[
            this.currentMonth
          ].toLocaleString()}`
        : 0;
    },
    getCurrentTotalDeposit: function() {
      return this.transaction_histories.totals.deposits.months.length > 0
        ? `$${this.transaction_histories.totals.deposits.months[
            this.currentMonth
          ].toLocaleString()}`
        : 0;
    },
    changeMonth: function(current) {
      this.currentMonth = current;
      this.monthList = this.transaction_histories.histories.months[
        this.currentMonth
      ].month;
    },
  },
  async mounted() {
    await this.getBalance();
    this.monthList = this.transaction_histories.histories.month;
    if (
      this.transaction_histories.totals.withdrawals &&
      this.transaction_histories.totals.withdrawals.months.length > 0
    ) {
      const max = Math.max(
        ...this.transaction_histories.totals.withdrawals.months
      );
      const min = Math.min(
        ...this.transaction_histories.totals.withdrawals.months
      );
      this.maxWithdrawal = max;
      this.minWithdrawal = min;
    }
    if (
      this.transaction_histories.totals.deposits &&
      this.transaction_histories.totals.deposits.months.length > 0
    ) {
      const max = Math.max(
        ...this.transaction_histories.totals.deposits.months
      );
      const min = Math.min(
        ...this.transaction_histories.totals.deposits.months
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

.deposit-amount {
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 25px;
  margin: 0 auto 0;
  font-size: 0.9em;
  color: rgba(23, 128, 93, 0.7);
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
