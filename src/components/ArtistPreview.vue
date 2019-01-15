<script>
import Artist from '@/plugins/mint-fetcher/Artist';
import LazyImage from 'vue-hoverable-lazy-image';

export default {
    name: 'ArtistPreview',
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
                thumbnail: this.artist.profilePicture.sizes.thumbnail.url.toString()
            }
        },
        thumbnails() {
            const pieces = this.artist.gallery.pieces;

            const rndIndex = () => Math.floor(Math.random() * pieces.length)
            const imgSrc = i => pieces[i % pieces.length].images[0].url.toString();

            const i = rndIndex()

            const img1 = imgSrc(i)
            const img2 = imgSrc(i + 1)

            return [ img1, img2 ]
        }
    }
}
</script>
<template lang="pug">
    article
        div.imgs
            lazy-image.profile_pic( :src = "profilePicture.medium" :src-placeholder = "profilePicture.thumbnail" )
            div.small-imgs
                lazy-image( :src = "thumbnails[0]" )
                lazy-image( :src = "thumbnails[1]" )

        h4 {{ artist.name }}

</template>
<style lang="sass" scoped>
@import '~@/styles/config'

$img-size: 300px;
$space: $img-size/20
$sm-img-size: ($img-size - $space)/2

h4
    font-size: inherit
    margin: 1em
    margin-top: 2em
    color: $color--primary
    
article.ArtistPreview-root
    width: $img-size + $sm-img-size + $space
    box-sizing: content-box
    font-size: 24px
    padding: 2em
.imgs
    display: flex
    align-items: stretch
    justify-content: space-between

.profile_pic
    width: $img-size
    height: $img-size

.small-imgs 
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: stretch
    .hoverable-image
        width: $sm-img-size
        height: $sm-img-size

</style>
