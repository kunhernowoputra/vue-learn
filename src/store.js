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
            text: 'Woy',
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
        }]
}

export default new Vuex.Store({
    state,
    strict: debug
})
