import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let debug = process.env.NODE_ENV !== 'production'

let state = {
    users: [
        {
            id: 1,
            name: 'Alida',
            text: 'Hai Ayu',
            timestamp: Date()
        },
        {
            id: 1,
            name: 'Alida',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            timestamp: Date()
        },
        {
            id: 2,
            name: 'Ayu',
            text: 'Hai',
            timestamp: Date()
        },{
            id: 2,
            name: 'Ayu',
            text: 'Hai',
            timestamp: Date()
        }
    ],
}

let getters = {

}

let mutations = {
    CHAT_MESSAGE(state, message) {
        state.users.push(message)
    }
}

let actions = {
    sendMessage (context, message) {
        context.commit('CHAT_MESSAGE', message)
    }

}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    // strict: debug
})
