<template>
  <div id="app">
     <router-view></router-view>
     <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  /**v
   * 引入底部导航
  */
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'

    import {reqFoodTypes} from './api'

    export default {
      async mounted () {
        const result = await reqFoodTypes()
        console.log(result)
      },
      components: {
        FooterGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
     #app
       width 100%
       height 100%
       background #f5f5f5
       position relative
</style>