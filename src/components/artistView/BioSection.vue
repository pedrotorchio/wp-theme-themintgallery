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
        div.text( v-html = "artist.bio" )
</template>

<style lang="sass" scoped>
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

    /deep/ p
        text-align: justify
        margin-bottom: 1em
        text-indent: 4em

</style>

