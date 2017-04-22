<template>
    <div>
        <button data-value="designer" @click="changeTab"> Survey Designer </button>
        <button data-value="json" @click="changeTab"> JSON Editor </button>
        <button data-value="test" @click="changeTab"> Test Survey </button>
        <button data-value="embed" @click="changeTab"> Embed Survey </button>

        <vse-designer-view v-show="$store.state.currentTab === 'designer'"/>
        <vse-json-view v-show="$store.state.currentTab === 'json'"/>
        <vse-test-view v-show="$store.state.currentTab === 'test'"/>
        <vse-embed-view v-show="$store.state.currentTab === 'embed'"/>
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