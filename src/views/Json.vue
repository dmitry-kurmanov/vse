<template>
    <div>
        JSON Editor
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class JSON extends Vue {}
    Vue.component("vse-json-view", JSON)
</script>