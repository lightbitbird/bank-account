<template>
  <div class="menu">
    <div class="menu-container" v-bind:class="classObject" ref="menuContainer">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li>
          <router-link to="/login" class="menu-href">Login</router-link>
        </li>
        <li>
          <router-link to="/balance" class="menu-href">Balance</router-link>
        </li>
        <li>
          <router-link to="/transfer" class="menu-href">Transfer</router-link>
        </li>
        <li>
          <router-link to="/" class="menu-href">Point</router-link>
        </li>
        <li>
          <router-link to="/register" class="menu-href menu-href-register"
            >Register</router-link
          >
        </li>
      </ul>
    </div>
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
  </div>
</template>

<script id="renderd-js">
import { mapState } from 'vuex';

export default {
  name: 'menu-container',
  data: function() {
    return {
      isActive: false,
      bgColor: '',
    };
  },
  props: ['menuColor', 'msg'],
  computed: {
    ...mapState('balance', ['transaction_histories']),
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
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    this.$refs.menuContainer.style = this.menuColor
      ? `background-color: ${this.menuColor}`
      : '';
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

.menu-container {
  position: absolute;
  width: 0;
  height: 0;
  top: -1px;
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
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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

@media only screen and (min-width: 600px) {
  .menu-container.active {
    width: 340px;
  }
}

@media only screen and (min-width: 320px) and (max-width: 599px) {
  .menu-container.active {
    width: 100%;
  }
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

#menu-toggle {
  width: 38px;
  height: 38px;
  margin: 9px 0 0;
  right: 12px;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  z-index: 3;
}

#menu-toggle:hover {
  background: rgba(255, 255, 255, 0.8);
}

#menu-toggle .hamburger {
  position: absolute;
  height: 100%;
  width: 100%;
}

.hamb-line {
  display: block;
  background: #54706b;
  border-radius: 2px;
}

.cross-line {
  display: block;
  background: #54706b;
  border-radius: 2px;
}

#menu-toggle .hamburger span {
  width: 24px;
  height: 2px;
  position: relative;
  top: 6px;
  left: 7px;
  margin: 5px 0;
}

#menu-toggle .hamburger span:nth-child(1) {
  transition-delay: 0.5s;
}

#menu-toggle .hamburger span:nth-child(2) {
  transition-delay: 0.625s;
}

#menu-toggle .hamburger span:nth-child(3) {
  transition-delay: 0.75s;
}

#menu-toggle .cross {
  position: absolute;
  height: 100%;
  width: 100%;
  transform: rotate(45deg);
  z-index: 5;
}

#menu-toggle .cross span:nth-child(1) {
  width: 2px;
  height: 0%;
  position: absolute;
  top: 18%;
  left: 18px;
  transition-delay: 0s;
}

#menu-toggle .cross span:nth-child(2) {
  width: 0%;
  height: 2px;
  position: absolute;
  left: 18%;
  top: 18px;
  transition-delay: 0.25s;
}

#menu-toggle.open .hamburger span {
  width: 0%;
}

#menu-toggle.open .hamburger span:nth-child(1) {
  transition-delay: 0s;
}

#menu-toggle.open .hamburger span:nth-child(2) {
  transition-delay: 0.125s;
}

#menu-toggle.open .hamburger span:nth-child(3) {
  transition-delay: 0.25s;
}

#menu-toggle.open .cross span:nth-child(1) {
  height: 60%;
  transition-delay: 0.625s;
  background: #8f9567;
}

#menu-toggle.open .cross span:nth-child(2) {
  width: 60%;
  transition-delay: 0.375s;
  background: #8f9567;
}
</style>
