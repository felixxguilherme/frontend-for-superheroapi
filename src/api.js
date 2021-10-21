import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${process.env.VUE_APP_SUPERHERO_TOKEN}/`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
    }
})