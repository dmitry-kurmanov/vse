<template>
    <div>
        <button @click="rerunSurvey">rerun survey</button>
        <survey :survey='model'/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import * as Survey from 'survey-vue'

    @Component
    export default class Test extends Vue {
        modelValue = null
        get model () {
            this.modelValue = new Survey.Model(this.$store.state.json)
            return this.modelValue;
        }

        rerunSurvey () {
            this.modelValue = new Survey.Model(this.$store.state.json)
        }
    }
    Vue.component("vse-test-view", Test)
</script>