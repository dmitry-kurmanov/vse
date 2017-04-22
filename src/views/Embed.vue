<template>
    <div>
        Embed Survey
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Embed extends Vue {}
    Vue.component("vse-embed-view", Embed)
</script>