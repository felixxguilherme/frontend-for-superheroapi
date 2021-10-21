<template>

  <div id="app">
      <Header/>
      <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {

  components: {
    Header
  },

  mounted() {
    let ids = ['1', '2', '3', '4', '5']
    this.$store.dispatch('loadAllHeroes', ids)
  }

}

</script>


<style lang="stylus">


</style>
