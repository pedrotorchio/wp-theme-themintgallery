<script>
import Artist from '@/plugins/mint-fetcher/Artist';
import LazyImage from 'vue-hoverable-lazy-image';

export default {
    components: { LazyImage },
    props: {
        artist: {
            type: Artist,
            required: true
        }
    },
    computed: {
        featured() {

            return {
                placeholder: this.artist.featured.sizes.placeholder.url.toString(),
                full: this.artist.featured.sizes.full.url.toString()
            }
        },
    },
}
</script>
<template lang="pug">
    div.hero( :class = "{ 'no-img': !artist.featured }" )
        lazy-image.img(
            v-if = "artist.featured"
            :hoverable = "false" 
            :src-placeholder = "featured.placeholder" 
            :src="featured.full" )

        svg( v-if = "false" viewBox="0 0 18 18")
        h1( v-else ) {{ artist.name }}
</template>
<style lang="sass" scoped>
@import '~@/styles/config'
$height: calc(100vh - #{$size--header-height})

.hero
    position: relative
    height: $height

    display: flex
    align-items: center
    justify-content: center

    &.no-img
        height: 400px
    .img
        height: 100%
        width: 100%
        object-fit: cover

h1, svg
    position: absolute
    z-index: 999
h1
    text-align: center

    font-size: 48px
    text-transform: uppercase
    text-align: center
    
    color: white
    text-shadow: 6px 2px 15px #0b2e51
    font-family: impact
    letter-spacing: 5px

</style>
