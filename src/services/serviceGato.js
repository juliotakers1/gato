import axios from 'axios'

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

// let urlBase = 'http://localhost:3-'
let urlBase ='http://localhost:3000/'
export default {
    getGato(){
        return axios.get(urlBase + 'gato')
    },
    getGatoById(id){
        return axios.get(urlBase + 'gato/' + id, headers)
    },
    addGato(payload){
        return axios.post(urlBase + 'gato/', payload, headers)
    },
    updateGato(id, payload){
        return axios.put(urlBase + 'gato/_id/' + id, payload, headers)

    },
    deleteGato(id){
        return axios.delete(urlBase + 'gato/_id/' + id, headers)
    }
}