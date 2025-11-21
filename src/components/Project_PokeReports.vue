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
        Pokemon Report Generator
      </h1>
    </div>

    <!-- Content -->
    <div
      class="flex flex-col md:flex-row justify-around lg:w-4xl items-center mt-12 md:mt-20 gap-12"
    >
      <!-- Text -->
      <div class="flex flex-col w-full md:w-xl gap-6 text-center md:text-left">
        <p class="text-lg sm:text-xl md:text-2xl leading-relaxed">
          Es una app que genera reportes CSV desde PokeAPI según el tipo y
          cantidad de Pokémon. Aunque la interfaz es sencilla, la
          infraestructura incluye Azure Web Apps para UI y API, una Azure
          Function para crear los reportes, una queue para procesarlos y Blob
          Storage para guardarlos. Todo se despliega usando contenedores Docker
          administrados en Azure Container Registry.
        </p>

        <div>
          <h3 class="text-2xl sm:text-3xl font-bold mt-4">Stack Utilizado</h3>
          <div
            class="flex flex-wrap justify-center md:justify-start gap-6 mt-4"
          >
            <div class="flex items-center gap-3">
              <img class="w-10 sm:w-12" src="/img/azure.png" alt="Azure" />
              <span class="text-lg sm:text-xl">Azure</span>
            </div>
            <div class="flex items-center gap-3">
              <img class="w-10 sm:w-12" src="/img/fastapi.png" alt="fastapi" />
              <span class="text-lg sm:text-xl">FastAPI</span>
            </div>
            <div class="flex items-center gap-3">
              <img class="w-10 sm:w-12" src="/img/react.png" alt="FastAPI" />
              <span class="text-lg sm:text-xl">React</span>
            </div>
            <div class="flex items-center gap-3">
              <img class="w-10 sm:w-12" src="/img/docker.png" alt="FastAPI" />
              <span class="text-lg sm:text-xl">Docker</span>
            </div>
          </div>
          <div
            class="my-10 p-6 rounded-2xl shadow-xl bg-white/30 backdrop-blur-sm border border-white/40 flex flex-col gap-4 items-start"
          >
            <h3 class="text-2xl font-semibold mb-2">Echale un Vistazo</h3>

            <a
              class="link-item"
              href="https://ui-pokequeueproject-dev.azurewebsites.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Prueba la App!
            </a>

            <p class="text-lg font-medium mt-4">Revisa las Configuraciones</p>

            <a
              class="link-item"
              href="https://github.com/MartinezJ10/poke.SE.ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend
            </a>
            <a
              class="link-item"
              href="https://github.com/MartinezJ10/poke.SE.api"
              target="_blank"
              rel="noopener noreferrer"
            >
              API
            </a>
            <a
              class="link-item"
              href="https://github.com/MartinezJ10/poke.SE.Function"
              target="_blank"
              rel="noopener noreferrer"
            >
              Function App
            </a>
            <a
              class="link-item"
              href="https://github.com/MartinezJ10/poke.SE.SQL"
              target="_blank"
              rel="noopener noreferrer"
            >
              DB
            </a>
            <a
              class="link-item"
              href="https://github.com/MartinezJ10/poke.SE.terraform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terraform Config
            </a>
          </div>
        </div>
      </div>

      <!-- Desktop Absolute Image -->
      <div
        class="hidden md:flex h-full absolute right-0 top-0 -z-10 w-1/3 justify-center items-center"
        style="background-color: var(--color-accent)"
      >
        <img class="w-75" src="/img/pokereports.png" alt="Librería Logo" />
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

<style scoped>
.link-item {
  display: inline-flex;
  align-items: center;
  font-size: 1.25rem;
  color: #1d4ed8;
  text-decoration: underline;
  transition-property: color;
  transition-duration: 150ms;
}

.link-item:hover {
  color: #1e3a8a;
}
</style>
