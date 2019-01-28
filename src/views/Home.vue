<script>
import TypeMaker from '@/plugins/mint-fetcher/TypeMaker'

const HomeHeroSection = ()=>import(/* webpackChunkName: "HomeHero" */ '@/components/homeView/HomeHeroSection.vue')
const Logo = ()=>import(/* webpackChunkName: "Logo" */ '@/components/Logo')
const Quote = ()=>import(/* webpackChunkName: "Quote" */ '@/components/Quote')
const ArtistsList = ()=>import(/* webpackChunkName: "ArtistsList" */ '@/components/homeView/ArtistsList')
const GallerySection = ()=>import(/* webpackChunkName: "Gallery" */ '@/components/homeView/GallerySection')
const AcquireSection = ()=>import(/* webpackChunkName: "Acquire" */ '@/components/homeView/AcquireSection')
const JoinSection = ()=>import(/* webpackChunkName: "Join" */'@/components/homeView/JoinSection')

export default {
  name: "home",
  components: { HomeHeroSection, Quote, Logo, ArtistsList, GallerySection, AcquireSection, JoinSection },
  data: () => ({
    page: null,
    artists: null
  }),
  methods: {
    async fetchData() {
      this.$loading.set(true);
      
      this.$fetcher.getPage('home')
        .then(page => {
          this.page = this.formatPage(page)
        })
        .catch(location.reload);
      this.$fetcher.getArtists()
        .then(artists => {
          this.artists = artists
        })
        .catch(location.reload);
    },
    formatPage(page) {
      page.data.gallery_featured_image = TypeMaker.makeImage(page.data.gallery_featured_image);
      page.data.shop_featured_image = TypeMaker.makeImage(page.data.shop_featured_image);

      return page
    },
    initiallyRendered() {
      this.$loading.add(100)
    }
  },
  created() {
    this.fetchData()
  }
};
</script>

<template lang="pug">
  div
      home-hero-section#hero( v-if = "page" :page = "page" @mounted = "initiallyRendered" )
      artists-list( v-if = "artists" :artists = "artists")
      template( v-if = "page")
        quote.quote( :quote = "page.quotes[0]" white )
        gallery-section( :featured = "page.data.gallery_featured_image" :address = "page.data.gallery_address" :contact = "page.data.gallery_contact" )
        acquire-section( :featured = "page.data.shop_featured_image" :text = "page.data.shop_text" )
        join-section( :text = "page.data.join_text" :cta = "page.data.join_cta" )


</template>

<style lang="sass" scoped>
@import '~@/styles/config'
.quote
  $internal: $color--primary
  $external: darken($color--primary, 30%)
  background: radial-gradient(#{$internal} 0%, #{$external} 80%, #{$external} 100%)

.middle-logo
  height: 400px
  padding: 50px 0
  background-color: $color--primary
</style>
