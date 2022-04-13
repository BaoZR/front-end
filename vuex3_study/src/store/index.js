import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    add(context,val){
        // console.log("action 中的加被调用了");
        context.commit('ADD',val);
    }
}
const mutations = {
    ADD(state,val){
        // console.log('mutation 中的加被调用了')
        state.sum += val
    }
}
const getters = {
    bigSum(state){
        return state.sum * 10;
    }
}

const state = {
    sum:1,
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
