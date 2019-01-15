<script>
import Artist from '@/plugins/mint-fetcher/Artist'
import HeroSection from '@/components/artistView/HeroSection';
import BioSection from '@/components/artistView/BioSection';
import GallerySection from '@/components/artistView/GallerySection';
import ThemedGallerySection from '@/components/artistView/ThemedGallerySection';

export default {
    name: 'Artist',
    components: { HeroSection, BioSection, GallerySection, ThemedGallerySection },
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
        hero-section( v-if = "artist" :artist = "artist" )
        bio-section.inner-section( v-if = "artist" :artist = "artist" )
        gallery-section#gallery.inner-section( v-if = "artist" :gallery = "artist.gallery" )
        template( v-if = "artist" )
            themed-gallery-section.inner-section( v-for = "(gallery, i) in artist.themedGalleries" :key = "i" 
                :gallery = "gallery"
                :id = "gallery.slug"
            )
                
</template>
<style lang="sass" scoped>

.bio
    margin: 100px 0

</style>
