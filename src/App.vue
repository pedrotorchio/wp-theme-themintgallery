<script>
import AppHeader from '@/components/Header';
import AppFooter from '@/components/Footer';
import Loading from '@/components/Loading'

export default {
  name: "AppRoot",
  components: { AppHeader, AppFooter, Loading }
}
</script>

<template lang="pug">
  div#app
    transition( enter-to-class = "shown" enter-class = "entering" leave-class = "removing" leave-to-class = "removed" )
      loading( v-if = "$loading.state" )
    AppHeader#main-header
    div#content
      router-view
    AppFooter#main-footer
</template>

<style lang="scss">
@import "~css-reset-and-normalize/scss/reset-and-normalize.scss";
</style>
<style lang="sass">
@import "@/styles/global.sass"
</style>
<style lang="sass">
@import "@/styles/root.sass"
</style>
