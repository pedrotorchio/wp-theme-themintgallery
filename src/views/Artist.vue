<script>
import Artist from '@/plugins/mint-fetcher/Artist'
import HeroSection from '@/components/artistView/HeroSection';
import BioSection from '@/components/artistView/BioSection';

export default {
    name: 'Artist',
    components: { HeroSection, BioSection },
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
        bio-section( v-if = "artist" :artist = "artist" )
        
                
</template>
<style lang="sass" scoped>

    
</style>
