<template>    
    <div v-intersect="{
            handler: onIntersect,
            options: {
                threshold: 0.3
            }
        }"
        class="header_top" :class="{ intersecting : !isIntersecting }">
        <router-link to="/">Home</router-link>
        <Collection />
    </div>
</template>

<script>
import Collection from '@/components/collection/Collection.vue'

export default {

  components: {
    Collection
  },

  data () {
    return {
      isIntersecting: false
    }
  },

  computed: {
  },

  methods: {
    onIntersect (entries) {
      this.isIntersecting = entries.forEach((entry) => {
        if (entry.intersectionRatio > 1) {
          entry.target.style.backgroundColor = 'black'
        } else {
          entry.target.style.backgroundColor = 'transparent'
        }
        
      })
    }
  }
}
</script>

<style lang="stylus">

.intersecting
  background-color white

</style>