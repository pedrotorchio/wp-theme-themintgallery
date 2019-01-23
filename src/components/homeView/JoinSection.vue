<script>
import BlockLink from '@/components/BlockLink'
import Section from '@/mixins/section-timeline/Timeline'
export default {
    name: 'Join',
    mixins: [ Section ],
    components: { BlockLink },
    props: [ 'text', 'cta' ],
    methods: {
        getTimelineParameters() {
            return {
                scrollOffset: -300,
                delay: .5
            }
        },
        animate( timeline ) {
            timeline
                .to(this.$refs['text'], 1, {
                    y: -50
                })
                .addCallback(()=>this.$refs['link'].$el.classList.add('shown'), "-=.8");
        } 
    }
}
</script>
<template lang="pug">
    section
        .inner-section
            .container
                p( ref = "text" v-html = "text" )
                block-link.link( ref = "link" :text = "cta" :url = "{ name: 'join' }")
            
</template>

<style lang="sass" scoped>
.container
    height: 100px
    position: relative
    p, .link
        position: absolute
        top: 50%
        top: calc(50% - .5em)
        display: block

p
    text-align: center
    font-size: 32px
    font-weight: 100
    width: 100%

.link
    text-transform: uppercase
    position: absolute
    margin: 0 auto
    padding: 0 1em
    left: 50%
    top: calc(50% - 1.25em)
    transform: translateX(-50%)

    /deep/
        $new-size: 2px
        .top, .bottom
            height: $new-size !important
        .left, .right
            width: $new-size !important

</style>
