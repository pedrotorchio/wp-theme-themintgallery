<script>
import Artist from '@/plugins/mint-fetcher/Artist'
import HeroSection from '@/components/artistView/HeroSection';
import BioSection from '@/components/artistView/BioSection';
import GallerySection from '@/components/artistView/GallerySection';

export default {
    name: 'Artist',
    components: { HeroSection, BioSection, GallerySection },
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
        gallery-section.inner-section( v-if = "artist" :gallery = "artist.gallery" )
        
                
</template>
<style lang="sass" scoped>

.bio
    margin: 100px 0

</style>
