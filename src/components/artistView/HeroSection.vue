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
    div.hero
        lazy-image.img( 
            :hoverable = "false" 
            :src-placeholder = "featured.placeholder" 
            :src="featured.full" )

            svg( v-if = "false" viewBox="0 0 18 18")
            h1( v-else ) {{ artist.name }}
</template>
<style lang="sass" scoped>
@import '~@/styles/config'

.hero
    $height: calc(100vh - #{$size--header-height})
    height: $height
    .img
        height: 100%
        width: 100%
        object-fit: cover

        h1
            font-size: 48px
            text-transform: uppercase
            text-align: center
            line-height: $height
            color: white
            text-shadow: 6px 2px 15px #0b2e51
            font-family: impact
            letter-spacing: 5px

</style>
