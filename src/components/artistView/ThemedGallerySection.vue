<script>
import Gallery from './GallerySection'
export default {
    components: { Gallery },
    props: {
        gallery: {
            type: Object
        }
    }    
}
</script>
<template lang="pug">
    div( :id = "gallery.slug" )
        h4 {{ gallery.theme }}
        gallery( :gallery = "gallery.gallery" )
</template>

<style lang="sass" scoped>
h4
    font-size: 32px
    margin: 100px 0
    text-align: center
    font-family: impact
    letter-spacing: .1em

</style>

