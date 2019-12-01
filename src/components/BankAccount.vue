<template>
  <div class="wallet-frame">
    <menu-container v-bind:class="classObject"></menu-container>
    <div class="menu-row">
      <div id="menu-toggle" v-bind:class="classMenuToggle">
        <div class="hamburger">
          <span class="hamb-line"></span>
          <span class="hamb-line"></span>
          <span class="hamb-line"></span>
        </div>
        <div class="cross" v-on:click="menuToggle">
          <span class="cross-line"></span>
          <span class="cross-line"></span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="deposite-menu-row">
        <div class="deposite-menu-text">Deposite balance</div>
        <div class="balance">$150,005</div>
      </div>
      <!-- <canvas id="myBarChart"></canvas> -->
      <div class="monthly-in-out">
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo"></div>
            <div class="withdrawal-histo"></div>
          </div>
          <div class="month-label">Jan</div>
        </div>
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo"></div>
            <div class="withdrawal-histo"></div>
          </div>
          <div class="month-label">Feb</div>
        </div>
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo"></div>
            <div class="withdrawal-histo"></div>
          </div>
          <div class="month-label">Mar</div>
        </div>
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo"></div>
            <div class="withdrawal-histo"></div>
          </div>
          <div class="month-label">Apr</div>
        </div>
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo"></div>
            <div class="withdrawal-histo"></div>
          </div>
          <div class="month-label">May</div>
        </div>
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo"></div>
            <div class="withdrawal-histo"></div>
          </div>
          <div class="month-label">Jun</div>
        </div>
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo"></div>
            <div class="withdrawal-histo"></div>
          </div>
          <div class="month-label">Jul</div>
        </div>
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo"></div>
            <div class="withdrawal-histo"></div>
          </div>
          <div class="month-label">Aug</div>
        </div>
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo"></div>
            <div class="withdrawal-histo"></div>
          </div>
          <div class="month-label">Sep</div>
        </div>
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo current-deposite-histo"></div>
            <div class="withdrawal-histo current-withdrawal-histo"></div>
          </div>
          <div class="month-label month-label-fix">Oct</div>
        </div>
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo"></div>
            <div class="withdrawal-histo"></div>
          </div>
          <div class="month-label">Nov</div>
        </div>
        <div class="month">
          <div class="histogram">
            <div class="deposite-histo"></div>
            <div class="withdrawal-histo"></div>
          </div>
          <div class="month-label">Dec</div>
        </div>
      </div>
    </div>
    <div class="container-body">
      <div class="in-out-row">
        <div class="month-deposite">
          <div class="deposite-text">Deposite</div>
          <div class="deposite-amount">$66,383</div>
        </div>
        <div class="month-withdrawal">
          <div class="withdrawal-text">Withdrawal</div>
          <div class="withdrawal-amount">$23,215</div>
        </div>
      </div>
      <div class="border-line">Today</div>
      <ul class="statements">
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="dep-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">23/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$201</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">23/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$90</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">23/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$100</div>
          </div>
        </li>
      </ul>
      <div class="border-line">Yesterday</div>
      <ul class="statements">
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">22/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$120</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">22/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$750</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">22/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$2,500</div>
          </div>
        </li>
      </ul>
      <div class="border-line">This month</div>
      <ul class="statements">
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">23/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$500</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$2,123</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$90</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$7,500</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>

        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>

        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>
        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>

        <li class="withdrawal">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-withdrawal-amount">-$12,000</div>
          </div>
        </li>
        <li class="deposite">
          <div class="detail">
            <div class="">
              <span class="with-type">Card</span>
              <span class="place">London</span>
              <span class="timestamp">03/10/2019</span>
            </div>
            <div class="d-deposite-amount">-$100</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!--    <script>-->
  <!--    // var ctx = $('#myBarChart').html();-->
  <!--    var ctx = document.getElementById('myBarChart');-->
  <!--    // console.log('ctx:: ', ctx);-->
  <!--    // var myBarChart = new Chart(ctx, {-->
  <!--    //     type: 'bar',-->
  <!--    //     data: {-->
  <!--    //         labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],-->
  <!--    //         datasets: [{-->
  <!--    //             label: 'A店 来客数',-->
  <!--    //             data: [62, 65, 93, 85, 51, 66, 47],-->
  <!--    //             backgroundColor: 'rgba(219,39,91,0.5)',-->
  <!--    //         }, {-->
  <!--    //             label: 'B店 来客数',-->
  <!--    //             data: [55, 45, 73, 75, 41, 45, 58],-->
  <!--    //             backgroundColor: 'rgba(130,201,169,0.5)',-->
  <!--    //         }, {-->
  <!--    //             label: 'C店 来客数',-->
  <!--    //             data: [33, 45, 62, 55, 31, 45, 38],-->
  <!--    //             backgroundColor: 'rgba(255,183,76,0.5)',-->
  <!--    //         }, ],-->
  <!--    //     },-->
  <!--    //     options: {-->
  <!--    //         title: {-->
  <!--    //             display: true,-->
  <!--    //             text: '支店別 来客数',-->
  <!--    //         },-->
  <!--    //         scales: {-->
  <!--    //             yAxes: [{-->
  <!--    //                 ticks: {-->
  <!--    //                     suggestedMax: 100,-->
  <!--    //                     suggestedMin: 0,-->
  <!--    //                     stepSize: 10,-->
  <!--    //                     callback: function(value, index, values) {-->
  <!--    //                         return value + '人';-->
  <!--    //                     },-->
  <!--    //                 },-->
  <!--    //             }, ],-->
  <!--    //         },-->
  <!--    //     },-->
  <!--    // });-->
  <!--    </script>-->
