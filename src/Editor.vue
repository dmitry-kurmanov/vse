<template>
    <div>
        {{options.some}}
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
    export default class Editor extends Vue {}
</script>