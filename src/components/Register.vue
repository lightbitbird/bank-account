<template>
  <div class="row">
    <div class="input-container">
      <menu-container :menu-color="'#787e7c'"></menu-container>
      <div class="register">
        <h4 class="center register-title">Bank Account Register</h4>
        <form action="" method="post" class="form" autocomplete="off">
          <div class="row">
            <div class="input-field register-username">
              <input
                type="text"
                id="username"
                name="username"
                class="validate"
                required="required"
                placeholder="Username"
              />
              <label for="username" class="active">
                <i class="material-icons">person_add</i>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="input-field register-password">
              <input
                type="password"
                id="pass-picked"
                name="passpicked"
                class="validate"
                required="required"
                placeholder="Password"
              />
              <label for="pass-picked" class="active">
                <i class="material-icons">lock</i>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="input-field email">
              <div class="col s12">
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="validate"
                  required="required"
                  placeholder="Your email"
                />
                <label for="email" class="active">
                  <i class="material-icons">mail</i>
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="input-field address">
              <div class="col s12">
                <input
                  type="text"
                  id="address"
                  name="address"
                  class="validate"
                  required="required"
                  placeholder="Address"
                />
                <label for="address" class="active">
                  <i class="material-icons">house</i>
                </label>
              </div>
            </div>
          </div>
          <div class="row btn-row">
            <button
              type="submit"
              name="btn-register"
              class="btn waves-effect waves-light"
            >
              Register
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
  name: 'register',
  components: { MenuContainer },
  data: function() {
    return {
      isActive: false,
    };
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
  background-color: #314d37;
  min-height: 400px;
  position: relative;
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

.register {
  /*top: -2px;*/
  /*left: 0;*/
  border: none;
  /*margin-top: 45px;*/
  background-color: #3e3f1b;
  background-color: #314d37;
  /*width: 100%;*/
  /*height: 740px;*/
  border-radius: 10px;
  /*position: absolute;*/
  transition: 0.3s ease;
}

.register h4 {
  font-weight: 200;
}

.row .input-field .register-username {
  transition-delay: 0.2s;
}

.row .input-field .register-password {
  transition-delay: 0.2s;
}

.row .input-field .register-email {
  transition-delay: 0.2s;
}

.row .btn-register {
  transition-delay: 0.2s;
}

.register-title {
  color: #fff;
  padding: 30px 0 0 0;
}

/*.register .register-username,*/
/*.register .register-password,*/
/*.register .email,*/
/*.register .address,*/
/*.register .btn-row {*/
/*  opacity: 0;*/
/*}*/

/*.register .register-title,*/
/*.register .register-username,*/
/*.register .register-password,*/
/*.register .email,*/
/*.register .address,*/
/*.register .btn-row {*/
/*  opacity: 1;*/
/*}*/

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
  color: #c1c1c1;
}

.input-field label {
  color: #c1c1c1;
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
  border-bottom: 1px solid #c1c1c1;
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
  color: #d8d8d8;
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
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}

.input-field .prefix {
  color: #000;
}

.btn-row {
  margin: 40px auto 30px;
  padding: 20px 0 15px;
  text-align: center;
}

.btn {
  text-decoration: none;
  color: #fff;
  background-color: #919191;
  text-align: center;
  letter-spacing: 1.2px;
  transition: 0.2s ease-out;
  cursor: pointer;
}

button:hover,
.btn:hover {
  background-color: #464c4d;
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
