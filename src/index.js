import Vue from 'vue'
import App from './App.vue'
import store from './store'

export class Instance {
    constructor(rootSelector = null, options = null) {
        this.editor = new Vue({
            el: rootSelector,
            store,
            render: h => h( App, {
                props: {
                    options: options
                }
            })
        })
    }
}


export { default as Designer } from './views/Designer.vue'
export { default as Json } from './views/Json.vue'
export { default as Test } from './views/Test.vue'
export { default as Embed } from './views/Embed.vue'
