<template>
  <div>
    <div>the dealway block {{dealway}}</div>
    <div> see the credit info {{useTest}}</div>
  </div>
</template>
<style>
</style>
<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },

    computed: {
        ...mapGetters('dealModule/', {
          dealway: 'dealway'
        }),
        ...mapGetters('creditModule/', {
          useTest: 'useTest'
        })
    },

    components: {
    }
  }
</script>
