<template>
  <div>
    <div>this is template body</div>
    <deal-way></deal-way>
  </div>
</template>
<style>
</style>
<script type="text/ecmascript-6">
  import DealWay from './components/DealWay.vue'
  import { postTest } from './common/ajax'
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      'deal-way': DealWay
    },
    mounted () {
      postTest().then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>
