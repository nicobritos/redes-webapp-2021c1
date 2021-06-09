import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loggedIn: false,
            username: '',
            posts: []
        },
        mutations: {
            logIn(state, username) {
                state.loggedIn = true;
                state.username = username;
            },
            logOut(state){
                state.loggedIn = false;
                state.username = ''
            },
            post(state, payload){
                state.posts.unshift(payload)
            }
        },
        actions: {
        },
        modules: {
        }
    })
}

export default createStore