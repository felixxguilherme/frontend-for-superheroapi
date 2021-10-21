<template>
  <div class="home">

    <SearchHero />

    <NavBar />   

    <div class="home__main">
      
      <div class="home__main_cards">
        <HeroCard v-for="(item, index) in itemsFromStore" :key="index"
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
    </div>

    <div class="home__main">
      
      <SlideContent :categoryColor="categoryColors.mostviewed" categoryName="most viewed">
        <carousel :navigationEnabled="true" :perPage="3">
          <slide v-for="(item, index) in itemsFromStore" :key="index">
              <HeroCard
                :categoryColor="categoryColors.mostviewed"
                :fullCard="true"
                :imgUrl="item.image.url"
                :name="item.name"
                :intelligence="item.powerstats.intelligence"
                :strength="item.powerstats.strength"
                :speed="item.powerstats.speed"
                :power="item.powerstats.power"
                :race="item.appearance.race"

                :item="item"
                @updateCollection="toggleHero(item)"
              />
          </slide>
        </carousel>        
      </SlideContent>
          
    </div>

    <div class="home__main">
      
      <SlideContent :categoryColor="categoryColors.mostpopular" categoryName="most popular">
        <carousel :navigationEnabled="true" :perPage="3">
          <slide v-for="(item, index) in itemsFromStore" :key="index">
              <HeroCard
                :fullCard="true"
                :imgUrl="item.image.url"
                :name="item.name"
                :intelligence="item.powerstats.intelligence"
                :strength="item.powerstats.strength"
                :speed="item.powerstats.speed"
                :power="item.powerstats.power"
                :race="item.appearance.race"

                :item="item"
                @updateCollection="toggleHero(item)"
              />
          </slide>
        </carousel>        
      </SlideContent>
          
    </div>
  </div>

 
</template>

<script>
import HeroCard from '@/components/HeroCard.vue'
import SlideContent from '@/components/SlideContent'
import SearchHero from '@/components/SearchHero.vue'
import NavBar from '@/components/ui/NavBar.vue'

export default {
  name: 'Home',
  components: {
    SearchHero,
    NavBar,
    HeroCard,
    SlideContent
  },

  data () {
    return {
      categoryColors: {
        mostpopular: '#B980F0',
        toptrending: '#F5E79D',
        mostviewed: '#FE9898',
        foryou: '#E5FBB8'
      }
    }
  },

  methods: {
    toggleHero (item) {
      this.$store.dispatch('toggleHero', item)
    }
  },

  computed: {
    itemsFromStore () {
      return this.$store.getters.allHeroes
    }
  }
}
</script>
