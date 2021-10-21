<template>

    
    <div class="slide__content" :style="{ 'borderTop' : '5px solid '+categoryColor }">
        <div class="slide__content_name" :style="{ 'backgroundColor': categoryColor}">
            <h3>{{ categoryName }}</h3>
        </div>
        <slot></slot>
    </div>
   

</template>

<script>
export default {

    props: {
        categoryColor: {
            type:String
        },
        categoryName: {
            type: String
        }
    }

}
</script>

<style lang="stylus">

.slide__content
    position relative
    text-align center
    width 80%

.slide__content_name
    position absolute
    height 2em
    width 10em

    color white
    font-size 1em

    top -32px
    left -25px

    border-radius 7px 7px 0px 7px

    display flex
    justify-content center
    align-items center

.VueCarousel-slide
    display flex
    justify-content center
    align-items center
.VueCarousel-navigation-button
    padding 0 !important
    color #7C9473 !important
    opacity 0.5 !important
.VueCarousel-navigation--disabled
    color white !important
.VueCarousel-pagination
    heigth 0px !important
.VueCarousel-dot-container
    margin 0 !important
.VueCarousel-dot
    margin 0 !important

</style>