<template> 
  <div class="container">    
    <h1>SearchFor<br>
    Super Heroes</h1>

    <div class="herosearch__group">
      <input class="herosearch__input" type="search" @input="superHero = $event.target.value">
      <label class="herosearch__label"> Search for a hero / ine </label>
      <button class="herosearch__button" @click="searchHero">get !</button>    
    </div>

    <SlideContent>
        <carousel :navigationEnabled="true" :perPage="3">
          <slide v-for="(item, index) in items" :key="index">
              <div class="herosearch__results">
                <HeroCard
                    :fullCard="false"
                    :imgUrl="item.image.url"
                    :name="item.name"
                    :intelligence="item.powerstats.intelligence"
                    :strength="item.powerstats.strength"
                    :speed="item.powerstats.speed"
                    :power="item.powerstats.power"
                    :race="item.appearance.race"

                    :items="item"
                    />
              </div>
          </slide>
        </carousel>        
      </SlideContent>

    

  </div>
</template>

<script>

import HeroCard from './HeroCard.vue'
import SlideContent from './SlideContent.vue'

export default {
  name: 'HelloHero',
  components: {
    HeroCard,
    SlideContent
  },
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

h1
  color white
  font-size 3em

.herosearch__results
  display flex

</style>
