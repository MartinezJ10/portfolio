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
        Arquitectura Rental Cars
      </h1>
    </div>

    <!-- Content -->
    <div
      class="flex flex-col md:flex-row justify-around lg:w-4xl items-center mt-5 md:mt-7 gap-12"
    >
      <!-- Left Text -->
      <div class="flex flex-col w-full md:w-xl gap-6 text-center md:text-left">
        <p class="text-lg sm:text-xl md:text-2xl leading-relaxed">
          Este proyecto implementa una arquitectura completa en Azure utilizando
          Terraform como infraestructura como código. Automatiza la creación de
          una base de datos OLTP, un Data Lake para analítica, IoT Hub para
          telemetría, Web Apps para frontend y backend, Data Factory para ETL y
          Key Vault para la gestión segura de secretos. Toda la infraestructura
          es reproducible, modular y desplegada mediante un backend remoto
          compartido.
        </p>
        <a
          class="inline-flex items-center text-lg text-blue-600 hover:text-blue-800 underline transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300"
          href="https://github.com/MartinezJ10/rentalcars-architecture"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡Revisa las Configuraciones!
        </a>

        <div>
          <h3 class="text-2xl sm:text-3xl font-bold mt-4">Stack Utilizado</h3>
          <div
            class="flex flex-wrap justify-center md:justify-start gap-6 mt-4"
          >
            <div class="flex items-center gap-3">
              <img
                class="w-10 sm:w-12"
                src="/img/terraform.png"
                alt="PostgreSQL"
              />
              <span class="text-lg sm:text-xl">Terraform</span>
            </div>
            <div class="flex items-center gap-3">
              <img class="w-10 sm:w-12" src="/img/azure.png" alt="PostgreSQL" />
              <span class="text-lg sm:text-xl">Azure</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Absolute Image -->
      <div
        class="hidden md:flex h-full absolute right-0 top-0 -z-10 w-1/3 justify-center items-center"
        style="background-color: var(--color-secondary)"
      >
        <img class="w-95" src="/img/architecture.png" alt="architecture Logo" />
      </div>

      <!-- Mobile Image -->
      <div
        class="flex md:hidden justify-center items-center w-full mt-10 rounded-xl py-10"
        style="background-color: var(--color-secondary)"
      >
        <img
          class="w-2/3 sm:w-3/4"
          src="/img/proseneLogo.png"
          alt="PROSENE Logo"
        />
      </div>
    </div>
  </div>
</template>
