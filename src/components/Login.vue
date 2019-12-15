<template>
  <div class="row">
    <div class="input-container">
      <menu-container></menu-container>
      <div class="login">
        <h4 class="center">Log in</h4>
        <form action="" method="post" class="form" autocomplete="off">
          <div class="row">
            <div class="input-field">
              <input
                type="text"
                id="user"
                name="username"
                class="validate"
                required="required"
                placeholder="Username"
              />
              <label for="user" class="active">
                <i class="material-icons">person</i>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="input-field">
              <input
                type="password"
                id="pass"
                name="password"
                class="validate"
                required="required"
                placeholder="Password"
              />
              <label for="user" class="active">
                <i class="material-icons">lock</i>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="switch col s6">
              <label>
                <input type="checkbox" />
                <span class="lever"></span>
                Remember Me
              </label>
            </div>
          </div>
          <div class="row btn-row">
            <button
              type="submit"
              name="login"
              class="btn wave-effect waves-light"
            >
              Log in
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
  name: 'login',
  components: { MenuContainer },
  props: {
    msg: String,
  },
  computed: {
    ...mapState(['transaction_histories']),
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

h4 {
  font-size: 2.28rem;
  line-height: 110%;
  margin: 1.14rem 0 0.912rem 0;
}

.login h4 {
  font-weight: 200;
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

.row .switch {
  width: 100%;
  text-align: left;
}

.switch {
  margin-top: 7px;
}

.switch,
.switch * {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.switch label {
  cursor: pointer;
}

.switch label input[type='checkbox']:checked + .lever {
  background-color: rgb(79, 203, 224);
}

.switch label input[type='checkbox']:checked + .lever:before,
.switch label input[type='checkbox']:checked + .lever:after {
  left: 18px;
}

.switch label input[type='checkbox']:checked + .lever::after {
  background-color: rgb(50, 134, 155);
}

.switch label .lever {
  content: '';
  display: inline-block;
  position: relative;
  width: 36px;
  height: 14px;
  background-color: #818181;
  background-color: rgba(0, 0, 0, 0.38);
  border-radius: 15px;
  margin: 0 7px 0 -5px;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
  vertical-align: middle;
}

.switch label .lever:before,
.switch label .lever:after {
  content: '';
  position: absolute;
  display: inline-block;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  left: -5px;
  top: -3px;
  -webkit-transition: left 0.3s ease, background 0.3s ease,
    -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease,
    transform 0.1s ease, -webkit-box-shadow 0.1s ease,
    -webkit-transform 0.1s ease;
}

.switch label .lever:before {
  background-color: rgba(38, 166, 154, 0.15);
}

.switch label .lever:after {
  background-color: #f1f1f1;
  -webkit-box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);
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
