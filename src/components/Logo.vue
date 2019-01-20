<script>
import '@/components/svg/logo'
export default {
    
}
</script>
<template lang="pug">
    div.logo-container
        svgicon( name = "logo" :original = "true" )

</template>
<style lang="sass" scoped>
.logo-container
    height: 300px
    text-align: center
    svg
        height: 100%
</style>
