<script>
import Artist from '@/plugins/mint-fetcher/Artist'

export default {
    name: 'Artist',
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    data: () => ({
        artist: null
    }),
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
</template>
<style lang="sass" scoped>
@import '~@/styles/config'

.hero
    height: calc(100vh - #{$size--header-height})
    
    
</style>
