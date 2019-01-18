<script>
import LazyImage from 'vue-hoverable-lazy-image'

function Slide (src, placeholder, title, ctaText, ctaRoute ) {
    this.img = {
        src,
        placeholder: placeholder,
    }
    this.cta = {
        text: ctaText,
        to: ctaRoute
    }
    this.title = title
} 
export default {
    name: 'Slider',
    components: { LazyImage },
    data: () => ({
        slides: []
    }),
    created() {
        
    }
}
</script>
<template lang='pug'>
    div
        transition( appear )
            div(
                v-for="slide in slides" :key="slide.id"
                class='slide'
                 )

                lazy-image( :src = "slide.img.src" :src-placeholder = "slide.img.placeholder" )
                h4( v-if = "slide.title" ) {{ slide.title }}
                router-link( v-if = "slide.cta" :to = "slide.cta.to" ) {{ slide.cta.text }}

      
</template>
<style lang='sass'>
#MyFirstSlideshow
  .eg-slideshow
    .eg-slide
      .eg-slide-content
        width: 25em
        max-width: 80%
        margin: 0 auto
  .eg-slide-content
    width: 25em
    max-width: 80%
    margin: 0 auto
  

</style>