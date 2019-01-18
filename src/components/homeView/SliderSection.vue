<script>
import LazyImage from 'vue-hoverable-lazy-image'

function Slide (src, placeholder, title, ctaText, ctaRoute ) {
    this.img = {
        src,
        "src-placeholder": placeholder,
    }

} 
export default {
    name: 'Slider',
    components: { LazyImage }
}
</script>
<template lang='pug'>
    transition( appear )
        div(
            v-for="slide in slides" 
            class='slide'
            :key="slide.id" )

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