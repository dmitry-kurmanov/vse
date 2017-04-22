<template>
    <div>
        <button data-value="designer" @click="changeTab">Survey Designer</button>
        <button data-value="json" @click="changeTab">JSON Editor</button>
        <button data-value="test" @click="changeTab">Test Survey</button>
        <button data-value="embed" @click="changeTab">Embed Survey</button>

        <div v-show="$store.state.currentTab === 'designer'"> Survey Designer </div>
        <div v-show="$store.state.currentTab === 'json'"> JSON Editor </div>
        <div v-show="$store.state.currentTab === 'test'"> Test Survey </div>
        <div v-show="$store.state.currentTab === 'embed'"> Embed Survey </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        props: {
            options: {
                type: Object,
                default: null
            }
        }
    })
    export default class Editor extends Vue {
        changeTab (e) {
            this.$store.commit('changeCurrentTab', e.target.dataset.value)
        }
    }
</script>