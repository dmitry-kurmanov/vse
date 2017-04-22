import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        json: {
            pages: [
                {
                    name: "page1"
                }
            ]
        },
        currentTab: 'designer' // ['designer', 'json', 'test', 'embed']
    },/*,
    getters: {
        todosBySelectedDate: (state, getters) => {
            return state.todos.filter(todo => todo.date === state.selectedDate)
        }
    }*/
    mutations: {
        changeCurrentTab (state, newTab) {
            state.currentTab = newTab
        }
    }
})

export default store