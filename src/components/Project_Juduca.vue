<template>
  <div class="min-h-screen w-8xl flex flex-col">
    <div class="flex justify-around gap-6 p-15">
      <div
        class="fixed top-15 left-25 z-9999 w-20 h-20 p-5 rounded-full bg-black flex justify-center items-center"
      >
        <a href="/">
          <img class="w-10 cursor-pointer" src="/img/flecha.png" alt="" />
        </a>
      </div>
      <h1 class="text-8xl font-light">JUDUCA Honduras 2025</h1>
    </div>
    <div class="flex justify-evenly">
      <div class="flex flex-col w-xl gap-6">
        <div>
          <p class="text-2xl font">
            Formé parte del equipo encargado del análisis, diseño e
            implementación de un sistema de gestión para los Juegos Deportivos
            Universitarios Centroamericanos (UNAH 2025), encargándose de la
            organización y el control del evento.
          </p>
        </div>
        <div>
          <h3 class="text-3xl font-bold">Stack Utilizado</h3>
          <div class="flex gap-18 mt-4">
            <div class="flex items-center justify-start gap-4">
              <img class="w-12" src="/img/vue.png" alt="" /><span
                class="text-xl"
                >Vue</span
              >
            </div>
            <div class="flex items-center justify-start gap-4">
              <img class="w-12" src="/img/html.png" alt="" /><span
                class="text-xl"
                >HTML+CSS+JS</span
              >
            </div>
            <div class="flex items-center justify-start gap-4">
              <img class="w-12" src="/img/node.png" alt="" /><span
                class="text-xl"
                >Node</span
              >
            </div>
            <div class="flex items-center justify-start gap-4">
              <img class="w-12" src="/img/express.png" alt="" /><span
                class="text-xl"
                >Express</span
              >
            </div>
            <div class="flex items-center justify-start gap-4">
              <img class="w-12" src="/img/sql.png" alt="" /><span
                class="text-xl"
                >SQL Server</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="h-full right-0 top-0 -z-10 w-1/3"></div>
    </div>
    <div
      class="h-full absolute right-0 top-0 -z-10 w-1/3 flex justify-center items-center"
      style="background-color: var(--color-secondary)"
    >
      <img class="w-75" src="/img/isotipojuduca1.png" alt="" />
    </div>
    <div
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    >
      <span class="text-lg mb-2" style="color: var(--color-secondary)"
        >Echa un vistazo</span
      >
      <div
        class="w-6 h-10 border-2 rounded-full flex justify-center"
        style="border-color: var(--color-secondary)"
      >
        <div
          class="w-1 h-3 rounded-full animate-bounce-slow mt-1"
          style="background-color: var(--color-secondary)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 1.5s infinite;
}
</style>
