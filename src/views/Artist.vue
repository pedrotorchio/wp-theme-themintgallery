<script>
import Artist from '@/plugins/mint-fetcher/Artist'
import HeroSection from '@/components/artistView/HeroSection';
import BioSection from '@/components/artistView/BioSection';
import GallerySection from '@/components/artistView/GallerySection';
import ThemedGallerySection from '@/components/artistView/ThemedGallerySection';
import MiddleNavigation from '@/components/artistView/MiddleNavigation';
import AdditionalSection from '@/components/artistView/AdditionalSection';

export default {
    name: 'Artist',
    components: { HeroSection, BioSection, MiddleNavigation, GallerySection, ThemedGallerySection, AdditionalSection },
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
            let links = []

            let gallery = {
                slug: 'gallery',
                title: 'Main Gallery'
            }
            if (this.hasGallery)
                links.push(gallery)

            this.artist.themedGalleries.forEach( gl => {
                links.push({
                    title: gl.theme,
                    slug: gl.slug
                })
            });
            
            
            let additional = {
                slug: 'additional',
                title: 'Additional Information'
            }
            if (this.hasAdditional)
                links.push(additional)

            return links;
        },
        hasGallery() {
            return Boolean(this.artist.gallery && this.artist.gallery.pieces.length > 0)
        },
        hasAdditional() {
            return Boolean(this.artist.additionalSections && this.artist.additionalSections.length > 0)
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
            gallery-section#gallery.inner-section( v-if = "hasGallery" :gallery = "artist.gallery" )
            themed-gallery-section.inner-section( v-for = "(gallery, i) in artist.themedGalleries" :key = "`themed-${i}`" 
                :gallery = "gallery"
                :id = "gallery.slug"
            )
            h2#additional.inner-section( v-if = "hasAdditional" ) Additional Information
            additional-section( v-for = "(section, i) in artist.additionalSections" :key = "`section-${i}`" :data = "section" )
                
</template>
<style lang="sass" scoped>

.bio
    margin: 100px 0
h2
    font-size: 32px
    text-align: center
    padding: 0
    margin-top: 50px


</style>
