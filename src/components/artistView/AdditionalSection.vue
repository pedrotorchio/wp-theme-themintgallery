<script>
export default {
    props: {
        data: {
            type: Object
        }
    }    
}
</script>
<template lang="pug">
    section
        div.inner-section( v-html = "data.text" )
</template>
