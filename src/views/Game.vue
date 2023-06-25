<template>
  <h1>Estamos en el Juego</h1>
  <p>{{ $route.params.name }}</p>
  <br>
  <button @click="load">Ir al home</button>
</template>

<script>
// import router from "@/router";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Game",
  setup() {
    const useRouterTest = useRoute();
    const router = useRouter();
    console.log("Hola mundo");
    console.log(router);
    console.log(useRouterTest.params);

    const load = () => {
      console.log('Ejecutando petición');
      setTimeout(() => {
        router.push({name: 'home'})
      }, 1000)
    }
    return {
      load
    }
  },
};
</script>

<style scoped></style>
