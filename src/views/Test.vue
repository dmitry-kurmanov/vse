<template>
    <div>
        Test Survey
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Test extends Vue {}
    Vue.component("vse-test-view", Test)
</script>