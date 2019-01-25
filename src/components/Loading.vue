<script>
import Logo from '@/components/Logo'

export default {
    components: { Logo },
    computed: {
        progress() {
            return this.$loading.progressState/100
        },
        rotateAngle() {
            return 90 - this.progress*90
        }
    }
}
</script>
<template lang="pug">
    main
        logo.logo
        .progress( :style = "{ width: `${progress * 100}%` }" )
</template>
<style lang="sass" scoped>
@import '~@/styles/config'

.progress
    height: 10px
    width: 0
    left: 0
    bottom: 0
    position: absolute
    background-color: $color--primary
    transition: width .5s ease-out

.logo
    position: relative
    top: 50%
    transform: translateY(-50%)
    transition: transform .5s ease-out
main
    position: fixed
    top: 0
    left: 0
    height: 100vh
    width: 100vw
    background-color: white
    z-index: 99999999999
    transition: opacity .2s

    &.entering, &.removed
        opacity: 0
    &.shown, &.removing
        opacity: 1 !important
    
.logo /deep/ svg
    transform-origin: center
    transform: scale(1)
    animation: grow 10s alternate

@keyframes grow
    0%
        opacity: .2
        transform: scale(.2)
    100%
        opacity: 1
        transform: scale(1)

</style>
