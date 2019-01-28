<script>
import Preview from '@/components/ArtistPreview'
import Page from '@/mixins/Page'
export default {
    name: 'Artists',
    extends: Page,
    components: { Preview },
    data: () => ({
        artists: [],
        page: null
    }),
    methods: {
        async fetchData() {
            this.$loading.set(true)
            this.$fetcher.getPage('artists')
                .then( page => this.page = page )
            this.$fetcher.getArtists()
                .then( artists => {
                    this.onArtistsLoad(artists)
                    this.$loading.add(100)
                })
        },
        getArtistRoute(artist) {
            return { 
                name: 'Artist',
                params: { slug: artist.slug }
            }
        },
        onArtistsLoad(artists) {
            this.artists = artists;

            let catNames = {}
            artists
                .map( artist => artist.categories)
                .flat()
                .forEach( cat => catNames[cat.slug] = cat.cat_name)
            
            const cats = Object.values(catNames)
            
            this.addMeta('keywords', cats, (n, c) => [...n, ...c]);
        }
    },
    created() {
        this.fetchData();
    },
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
