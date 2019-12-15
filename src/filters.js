import Vue from 'vue';

export default Vue.filter('numberFormat', function(value) {
  return value.toLocaleString();
});
