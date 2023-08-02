<template>
    <div class="card container row mt-5 mx-4">
        <div class="row">

        
        <div class="col-5 ">
            <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Nombre</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Raza</label>
                  <input type="text" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Edad</label>
                    <input type="text" class="form-control" id="exampleInputPassword1">
                  </div>
                <button type="submit" class="btn btn-primary">Guardar</button>
              </form>
        </div>
        <div class="col-5 row">
            
                <div v-for="item in imagenesFavoritas" :key="item.id" class="col-3" >
                  <img :src="item.url" :alt="a" class=" img_cat mx-2">
                  <button @click="agregarUrl(item)" class="btn btn-favorite btn-primary">
                    <i class="fa-solid fa-star"></i> Agregar
                  </button>
                </div>
            
        </div>
    </div>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'GatosGatosPage',
  setup() {
    const store = useStore();
    const imagenes = computed(() => store.state.imagenes);
    const imagenesFavoritas = computed(() => store.getters.getImagenesFavoritas);
    console.log(imagenesFavoritas.value, 'imsas');
    onMounted(async () => {
      await store.dispatch("obtenerImagenes");
    });

    const agregarUrl = (imagen) => {
      store.dispatch("agregarAFavoritos", imagen);
    }

    return { imagenes, agregarUrl, imagenesFavoritas };
  },
};
</script>

<style  scoped>
.btn-favorite {
    margin-top: 10px;
  }
  .img_cat {
    margin: 10px; 
    max-width: 150px; 
    max-height: 100px !important;
  
  }
</style>