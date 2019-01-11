<script>
import AppHeader from '@/components/Header';

export default {
  name: "AppRoot",
  components: { AppHeader }
}
</script>

<template lang="pug">
  div#app
    AppHeader
    div#content
      router-view
</template>

<style lang="scss" src="css-reset-and-normalize/scss/reset-and-normalize.scss"></style>
<style lang="sass" src="@/styles/global.sass"></style>
<style lang="sass" src="@/styles/root.sass"></style>
