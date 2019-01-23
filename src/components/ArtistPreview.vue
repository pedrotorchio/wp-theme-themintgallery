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
            if (!this.artist.gallery)
                return false;

            const pieces = this.artist.gallery.pieces;

            const rndIndex = () => Math.floor(Math.random() * pieces.length)
            const getImg = piece => piece.images && piece.images.length > 0 && piece.images[0]
            const imgSrc = i => {
                const piece = pieces[i % pieces.length]
                const img = getImg(piece)

                return img && {
                    placeholder: img.getImageSizeUrl('placeholder'),
                    thumbnail: img.getImageSizeUrl('thumbnail')
                }
                
            };
            
            let img1, img2;
            if (pieces.length > 0) {
                const i = rndIndex()

                img1 = img2 = imgSrc(i)

                if (pieces.length > 1)
                    img2 = imgSrc(i + 1)

            } else return false;

            return [ img1, img2 ]
        },
        categories() {
            const categories = this.artist.categories;
            return categories;
        }
    }
}
</script>
<template lang="pug">
    article
        div.imgs
            lazy-image.profile_pic( :src = "profilePicture.medium" :src-placeholder = "profilePicture.placeholder" )
                span.hover-phantom-effect( v-if = "categories" v-for = "(category, i) in categories" :key = "i") {{ `#${category.cat_name}` }}
            div.small-imgs( v-if = "thumbnails" )
                lazy-image( v-if = "thumbnails[0]" :src = "thumbnails[0].thumbnail" :src-placeholder = "thumbnails[0].placeholder" )
                lazy-image( v-if = "thumbnails[1]"  :src = "thumbnails[1].thumbnail" :src-placeholder = "thumbnails[1].placeholder" )

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

.profile_pic /deep/ .caption
        display: flex
        justify-content: center
        align-content: center
        align-items: center
        flex-direction: row
        flex-wrap: wrap
        font-size: $size--font-text

        span
            width: auto
            margin: 10px
            position: relative
            flex: 0 0 auto

</style>
