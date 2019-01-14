<script>
import Artist from '@/plugins/mint-fetcher/Artist'
import LazyImage from 'vue-hoverable-lazy-image';

export default {
    name: 'Artist',
    components: { LazyImage },
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    data: () => ({
        artist: null
    }),
    computed: {
        featured() {
            if (!this.artist)
                return;

            return {
                placeholder: this.artist.featured.sizes.placeholder.url.toString(),
                full: this.artist.featured.sizes.full.url.toString()
            }
        },
        signatureUrl() {
            return this.artist.signatureSVG && this.artist.signatureSVG.url
        }
    },
    methods: {
        async fetchData() {
            this.artist = await this.$fetcher.getArtist(this.slug)
        }
    },
    created() {
        this.fetchData();
    }
}
</script>
<template lang="pug">

    main
        div.hero
            lazy-image.img( v-if = "featured" :hoverable = "false" 
            :src-placeholder = "featured.placeholder" :src="featured.full" )
                svg( v-if = "signatureUrl" viewBox="0 0 18 18")
                    use( :xlink:href="signatureUrl")
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

    
</style>
