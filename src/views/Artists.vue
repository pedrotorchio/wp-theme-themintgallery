<script>
import Preview from '@/components/ArtistPreview'
export default {
    name: 'Artists',
    components: { Preview },
    data: () => ({
        artists: []
    }),
    methods: {
        async fetchData() {
            this.artists = await this.$fetcher.getArtists()
        }
    },
    created() {
        this.fetchData();
    }
}
</script>
<template lang="pug">
    div
        div.preview-container( v-for = "(artist, i) in artists" )
            preview( :artist = "artist" )
</template>
<style lang="sass" scoped>
@import '~@/styles/config'
$space: 50px
.Artists-root
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin: $space 0

.preview-container
    flex: 0 0 50%
    border-bottom: 4px solid $color--primary
    margin-bottom: $space

    article
        margin: 0 auto

</style>
