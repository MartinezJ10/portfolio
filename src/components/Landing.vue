<template>
  <div id="home" class="min-h-screen w-6xl flex justify-around items-center">
    <div>
      <h1 class="text-9xl font-light">
        Jorge <br />
        Martinez
      </h1>

      <p class="text-2xl mt-6 max-w-xl">
        Desarrollo soluciones tecnológicas que optimizan procesos y mejoran la
        <span class="font-bold" style="color: var(--color-primary)"
          >experiencia de usuario</span
        >. Mi enfoque: sistemas eficientes, intuitivos y con
        <span class="font-bold" style="color: var(--color-primary)"
          >interfaces atractivas</span
        >
        que convierten la funcionalidad en una experiencia clara y agradable.
      </p>
    </div>
    <div class="landing-element">
      <Tiles />
    </div>
  </div>
</template>

<script setup>
import Tiles from "../components/Tiles.vue";
</script>

<style></style>
