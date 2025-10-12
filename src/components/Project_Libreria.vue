<template>
  <div
    class="min-h-screen w-full flex flex-col relative px-6 sm:px-10 lg:px-20"
  >
    <!-- Header -->
    <div
      class="flex flex-col md:flex-row justify-center md:justify-around items-center gap-6 pt-20 md:pt-32"
    >
      <!-- Back Button -->
      <div
        class="fixed top-6 left-6 z-50 w-14 h-14 md:w-20 md:h-20 p-3 md:p-5 rounded-full bg-black flex justify-center items-center"
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
        class="text-4xl sm:text-5xl md:text-8xl font-light text-center md:text-left"
      >
        Librería Universitaria
      </h1>
    </div>

    <!-- Content -->
    <div
      class="flex flex-col md:flex-row justify-around lg:w-4xl items-center mt-12 md:mt-20 gap-12"
    >
      <!-- Text -->
      <div class="flex flex-col w-full md:w-xl gap-6 text-center md:text-left">
        <p class="text-lg sm:text-xl md:text-2xl leading-relaxed">
          Formé parte del equipo encargado del análisis y diseño de un sistema
          catálogo para la comercialización y visualización del vasto inventario
          que ofrece la Librería Universitaria en la UNAH
        </p>

        <div>
          <h3 class="text-2xl sm:text-3xl font-bold mt-4">Stack Utilizado</h3>
          <div
            class="flex flex-wrap justify-center md:justify-start gap-6 mt-4"
          >
            <div class="flex items-center gap-3">
              <img
                class="w-10 sm:w-12"
                src="/img/wireframes.png"
                alt="Wireframing"
              />
              <span class="text-lg sm:text-xl">Wireframing</span>
            </div>
            <div class="flex items-center gap-3">
              <img
                class="w-10 sm:w-12"
                src="/img/research.png"
                alt="User Research"
              />
              <span class="text-lg sm:text-xl">User Research</span>
            </div>
            <div class="flex items-center gap-3">
              <img
                class="w-10 sm:w-12"
                src="/img/DT.png"
                alt="Design Thinking"
              />
              <span class="text-lg sm:text-xl">Design Thinking</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Absolute Image -->
      <div
        class="hidden md:flex h-full absolute right-0 top-0 -z-10 w-1/3 justify-center items-center"
        style="background-color: var(--color-accent)"
      >
        <img class="w-95" src="/img/libreriaLogo.png" alt="Librería Logo" />
      </div>

      <!-- Mobile Image -->
      <div
        class="flex md:hidden justify-center items-center w-full mt-10 rounded-xl py-10"
        style="background-color: var(--color-accent)"
      >
        <img
          class="w-2/3 sm:w-3/4"
          src="/img/libreriaLogo.png"
          alt="Librería Logo"
        />
      </div>
    </div>
  </div>
</template>
