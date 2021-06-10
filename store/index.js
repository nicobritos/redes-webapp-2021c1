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
            posts(state, payload){
                state.posts = payload;
            }
        },
        actions: {
        },
        modules: {
        }
    })
}

export default createStore
