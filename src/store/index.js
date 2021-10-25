import {createStore} from 'vuex'
import {axiosInstance} from "../utils/axios";
import performance from 'perfist';
import {PERFORMANCE_BASE_URL} from "../config";

export default createStore({
    state: {
        userData: [],
    },
    mutations: {
        SET_POSTS(state, payload) {
            state.userData = payload
        }
    },
    actions: {
        GET_POSTS({commit}, payload) {
            axiosInstance('posts').then(res => {
                commit('SET_POSTS', res.data);
            })
        },
        SEND_PERFORMANCE_DATA({commit}, payload) {
            performance.analysePerformance(PERFORMANCE_BASE_URL)
        }
    },
    getters: {
        get_posts: (state) => state.userData,
    }
})
