import { createStore } from "vuex";
import servicioGato from "@/services/serviceGato";
import servicioImagen from "@/services/serviceImage";
export default createStore({
  state: {
    gatos: [],
    gato: {
      nombre: "",
      raza: "",
      edad: 0,
      fotoUrl: "",
    },
    imagenes: [],
    imagen: {
      codigo: "",
      url: "",
      favorito: "",
    },
    imagenesFavoritas: [],
  },
  mutations: {
    setGato(state,payload){
      state.gatos.push(payload)
      router.push('/medicos')
    },
    cargarGato(state,payload){
          state.gatos = payload
    },
    eliminarGato(state, payload){
          state.gatos = state.gatos.filter(item => item._id !==payload)
    },
    tGato(state,payload){
          if(!state.gatos.find(item => item._id === payload)){
        
            return
          }
          state.gato = state.gatos.find(item => item._id === payload)
    },
    updateGato(state, payload){
          state.gatos = state.gatos.map(item => item._id === payload._id ? payload : item)
          router.push('/gatos')
    },

    setImagen(state, payload){
      state.imagenes.push(payload);
      // router.push('/medicos')
    },
    cargarImagen(state,payload){
          state.imagenes = payload
    },
    eliminarImagen(state, payload) {
          state.imagenes = state.imagenes.filter(item => item._id !==payload)
    },
    tImagen(state,payload){
          if(!state.imagenes.find(item => item._id === payload)){
        
            return
          }
          state.imagen = state.imagenes.find(item => item._id === payload)
    },
    updateImagen(state, payload){
          state.imagenes = state.imagenes.map(item => item._id === payload._id ? payload : item)
          // router.push('/gatos')
    },
    AGREGAR_A_FAVORITOS(state, imagen) {
      if (!state.imagenesFavoritas.find((img) => img.id === imagen.id)) {
        state.imagenesFavoritas.push(imagen);
      }
    },
  
  },
  actions: {
    async obtenerGatos({commit}){
      return await servicioGato.getGato().then(response => {
        commit('cargarGato',response.data.gatos)
       
      }).catch((err) =>{
        console.log(err);
      })
    },
    async guardarGatos({commit}, gato){
      return await servicioGato.addGato(gato).then(response => {
        commit('setGato', gato)
        return response.data.data
        
      }).catch((err) =>{
        console.log(err);
      })
    },
     async eliminarGatos({commit},_id){

      return await servicioGato.deleteGato(_id).then(
        response => {
          commit('eliminarGato', _id)
          return response.data.data
        }
      ).catch((err) =>{
        console.log(err);
      })
    },
    verGato({commit},id){
      commit('tGato',id)
    },
   async  updateGatos({ commit }, payload ) {
  
      const id =payload._id
      
      return await servicioGato.updateGato(id, payload).then(response  => {
  
        commit('updateGato', payload)
        return response.data.data
  
      }).catch((err) =>{
        console.log(err); 
      })
    },
    async obtenerImagenes({commit}){
      return await servicioImagen.getImagen().then(response => {
        commit('cargarImagen',response.data)
        console.log(response);
       
      }).catch((err) =>{
        console.log(err);
      })
    },
    agregarAFavoritos({ commit }, imagen) {
      commit("AGREGAR_A_FAVORITOS", imagen);
    },
  },
  getters: {
    getImagenesFavoritas: (state) => {
      return state.imagenesFavoritas;
    },
  }
});
