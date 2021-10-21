import Vue from 'vue'
import Vuex from 'vuex'

import superHeroModule from './modules/superhero.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        superHeroModule: superHeroModule
    }
})