</template>

<script id="renderd-js">
import { mapState } from 'vuex';
import MenuContainer from './common/MenuContainer';

export default {
  name: 'BankAccount',
  components: { MenuContainer },
  data: function() {
    return {
      isActive: false,
    };
  },
  props: {
    msg: String,
  },
  computed: {
    ...mapState(['transaction_histories']),
    classObject: function() {
      return {
        active: this.isActive,
      };
    },
    classMenuToggle: function() {
      return {
        open: this.isActive,
      };
    },
  },
  methods: {
    menuToggle: function() {
      console.log('transaction_histories: ', this.transaction_histories);
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
@media only screen {
  html {
    font-size: 14px;
  }
}

html {
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.87);
}

.wallet-frame {
  position: relative;
  background: #ffffff;
  border-radius: 5px;
  padding: 1px 0 40px 0;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.12), 0 1px 2px rgb(0, 0, 0, 0.24);
  transition: 0.3s ease;
}

.menu-container {
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  right: 0;
  transition: 0.5s ease;
  color: rgba(255, 255, 255, 0.87);
  background-color: #307a7e;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  -webkit-transition: 0.3s ease;
  z-index: 3;
  overflow: hidden;
  opacity: 0;
}

.menu-container.active {
  position: absolute;
  display: block;
  height: 100%;
  width: 33%;
  margin: 0 auto 0;
  /*color: rgba(255, 255, 255, 0.87);*/
  /*background-color: #05be77;*/
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);*/
  /*transition: 0.5s ease;*/
  /*-moz-transition: 0.5s ease;*/
  /*-o-transition: 0.5s ease;*/
  /*-webkit-transition: 0.5s ease;*/
  /*z-index: 3;*/
  opacity: 1;
}

.container {
  position: relative;
  display: block;
  height: 170px;
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
  top: 110px;
  width: 100%;
  justify-content: space-evenly;
}

.deposite-histo {
  position: relative;
  width: 6px;
  height: 20px;
  display: block;
  border-radius: 3px;
  background-color: #4c7b89;
  z-index: 2;
}

.blank-histo {
  position: relative;
  top: 5px;
  width: 6px;
  height: 15px;
  display: block;
  border-radius: 3px;
  background-color: rgb(255, 255, 255, 0);
  z-index: 2;
}

.withdrawal-histo {
  position: relative;
  top: 5px;
  width: 6px;
  height: 15px;
  display: block;
  border-radius: 3px;
  background-color: #c6cbc6;
  z-index: 2;
}

.current-deposite-histo {
  position: relative;
  top: -10px;
  width: 6px;
  height: 30px;
  background-color: #385a65;
}

.current-withdrawal-histo {
  position: relative;
  top: -25px;
  height: 45px;
  background-color: #ffffff;
}

.histogram {
  display: inline-flex;
  width: 100%;
  justify-content: center;
}

.month-label {
  display: block;
  text-align: center;
  padding: 4 0 3;
  height: 25px;
  font-size: 0.75em;
}

.month-label-fix {
  position: absolute;
  display: block;
  top: 30px;
  text-align: center;
  height: 25px;
  width: 100%;
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
.month-deposite {
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

.deposite-text {
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 30px;
  margin: 0 auto 0;
  font-size: 0.975em;
  color: rgba(51, 52, 53, 0.58);
}

.deposite-amount {
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
  color: rgba(0, 0, 0, 0.5);
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

.deposite {
  position: relative;
  display: block;
  width: 100%;
  height: 25px;
  margin: 0 auto 0;
  background-color: #f5fafa;
}

.withdrawal {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 25px;
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
  font-size: 0.7em;
}

.dep-type {
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.7em;
}

.place {
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.7em;
}

.d-withdrawal-amount {
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.7em;
}

.d-deposite-amount {
  color: rgba(23, 128, 93, 0.7);
  font-size: 0.7em;
}

.timestamp {
  color: rgba(145, 148, 150, 0.7);
  font-size: 0.7em;
}

.menu-row {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  top: 0;
  /*right: calc(38px - 100%);*/
  right: 34px;
  z-index: 3;
}

.deposite-menu-row {
  top: 15px;
  width: 100%;
  display: block;
  padding: 0 auto 0;
  position: absolute;
}

.deposite-menu-text {
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
</style>
