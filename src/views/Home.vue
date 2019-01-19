<script>
import SliderSection from '@/components/homeView/SliderSection'
export default {
  name: "home",
  components: { SliderSection },
  data: () => ({
    slides: []
  }),
  methods: {
    async fetchData() {
      this.slides = await this.$fetcher.getSlides()
    }
  },
  created() {
    this.fetchData()
  }
};
</script>

<template lang="pug">
  div
    slider-section( :slides = "slides" )
</template>