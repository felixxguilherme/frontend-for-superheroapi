<template>
    <div class="hero__card" :class="{ minicard: !fullCard }">
        
        <div class="hero__card_img" :class="{ minicard: !fullCard }">
            <img :src="imgUrl" alt="img">        
        </div>
        <h3> {{ name }} </h3>              

        <div v-if="fullCard" class="hero__card_stats-item">            
            <label for="race">
                Raça
            </label>
            <p> {{ race }} </p>
        </div>

        <div v-if="!fullCard" class="">
            {{ power }} <br>
            {{ strength }}
        </div>

        <div v-if="fullCard" class="hero__card_stats">

            <div class="hero__card_stats-item">            
                <label for="power">
                    Poder
                </label>
                <p> {{ power }} </p>
            </div>

            <div class="hero__card_stats-item">
                <label for="intelligence">
                    Inteligência
                </label>
                <p> {{ intelligence }} </p>
            </div>

            <div class="hero__card_stats-item">            
                <label for="strength">
                    Força
                </label>
                <p> {{ strength }} </p>
            </div>

            <div class="hero__card_stats-item">            
                <label for="speed">
                    Velocidade
                </label>
                <p> {{ speed }} </p>
            </div>

        </div>

        <div v-if="fullCard" class="hero__card_button img" @click="addToCollection(item)">
            <img src="../assets/icons/add_circle.svg" alt="">
        </div>

        <div v-if="!fullCard" class="hero__card_button-view">
            <img src="../assets/icons/view_details.svg" alt="">
        </div>     

    </div>
</template>

<script>

export default {

    props: [
        'item',
        'imgUrl',
        'name',
        'intelligence',
        'strength',
        'speed',
        'power',
        'race',
        'fullCard'
    ],

    methods: {
        addToCollection (item) {
            this.$emit('updateCollection', item)
        }
    }

}
</script>

<style lang="stylus">

.minicard

    padding 0
    padding-bottom 1em

    img
        width 100%
        height 20%
    

.hero__card_button-view img
    cursor pointer
    width 2em
    height 2em
    position absolute
    right -10%
    bottom -14px
    opacity 0.5

    &:hover
        opacity 1

</style>