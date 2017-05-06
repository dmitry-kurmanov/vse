<template>
    <div>
        <textarea class="json-editor" @blur="changeJSON" >
            {{jsonString}}
        </textarea>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Json extends Vue {
        get jsonString () {
            return JSON.stringify(this.$store.state.json);
        }

        changeJSON (e) {
            this.$store.commit('changeJSON', JSON.parse(e.target.value))
        }
    }
    Vue.component("vse-json-view", Json)
</script>

<style scoped>
    .json-editor {
        width: 100%;
        height: 500px;
        margin: 50px;
    }
</style>