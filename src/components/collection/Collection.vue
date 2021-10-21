<template>
  <div class="collection__modal">
      
    <div class="collection__modal_counter" @click="showItems = !showItems">
        <img src="../../assets/icons/view_carousel.svg" alt="favorites">
        <span> {{ myCollection.length }} </span>       
    </div>

    <div v-if="showItems && myCollection.length > 0">
        <div class="collection__modal_window">
            <div class="collection__modal_window-wrapper">

                <div v-if="showItems" class="collection__modal_filters">
                    <img src="../../assets/icons/marvelcomics_logo.svg" alt="marvelLogo">
                    <div class="collection__modal_filters-item">
                        <span> {{ filteredItems.marvel.length }} </span> 
                    </div>
                    <img src="../../assets/icons/dccomics_logo.svg" alt="dcLogo">
                    <div class="collection__modal_filters-item">
                        <span> {{ filteredItems.dc.length }} </span> 
                    </div>
                    <img src="../../assets/icons/others_logo.svg" alt="othersLogo">
                    <div class="collection__modal_filters-item">
                        <span> {{ filteredItems.others.length }} </span> 
                    </div>
                </div>

                <div class="collection__modal_window-container">

                    <HeroItem v-for="(item, index) in myCollection" :key="index"

                        :imageUrl="item.image.url"
                        :name="item.name"
                        :race="item.appearance.race"
                    
                    />

                </div>
                <button @click="showItems = !showItems">
                    fechar
                </button>               
            </div>
        </div>
    </div>
      
  </div>
</template>

<script>

import HeroItem from '@/components/HeroItem.vue'

export default {

    components: {
        HeroItem
    },

    data () {
        return {
            showItems: false,
            filteredItems: {
                marvel: [],
                dc: [],
                others: []
            }
        }
    },

    computed: {
        myCollection () {
            let collection = this.$store.getters.collection
            collection.filter((item) => {
                if (item.biography.publisher == "Marvel Comics") {                 
                    this.filteredItems.marvel.push(item)
                } else if (item.biography.publisher == "DC Comics") {
                    this.filteredItems.dc.push(item)
                } else {
                    this.filteredItems.others.push(item)
                }
            })

            return collection
        }
    },

    watch: {
    }

}
</script>

<style>

</style>