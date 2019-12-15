<template>
  <div class="top">
    <balance msg="Bank Account App" />
  </div>
</template>

<script>
import Balance from './Balance';
export default {
  name: 'top',
  components: { Balance },
  props: {
    msg: String,
  },
};
</script>
