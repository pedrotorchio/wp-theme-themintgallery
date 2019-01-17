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
                placeholder: this.artist.profilePicture.sizes.placeholder.url.toString()
            }
        },
        thumbnails() {
            const pieces = this.artist.gallery.pieces;

            const rndIndex = () => Math.floor(Math.random() * pieces.length)
            const imgSrc = i => ({
                placeholder: pieces[i % pieces.length].images[0].sizes.placeholder.url.toString(),
                thumbnail: pieces[i % pieces.length].images[0].sizes.thumbnail.url.toString()
            })

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
            lazy-image.profile_pic( :src = "profilePicture.medium" :src-placeholder = "profilePicture.placeholder" )
            div.small-imgs
                lazy-image( :src = "thumbnails[0].thumbnail" :src-placeholder = "thumbnails[0].placeholder" )
                lazy-image( :src = "thumbnails[1].thumbnail" :src-placeholder = "thumbnails[1].placeholder" )

        h4 {{ artist.name }}

</template>
<style lang="sass" scoped>
@import '~@/styles/config'
@import '~media-query-mixins'

$img-size: 300px;
$space: $img-size/20
$sm-img-size: $img-size/2
article
    cursor: pointer
h4
    font-size: inherit
    margin: 1em
    margin-top: 2em
    color: $color--primary
    
article.ArtistPreview-root
    
    $fullWidth: $img-size + $sm-img-size + $space
 
    +md
        width: $fullWidth
        padding: 2em

    box-sizing: content-box
    font-size: 24px
    
.imgs
    display: flex
    align-items: stretch
    justify-content: space-between
    flex-direction: column

    +md
        flex-direction: row


.profile_pic
    
    width: 100%
    padding-bottom: 100%
    +md
        width: $img-size
        height: $img-size
        padding: 0

.small-imgs 
    display: flex
    flex-direction: row
    margin-top: $space
    +md
        margin-top: 0
        flex-direction: column
    justify-content: space-between
    align-items: stretch

    .hoverable-image
        $size: calc(50% - #{$space/2})
        width: $size
        padding-bottom: $size
        
        +md
            width: $sm-img-size
            padding-bottom: calc(100% - #{$space/2})

</style>
