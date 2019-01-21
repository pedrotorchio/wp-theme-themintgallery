<script>
import LazyImage from 'vue-hoverable-lazy-image'
import Section from '@/mixins/section/Section'
export default {
    name: 'ArtistsList',
    mixins: [ Section ],
    components: { LazyImage },
    props: [ 'artists' ],
    methods: {
        getTimelineParameters() {
            return {
                scrollOffset: -350
            }
        },
        animate(timeline) {
            timeline
                .staggerTo(this.$refs['artists'], .5, {
                    autoAlpha: 1,
                    y: 0
                }, .2)
        }
    }
}
</script>
<template lang="pug">
    section
        div.inner-section
            h2.section-title Artists
            ul
                li( ref = "artists" v-for = "(artist, i) in artists" :key = "i" )
                    router-link( :to = "{ name: 'Artist', params: { slug: artist.slug } }")
                        lazy-image.img( :src = "artist.profilePicture.getImageSizeUrl('medium')" :src-placeholder = "artist.profilePicture.getImageSizeUrl('placeholder')" )
                            span.hover-phantom-effect More Info
                        h3 {{ artist.name }}

</template>

<style lang="sass" scoped>
@import '~@/styles/config'
@import '~media-query-mixins'

ul
    display: flex
    flex-wrap: wrap
    align-items: flex-start
    justify-content: flex-start
li
    $margin: 2em
    visibility: hidden
    transform: translateY(10px)
    padding: 1%
    
    flex: 0 0 100%
    margin-bottom: 50px
    box-shadow: 0 0 10px 3px #00000024

    +md
        margin: 0 $margin
        flex: 0 0 calc(#{100% / 3} - #{$margin * 2})
.img
    width: 100%
    padding-bottom: 100%

    /deep/ span
        position: absolute
        top: 50%


h3
    text-transform: uppercase
    margin: 1em
    color: $color--primary !important
</style>
