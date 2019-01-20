<script>
import SliderSection from '@/components/homeView/SliderSection'
import HomeHeroSection from '@/components/homeView/HomeHeroSection'
import Logo from '@/components/Logo'
import Quote from '@/components/Quote'
export default {
  name: "home",
  components: { HomeHeroSection, SliderSection, Quote, Logo },
  data: () => ({
    slides: null,
    page: null
  }),
  methods: {
    async fetchData() {
      this.slides = await this.$fetcher.getSlide('home')
      this.page = await this.$fetcher.getPage('home')
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
      quote.quote( :quote = "page.quotes[0]" )
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
