import Vue from 'vue'
import Editor from './Editor.vue'
import store from './store'

export class Instance {
    constructor(rootSelector = null, options = null) {
        this.editor = new Vue({
            el: rootSelector,
            store,
            render: h => h( Editor, {
                props: {
                    options: options
                }
            })
        })
    }
}
