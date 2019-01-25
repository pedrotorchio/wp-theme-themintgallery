<script>
import { TimelineMax } from 'gsap';
import Trigger from 'scrollmonitor';

export default {
    data: () => ({
        animationTimeline: null
    }),
    methods: {
        animation() {
            let { scrollTrigger, scrollOffset, scrollEvent, ...timelineParameters } = this.getTimelineParameters();

            // if scroll animation is NOT OFF
            if (scrollTrigger !== false) {
                // defaults animation trigger to root element
                if (!scrollTrigger)
                    scrollTrigger = this.$el
                // initially paused
                timelineParameters.paused = true

            }                

            const parameters = Object.assign({ onComplete: () => this.$emit('doneAnimating') }, timelineParameters);

            this.animationTimeline = new TimelineMax(parameters);
            this.animate(this.animationTimeline);
            
            // scroll event
            if (scrollTrigger) {
                // if not defined, set to -100
                scrollOffset = scrollOffset || -100
                // if is a number, transform into bottom property
                // otherwise, keep as is
                // scrollOffset = typeof scrollOffset == 'number' && { bottom: scrollOffset } || scrollOffset;

                scrollEvent = scrollEvent || 'enterViewport'

                const action = () => {
                    
                    this.animationTimeline.play()
                }
                Trigger.create(scrollTrigger, scrollOffset)[scrollEvent](action);
            }
            
        },
        getTimelineParameters() { // overload
            return {}
        },
        animate( timeline ){} // overload
    },
    mounted() {
        if (this.getTimelineParameters().automatic !== false)
            setTimeout(this.animation, 0);
    }
}
</script>
