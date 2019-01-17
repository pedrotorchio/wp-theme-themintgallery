<script>
import Artist from '@/plugins/mint-fetcher/Artist';
import LazyImage from 'vue-hoverable-lazy-image'
import Section from '@/mixins/section/Section'
export default {
    extends: Section,
    components: { LazyImage },
    props: {
        artist: {
            type: Artist,
            required: true
        }
    },
    computed: {
        profilePicture() {
            return {
                medium: this.artist.profilePicture.sizes.medium.url.toString(),
                placeholder: this.artist.profilePicture.sizes.placeholder.url.toString()
            }
        }
    },
}
</script>
<template lang="pug">
    div.bio
        lazy-image.img( 
            :src-placeholder = "profilePicture.placeholder" 
            :src="profilePicture.medium" )
            h3.hover-phantom-effect {{ artist.name }}
        div.text.shown( ref = "text" v-html = "artist.bio" )
</template>

<style lang="sass" scoped>
@import '~@/styles/config'
@import '~media-query-mixins'

.bio
    display: flex
    flex-direction: column-reverse

    +md
        display: block

.img
    $height: 300px
    $space: 2em

    height: auto
    width: 100%
    margin-bottom: $space/2

    padding-bottom: 100%
    margin-top: 1em

    +md 
        float: left    
        width: $height
        height: $height
        margin-right: $space
        padding-bottom: 0
        margin-top: 0

    /deep/ h3
        bottom: 1em
        text-align: center
    
.text
    font-size: 18px
    line-height: 2em
    transition-property: color, text-shadow
    transition-duration: 2s
    transition-timing-function: cubic-bezier(0.7, -0.01, 0.15, 1.02)

    color: rgba($color--text, .05)
    text-shadow: 0 0 60px $color--text

    &.shown
        color: $color--text
        text-shadow: 0 0 0 transparent

    
    /deep/ 
        *
            color: inherit
            text-shadow: inherit
        p
            text-align: justify
            margin-bottom: 1em
            text-indent: 4em

</style>

