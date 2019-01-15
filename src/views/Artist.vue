<script>
import Artist from '@/plugins/mint-fetcher/Artist'
import HeroSection from '@/components/artistView/HeroSection';
import BioSection from '@/components/artistView/BioSection';
import GallerySection from '@/components/artistView/GallerySection';
import ThemedGallerySection from '@/components/artistView/ThemedGallerySection';
import MiddleNavigation from '@/components/artistView/MiddleNavigation';

export default {
    name: 'Artist',
    components: { HeroSection, BioSection, MiddleNavigation, GallerySection, ThemedGallerySection },
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
        allGalleries() {
            let gallery = {
                slug: 'gallery',
                title: 'Main Gallery'
            }
            let themed = this.artist.themedGalleries.map( gl => ({
                title: gl.theme,
                slug: gl.slug
            }));

            return [ gallery, ...themed ];
        }
    },
    methods: {
        async fetchData() {
            this.artist = null
            this.artist = await this.$fetcher.getArtist(this.slug)
        }
    },
    watch: {
        '$route' (to, from) {
            this.fetchData();
        }
    },
    created() {
        this.fetchData();
    },
}
</script>
<template lang="pug">

    main
        template( v-if = "artist" )
            hero-section( :artist = "artist" )
            bio-section.inner-section( :artist = "artist" )
            middle-navigation.inner-section( :items = "allGalleries" )
            gallery-section#gallery.inner-section( :gallery = "artist.gallery" )
            themed-gallery-section.inner-section( v-for = "(gallery, i) in artist.themedGalleries" :key = "i" 
                :gallery = "gallery"
                :id = "gallery.slug"
            )
                
</template>
<style lang="sass" scoped>
.inner-section
    padding: 1em
.bio
    margin: 100px 0

</style>
