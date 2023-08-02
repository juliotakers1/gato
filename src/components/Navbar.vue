<template>
    <nav class="navbar navbar-expand-lg  bg-primary ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item" >
                <router-link  class="nav-link  text-white" aria-current="page"  to="/">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white" to="/imagenes">Imagenes</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white" to="/gatos" >Gatos</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
    name: 'GatosNavbar',
};
</script>

<style lang="scss" scoped>
</style>