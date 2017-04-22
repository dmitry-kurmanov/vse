<template>
    <div>
        <textarea class="json-editor" @blur="changeJSON" >
            {{$store.state.json}}
        </textarea>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class JSON extends Vue {
        changeJSON (e) {
            this.$store.commit('changeJSON', e.target.value)
        }
    }
    Vue.component("vse-json-view", JSON)
</script>

<style scoped>
    .json-editor {
        width: 100%;
        height: 500px;
        margin: 50px;
    }
</style>