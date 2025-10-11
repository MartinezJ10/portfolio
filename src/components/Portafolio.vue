<template>
  <div
    id="projects"
    class="min-h-screen w-6xl flex flex-col justify-evenly items-center"
  >
    <div>
      <h1 class="text-8xl font-light">portafolio</h1>
    </div>
    <div class="flex justify-center gap-6 text-white">
      <div class="flex flex-col">
        <div
          class="flex flex-col items-center px-15 py-5 gap-6 rounded-xl"
          style="background-color: var(--color-secondary)"
        >
          <span class="self-start text-3xl">JUDUCA 2025</span>
          <img class="w-50" src="/img/isotipojuduca1.png" alt="" />
          <a
            class="self-end text-2xl decoration-0 cursor-pointer"
            href="/projects/juduca/"
            >conocer más</a
          >
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center px-10 py-5 rounded-xl"
        style="background-color: var(--color-accent)"
      >
        <div class="flex flex-col gap-12 justify-evenly items-center">
          <span class="self-start text-3xl">Librería Universitaria</span>
          <img class="w-70" src="/img/libreriaLogo.png" alt="" />
          <a
            class="self-end text-2xl decoration-0 cursor-pointer"
            href="/projects/libreria-universitaria/"
            >conocer más</a
          >
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center px-10 py-5 rounded-xl"
        style="background-color: var(--color-primary)"
      >
        <div class="flex flex-col gap-6 justify-evenly items-center">
          <span class="self-start text-3xl">PROSENE</span>
          <img class="w-80" src="/img/proseneLogo.png" alt="" />
          <a
            class="self-end text-2xl decoration-0 cursor-pointer"
            href="/projects/prosene/"
            >conocer más</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
