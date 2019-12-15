<template>
  <div class="row">
    <div class="input-container">
      <menu-container v-bind:class="classObject"></menu-container>
      <div class="login">
        <h4 class="center">Transfer</h4>
        <form action="" method="post" class="form" autocomplete="off">
          <div class="row">
            <div class="input-field">
              <input
                type="text"
                id="transfer_name"
                name="transfer_name"
                class="validate"
                required="required"
                placeholder="Transfer Name"
              />
              <label for="transfer_name" class="active">
                <i class="material-icons">store</i>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="input-field">
              <input
                type="text"
                id="account_number"
                name="account_number"
                class="validate"
                required="required"
                placeholder="Account Number"
              />
              <label for="account_number" class="active">
                <i class="material-icons">credit_card</i>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="input-field">
              <input
                type="text"
                id="deposit_subject"
                name="deposit_subject"
                class="validate"
                required="required"
                placeholder="Deposit Subject"
              />
              <label for="deposit_subject" class="active">
                <i class="material-icons">save</i>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="input-field">
              <input
                type="text"
                id="amount"
                name="amount"
                class="validate"
                required="required"
                placeholder="Amount"
              />
              <label for="amount" class="active">
                <i class="material-icons">monetization_on</i>
              </label>
            </div>
          </div>
          <div class="row btn-row">
            <button
              type="submit"
              name="transfer"
              class="btn wave-effect waves-light"
            >
              transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script id="renderd-js">
import { mapState } from 'vuex';
import MenuContainer from './common/MenuContainer';

export default {
  name: 'transfer',
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
@media only screen and (min-width: 0) {
  html {
    font-size: 1.4rem;
  }
}

html {
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.87);
}

.login-body {
  background-color: #818181;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.row {
  margin: 0 auto 40px;
}

@media only screen and (min-width: 601px) {
  .row {
    width: 80%;
  }
}

.input-container {
  background-color: whitesmoke;
  min-height: 400px;
  position: relative;
  border-top: 3px solid #307a7e;
  border-radius: 10px;
  margin-bottom: 100px;
  padding: 0 0.75rem;
}

.row .input-container {
  padding: 0 0.75rem;
  min-height: 1px;
}

.center {
  text-align: center;
}

.login {
  border: none;
  margin-top: 45px;
}

.signup {
  top: -2px;
  left: 0;
  background-color: #307a7e;
  position: absolute;
  width: 0;
  height: 0;
}

/* Show Signup */

.signup.active {
  width: 100%;
  height: 520px;
  border-radius: 10px;
  position: absolute;
  transition: 0.3s ease;
}

.row .input-field .signup-username {
  transition-delay: 0.2s;
}

.row .input-field .signup-password {
  transition-delay: 0.2s;
}

.row .input-field .signup-email {
  transition-delay: 0.2s;
}

.row .btn-signup {
  transition-delay: 0.2s;
}

.login h4,
.signup h4 {
  font-weight: 200;
}

h4 {
  font-size: 2.28rem;
  line-height: 110%;
  margin: 1.14rem 0 0.912rem 0;
}

.form {
  margin-top: 40px;
  display: inline-block;
  width: 100%;
}

.input-field {
  position: relative;
  margin-top: 1rem;
}

label {
  font-size: 1rem;
  color: #9e9e9e;
}

.input-field label {
  color: #9e9e9e;
  position: absolute;
  top: 0.8rem;
  left: 0;
  cursor: text;
  transition: 0.2s ease-out;
}

.input-field label.active {
  font-size: 0.8rem;
  -webkit-transform: translateY(-140%);
  transform: translateY(-140%);
}

.input-field input[type='text'],
.input-field input[type='password'] {
  border: none;
  border-bottom: 1px solid #9e9e9e;
  background-color: transparent;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 1.1rem;
  margin: 0 0 20px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
  transition: all 0.3s;
}

.input-field input[type='text']::-webkit-input-placeholder,
.input-field input[type='password']::-webkit-input-placeholder {
  color: #b9b8b8;
}

.input-field input[type='text']:focus,
.input-field input[type='password']:focus {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}

.input-field input[type='text']:focus + label,
.input-field input[type='password']:focus + label {
  color: #000;
}

.input-field input[type='text'].valid,
.input-field input[type='password'].valid {
  border-bottom: 1px solid #35949b;
  box-shadow: 0 1px 0 0 #35949b;
}

.input-field input[type='checkbox'] {
  box-sizing: border-box;
  padding: 0;
}

input[type='checkbox']:not(:checked),
input[type='checkbox']:checked {
  position: relative;
  left: -10px;
  opacity: 0;
}

.input-field .prefix.active {
  color: #000;
}

input[type='checkbox']:checked:not(:disabled) ~ .lever:active::before,
input[type='checkbox']:checked:not(:disabled).tabbed:focus ~ .lever::before {
  -webkit-transform: scale(2.4);
  transform: scale(2.4);
  background-color: rgba(38, 166, 154, 0.15);
}

input[type='checkbox']:not(:disabled) ~ .lever:active:before,
input[type='checkbox']:not(:disabled).tabbed:focus ~ .lever::before {
  -webkit-transform: scale(2.4);
  transform: scale(2.4);
  background-color: rgba(0, 0, 0, 0.08);
}

.switch input[type='checkbox'][disabled] + .lever {
  cursor: default;
  background-color: rgba(0, 0, 0, 0.12);
}

.switch label input[type='checkbox'][disabled] + .lever:after,
.switch label input[type='checkbox'][disabled]:checked + .lever:after {
  background-color: #949494;
}

.btn-row {
  margin: 80px auto 30px;
  padding: 20px 0 15px;
  text-align: center;
}

.btn {
  text-decoration: none;
  background-color: #256063;
  color: #fff;
  text-align: center;
  letter-spacing: 1.2px;
  transition: 0.2s ease-out;
  cursor: pointer;
}

button:hover,
.btn:hover {
  background-color: #388e92;
}

.btn {
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  display: inline-block;
  height: 40px;
  line-height: 36px;
  padding: 0 2rem;
  text-transform: uppercase;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
}

.btn {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
</style>
