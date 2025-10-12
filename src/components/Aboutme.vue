<template>
  <section
    id="about"
    class="min-h-screen w-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-12"
  >
    <!-- Title -->
    <div class="text-center">
      <h1
        class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight"
      >
        ...y un poco sobre mí
      </h1>
    </div>

    <!-- Content -->
    <div
      class="flex flex-col-reverse lg:flex-row justify-between items-center gap-10"
    >
      <!-- Tiles / Visual -->
      <div class="flex justify-center w-full lg:w-1/2">
        <Tiles />
      </div>

      <!-- Text -->
      <div class="flex w-full lg:w-1/2 items-center">
        <p
          class="text-lg sm:text-xl md:text-2xl text-center lg:text-right text-[var(--color-dark)] leading-relaxed"
        >
          Más allá de la tecnología, me apasiona el deporte: practico atletismo,
          natación y entrenamiento de gimnasio. Mantengo el equilibrio entre
          mente y cuerpo, siempre en busca de nuevos retos.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import Tiles from "../components/Tiles.vue";
</script>

<style scoped>
#about {
  scroll-margin-top: 5rem;
}
</style>
