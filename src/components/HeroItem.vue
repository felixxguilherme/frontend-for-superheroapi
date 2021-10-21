<template>
    <div>
        <div class="hero__item">
            <div class="hero__item_avatar">
                <img :src="imageUrl" alt="img_hero-item">
            </div>

            <div class="hero__item_description">
                <p> {{ name }} </p>
                <p> {{ race }} </p>
                <div class="hero__item_icon-view">
                </div>          
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [
        'imageUrl',
        'name',
        'race'

    ]
}
</script>

<style>

</style>