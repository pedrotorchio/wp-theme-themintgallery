<script>
import TypeMaker from '@/plugins/mint-fetcher/TypeMaker'
import SliderSection from '@/components/homeView/SliderSection'
import HomeHeroSection from '@/components/homeView/HomeHeroSection'
import Logo from '@/components/Logo'
import Quote from '@/components/Quote'
import ArtistsList from '@/components/homeView/ArtistsList'
import GallerySection from '@/components/homeView/GallerySection'
import AcquireSection from '@/components/homeView/AcquireSection'
import JoinSection from '@/components/homeView/JoinSection'

export default {
  name: "home",
  components: { HomeHeroSection, SliderSection, Quote, Logo, ArtistsList, GallerySection, AcquireSection, JoinSection },
  data: () => ({
    slides: null,
    page: null,
    artists: []
  }),
  methods: {
    async fetchData() {
      this.slides = await this.$fetcher.getSlide('home')
      this.page = this.formatPage(await this.$fetcher.getPage('home'))
      this.artists = await this.$fetcher.getArtists()
    },
    formatPage(page) {
      page.data.gallery_featured_image = TypeMaker.makeImage(page.data.gallery_featured_image);
      page.data.shop_featured_image = TypeMaker.makeImage(page.data.shop_featured_image);

      return page
    }
  },
  created() {
    this.fetchData()
  }
};
</script>

<template lang="pug">
  div
    template( v-if = "page" )
      home-hero-section#hero( :page = "page" )
      artists-list(:artists = "artists")
      quote.quote( :quote = "page.quotes[0]" )
      gallery-section( :featured = "page.data.gallery_featured_image" :address = "page.data.gallery_address" :contact = "page.data.gallery_contact" )
      acquire-section( :featured = "page.data.shop_featured_image" :text = "page.data.shop_text" )
      join-section( :text = "page.data.join_text" :cta = "page.data.join_cta" )
      logo.middle-logo


</template>

<style lang="sass" scoped>
@import '~@/styles/config'
.quote
  color: #faf8f9

.middle-logo
  height: 400px
  padding: 50px 0
  background-color: $color--primary
</style>
