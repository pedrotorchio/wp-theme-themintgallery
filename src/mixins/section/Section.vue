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

            // defaults to root element triggered animation
            if (scrollTrigger !== false) {
                if (!scrollTrigger)
                    scrollTrigger = this.$el

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
        getTimelineParameters() {
            return {}
        },
        animate(){}
    },
    mounted() {
        setTimeout(this.animation, 0);
    }
}
</script>
