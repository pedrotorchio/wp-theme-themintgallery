<script>
import AppHeader from '@/components/Header';
import AppFooter from '@/components/Footer';

export default {
  name: "AppRoot",
  components: { AppHeader, AppFooter }
}
</script>

<template lang="pug">
  div#app
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
