import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: {
                name: 'Neon'
            }
        }
    })
}

export default createStore;