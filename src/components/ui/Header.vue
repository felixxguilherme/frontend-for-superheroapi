<template>    
    <div class="header_top">
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

  computed: {
  }
}
</script>

<style>

</style>