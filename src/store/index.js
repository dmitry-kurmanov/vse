import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        json: {
            pages: [
                {
                    name: "page1"
                }
            ]
        }
    }/*,
    getters: {
        todosBySelectedDate: (state, getters) => {
            return state.todos.filter(todo => todo.date === state.selectedDate)
        }
    },
    mutations: {
        changeSelectedDate (state, newDate) {
            state.selectedDate = newDate
        }
    }*/
})

export default store