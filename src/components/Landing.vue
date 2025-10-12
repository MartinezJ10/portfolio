<template>
  <section
    id="home"
    class="min-h-screen w-full max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10"
  >
    <!-- Text Section -->
    <div class="text-center lg:text-left">
      <h1
        class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight"
      >
        Jorge <br />
        Martinez
      </h1>

      <p
        class="text-lg sm:text-xl md:text-2xl mt-6 max-w-2xl mx-auto lg:mx-0 text-[var(--color-dark)]"
      >
        Desarrollo soluciones tecnológicas que optimizan procesos y mejoran la
        <span class="font-bold text-[var(--color-primary)]"
          >experiencia de usuario</span
        >. Mi enfoque: sistemas eficientes, intuitivos y con
        <span class="font-bold text-[var(--color-primary)]"
          >interfaces atractivas</span
        >
        que convierten la funcionalidad en una experiencia clara y agradable.
      </p>
    </div>

    <!-- Floating Tiles / Hero Element -->
    <div class="flex justify-center items-center w-full lg:w-1/2">
      <Tiles />
    </div>
  </section>
</template>

<script setup>
import Tiles from "../components/Tiles.vue";
</script>

<style scoped>
#home {
  scroll-margin-top: 5rem;
}
</style>
