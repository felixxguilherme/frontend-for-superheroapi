import { cloneDeep } from 'lodash'

import axios from 'axios'
const url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${process.env.VUE_APP_SUPERHERO_TOKEN}/`

const superHeroModule = {
    state: {
        heroesCollection: [],
        allHeroes: [],
        randomHeroes: []      
    },

    mutations: {
        ADD_HERO_TO_COLLECTION (state, payload) {
            state.heroesCollection.push(payload)
        },
        LOAD_ALL_HEROES (state, payload) {
            state.allHeroes.push(payload)
        },
        LOAD_RANDOM_HEROES_IDS (state, payload) {
            state.randomHeroes.push(payload)
        }
    },

    actions: {
        toggleHero ({ commit }, hero) {
            try {

                commit('ADD_HERO_TO_COLLECTION', hero)
                           
            } catch (error) {
                console.log(error)
            }
        },

        async loadAllHeroes ({ commit }, ids) {
            try {
                for (let i in ids) {
                    axios.get(url+`${ids[i]}`)
                    .then(response => {
                        commit('LOAD_ALL_HEROES', response.data)
                    })
                }
            } catch (error) {
                console.log(error)
            }
        },

        async loadRandomHeroesIds ({ commit }, max) {
            try {
                const arrayFinal = []
                for(let i = 0; i < 5; i++) {
                    arrayFinal[i] = Math.floor(Math.random() * max)

                }
                commit('LOAD_RANDOM_HEROES_IDS', arrayFinal)
            } catch (error) {
                console.log(error)
            }
        }
    },

    getters: {
        collection: (state) => cloneDeep(state.heroesCollection),
        allHeroes: (state) => cloneDeep(state.allHeroes),
        randomHeroesIds: (state) => cloneDeep(state.randomHeroes)
    }
}

export default superHeroModule