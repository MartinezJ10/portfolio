<template>
  <div
    class="min-h-screen w-full flex flex-col px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 relative overflow-hidden"
  >
    <!-- Header -->
    <div
      class="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-6 pt-24 md:pt-32"
    >
      <!-- Back Button -->
      <div
        class="fixed top-6 left-6 md:top-10 md:left-10 z-50 w-14 h-14 md:w-20 md:h-20 p-4 md:p-5 rounded-full bg-black flex justify-center items-center"
      >
        <a href="/">
          <img
            class="w-6 md:w-10 cursor-pointer"
            src="/img/flecha.png"
            alt="back"
          />
        </a>
      </div>

      <!-- Title -->
      <h1
        class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-center md:text-left"
      >
        JUDUCA Honduras 2025
      </h1>
    </div>

    <!-- Content -->
    <div
      class="flex flex-col md:flex-row justify-between items-center md:items-start mt-12 md:mt-20 gap-12"
    >
      <!-- Left Text -->
      <div
        class="flex flex-col w-full md:w-[42rem] gap-6 md:ml-10 lg:ml-20 xl:ml-28"
      >
        <p
          class="text-lg sm:text-xl md:text-2xl leading-relaxed text-justify md:text-left"
        >
          Formé parte del equipo encargado del análisis, diseño e implementación
          de un sistema de gestión para los Juegos Deportivos Universitarios
          Centroamericanos (UNAH 2025), encargándose de la organización y el
          control del evento.
        </p>

        <div>
          <h3 class="text-2xl sm:text-3xl font-bold mt-4">Stack Utilizado</h3>
          <div class="flex flex-wrap gap-8 sm:gap-12 mt-6">
            <div class="flex items-center justify-start gap-3 sm:gap-4">
              <img class="w-10 sm:w-12" src="/img/vue.png" alt="Vue" />
              <span class="text-lg sm:text-xl">Vue</span>
            </div>
            <div class="flex items-center justify-start gap-3 sm:gap-4">
              <img class="w-10 sm:w-12" src="/img/html.png" alt="HTML" />
              <span class="text-lg sm:text-xl">HTML+CSS+JS</span>
            </div>
            <div class="flex items-center justify-start gap-3 sm:gap-4">
              <img class="w-10 sm:w-12" src="/img/node.png" alt="Node" />
              <span class="text-lg sm:text-xl">Node</span>
            </div>
            <div class="flex items-center justify-start gap-3 sm:gap-4">
              <img class="w-10 sm:w-12" src="/img/express.png" alt="Express" />
              <span class="text-lg sm:text-xl">Express</span>
            </div>
            <div class="flex items-center justify-start gap-3 sm:gap-4">
              <img class="w-10 sm:w-12" src="/img/sql.png" alt="SQL Server" />
              <span class="text-lg sm:text-xl">SQL Server</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Background Image (Desktop) -->
      <div
        class="hidden md:flex h-full right-0 top-0 -z-10 w-1/3 absolute justify-center items-center"
        style="background-color: var(--color-secondary)"
      >
        <img
          class="w-60 md:w-72 lg:w-80 opacity-90"
          src="/img/isotipojuduca1.png"
          alt="Isotipo"
        />
      </div>

      <!-- Mobile Image -->
      <div
        class="flex md:hidden justify-center items-center w-full mt-10 rounded-xl py-10"
        style="background-color: var(--color-secondary)"
      >
        <img class="w-40 sm:w-60" src="/img/isotipojuduca1.png" alt="Isotipo" />
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-6 hidden sm:block left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    >
      <span
        class="text-sm sm:text-base md:text-lg mb-2 tracking-wide"
        style="color: var(--color-secondary)"
        >Echa un vistazo</span
      >
      <div
        class="w-5 sm:w-6 h-8 sm:h-10 border-2 rounded-full flex justify-center"
        style="border-color: var(--color-secondary)"
      >
        <div
          class="w-1 h-2 sm:h-3 rounded-full animate-bounce-slow mt-1"
          style="background-color: var(--color-secondary)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
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
