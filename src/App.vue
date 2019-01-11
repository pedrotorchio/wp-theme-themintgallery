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

<style lang="scss" src="css-reset-and-normalize/scss/reset-and-normalize.scss"></style>
<style lang="sass" src="@/styles/global.sass"></style>
<style lang="sass" src="@/styles/root.sass"></style>
