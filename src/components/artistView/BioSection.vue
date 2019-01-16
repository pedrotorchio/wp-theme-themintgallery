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
    methods: {
        animate( timeline ) {
            timeline
                .addCallback(() => this.$refs['text'].classList.add('shown'))
        }
    }
}
</script>
<template lang="pug">
    div.bio
        lazy-image.img( 
            :src-placeholder = "profilePicture.placeholder" 
            :src="profilePicture.medium" )
            h3.hover-phantom-effect {{ artist.name }}
        div.text( ref = "text" v-html = "artist.bio" )
</template>

<style lang="sass" scoped>
@import '~@/styles/config'
.img
    float: left
    $height: 300px
    width: $height
    height: $height
    $space: 2em
    margin-right: $space
    margin-bottom: $space/2

    /deep/ h3
        bottom: 1em
        text-align: center
    
.text
    font-size: 18px
    line-height: 2em
    transition-property: color, text-shadow
    transition-duration: 2s
    transition-timing-function: cubic-bezier(0.7, -0.01, 0.15, 1.02)

    color: rgba($color--text, .1)
    text-shadow: 0 0 30px $color--text

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

