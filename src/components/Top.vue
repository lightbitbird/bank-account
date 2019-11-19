<template>
  <div class="top">
    <BankAccount msg="Bank Account App" />
  </div>
</template>

<script>
import BankAccount from './BankAccount';
export default {
  name: 'top',
  components: { BankAccount },
  props: {
    msg: String,
  },
};
</script>
