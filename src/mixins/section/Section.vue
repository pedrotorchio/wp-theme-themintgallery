<script>
import { TimelineMax } from 'gsap';
import Trigger from 'scroll-watcher';

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
                
                scrollOffset = scrollOffset || 100
                scrollEvent = scrollEvent || 'enter'

                new Trigger()
                    .watch(scrollTrigger, scrollOffset)
                    .on(scrollEvent, () => this.animationTimeline.play());
            }
            
        },
        getTimelineParameters() { // overload
            return {}
        },
        animate( timeline ){} // overload
    },
    mounted() {
        setTimeout(this.animation, 0);
    }
}
</script>
