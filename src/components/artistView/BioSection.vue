<script>
import Artist from '@/plugins/mint-fetcher/Artist';
import LazyImage from 'vue-hoverable-lazy-image'

export default {
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
        },
        artistName() {
            return this.artist.name
        }
    }
}
</script>
<template lang="pug">
    div.bio
        lazy-image.img( 
            :src-placeholder = "profilePicture.placeholder" 
            :src="profilePicture.medium" )
            h3 {{ artistName }}
</template>

<style lang="sass" scoped>
.img
    $height: 300px
    width: $height
    height: $height

    .caption
        h3
            transition-property: transform, filter, opacity
            transition-duration: 4s
            transition-timing-function: cubic-bezier(0, 1.11, 0.4, 0.98)
            color: white
            opacity: 0
            transform: translateX(-60px)
            filter: blur(5px)
            position: absolute
            bottom: 1em
            text-align: center
            width: 100%

    .caption:hover
        h3
            filter: blur(0)
            opacity: 1
            transform: translateY(0px)
</style>

