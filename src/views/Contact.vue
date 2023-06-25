<template>
  <h1>Vista de Contacto de prueba</h1>
  <router-link to="/">Regresar</router-link>
  <br />
  <button @click="returnHome">REGRESA AL HOME</button>
</template>

<script setup>
import router from "@/router";
const self = this
const returnHome = () => {
  router.push({ name: "home" });
}
</script>

<style scoped></style>
