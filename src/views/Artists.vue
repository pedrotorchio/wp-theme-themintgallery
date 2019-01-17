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
        },
        getArtistRoute(artist) {
            return { 
                name: 'Artist',
                params: { slug: artist.slug }
            }
        }
    },
    created() {
        this.fetchData();
    }
}
</script>
<template lang="pug">
    div.inner-section
        div.preview-container( v-for = "(artist, i) in artists" )
            preview( :artist = "artist" @click.native = "$router.push(getArtistRoute(artist))" )
</template>
<style lang="sass" scoped>
@import '~@/styles/config'
@import '~media-query-mixins'

$space: 50px
.Artists-root
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin: $space 0

.preview-container
    flex: 0 0 100%

    +md
        flex-basis: 50%

    border-bottom: 4px solid $color--primary
    margin-bottom: $space

    article
        margin: 0 auto

</style>
