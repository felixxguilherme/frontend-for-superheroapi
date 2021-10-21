<template>

  <div class="container">

    <div class="herosearch__group">
      <input class="herosearch__input" type="search" @input="superHero = $event.target.value">
      <label class="herosearch__label"> Busque um herói ou heroína </label>
      <button class="herosearch__button" @click="searchHero">get !</button>    
    </div>

  </div>

</template>

<script>
export default {
  name: 'HelloHero',
  data () {
    return {
      items: [],
      superHero: ''
    }
  },

  methods: {
    searchHero () {
      this.$http.get(`search/${this.superHero}`)
      .then(
        response => {
          this.items = response.data.results
      })
    }
  },

  computed: {

    itemsCollection () {
      return this.$store.getters.collection
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
