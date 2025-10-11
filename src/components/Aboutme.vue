<template>
  <div
    id="about"
    class="min-h-screen w-6xl flex flex-col justify-evenly items-center"
  >
    <div>
      <h1 class="text-8xl font-light">...y un poco sobre mi</h1>
    </div>
    <div class="flex justify-evenly gap-6">
      <div class="landing-element">
        <Tiles />
      </div>
      <div class="flex max-w-xl items-center">
        <p class="text-2xl text-right">
          Más allá de la tecnología, me apasiona el deporte: practico atletismo,
          natación y entrenamiento de gimnasio. Mantengo el equilibrio entre
          mente y cuerpo, siempre en busca de nuevos retos.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tiles from "../components/Tiles.vue";
</script>

<style></style>
