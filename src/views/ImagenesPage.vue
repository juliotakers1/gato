<template>
  <div class="carousel" style="padding: 15px">
    <div class="row">
      <div v-for="item in imagenes" :key="item.id" class="col-3" >
        <img :src="item.url" :alt="a" class="img-fluid img_cat">
        <button @click="agregarAFavoritos(item)" class="btn btn-favorite btn-primary">
          <i class="fa-solid fa-star"></i> Agregar a favoritos
        </button>
      </div>
    </div>
    <div class="row mt-5">
      <h2>Imágenes Favoritas</h2>
      <div v-for="imagen in imagenesFavoritas" :key="imagen.id" class="col-3">
        <img :src="imagen.url" :alt="a" class="img-fluid img_cat">
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'GatosImagenesPage',
  setup() {
    const store = useStore();
    const imagenes = computed(() => store.state.imagenes);
    const imagenesFavoritas = computed(() => store.getters.getImagenesFavoritas);
    console.log(imagenesFavoritas.value, 'imsas');
    onMounted(async () => {
      await store.dispatch("obtenerImagenes");
    });

    const agregarAFavoritos = (imagen) => {
      store.dispatch("agregarAFavoritos", imagen);
    }

    return { imagenes, agregarAFavoritos, imagenesFavoritas };
  },
};
</script>

<style  scoped>
/* Puedes agregar estilos para el botón de favoritos aquí */
.btn-favorite {
  margin-top: 10px;
}
.img_cat {
  margin: 15px; 
  max-width: 350px; 
  max-height: 200px !important;

}
</style>
