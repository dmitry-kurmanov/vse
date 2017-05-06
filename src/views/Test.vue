<template>
    <div>
        <survey :survey='model'/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import * as Survey from 'survey-vue'

    @Component
    export default class Test extends Vue {
        get model () {
            return new Survey.Model(this.$store.state.json);
        }
    }
    Vue.component("vse-test-view", Test)
</script>