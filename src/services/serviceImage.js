import axios from 'axios'

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

// let urlBase = 'http://localhost:3-'
let urlBase ='http://localhost:3000/'
export default {
    getImagen(){
        return axios.get(urlBase + 'imagen')
    },
    getImagenById(id){
        return axios.get(urlBase + 'imagen/' + id, headers)
    },
    addImagen(payload){
        return axios.post(urlBase + 'imagen/', payload, headers)
    },
    updateImagen(id, payload){
        return axios.put(urlBase + 'imagen/_id/' + id, payload, headers)

    },
    deleteImagen(id){
        return axios.delete(urlBase + 'imagen/_id/' + id, headers)
    }
}