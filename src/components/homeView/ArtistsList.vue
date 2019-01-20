<script>
import LazyImage from 'vue-hoverable-lazy-image'
export default {
    components: { LazyImage },
    props: [ 'artists' ]
}
</script>
<template lang="pug">
    section
        div.inner-section
            h2.section-title Artists
            ul
                li( v-for = "(artist, i) in artists" :key = "i" )
                    router-link( :to = "{ name: 'Artist', params: { slug: artist.slug } }")
                        lazy-image.img( :src = "artist.profilePicture.getImageSizeUrl('medium')" :src-placeholder = "artist.profilePicture.getImageSizeUrl('placeholder')" )
                            span.hover-phantom-effect More Info
                        h3 {{ artist.name }}

</template>

<style lang="sass" scoped>

ul
    display: flex
    flex-wrap: wrap
    align-items: flex-start
    justify-content: flex-start
li
    padding: 0 1%
    flex: 0 0 (100% / 4)
.img
    width: 100%
    padding-bottom: 100%

    /deep/ span
        position: absolute
        top: 50%



h3
    text-transform: uppercase
    margin: 1em
</style>
