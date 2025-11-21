<template>
  <section
    id="projects"
    class="min-h-screen w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center gap-16"
  >
    <!-- Title -->
    <h1
      class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-center"
    >
      portafolio
    </h1>

    <!-- Project Cards -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-white"
    >
      <!-- Card 1 -->
      <div
        class="flex flex-col items-center p-6 sm:p-8 gap-6 rounded-2xl"
        style="background-color: var(--color-accent)"
      >
        <span class="text-2xl sm:text-3xl self-start"
          >Pokemon Queue Report</span
        >
        <img
          src="/img/pokereports.png"
          alt="PROSENE"
          class="w-45 sm:w-60 object-contain"
          style="filter: brightness(0) invert(1)"
        />
        <a
          href="/projects/pokereports/"
          class="self-end text-xl sm:text-2xl underline-offset-4 hover:underline transition"
        >
          conocer más
        </a>
      </div>

      <!-- Card 2 -->
      <div
        class="flex flex-col items-center p-6 sm:p-8 gap-6 rounded-2xl"
        style="background-color: var(--color-primary)"
      >
        <span class="text-2xl sm:text-3xl self-start"
          >Arquitectura Rental Cars</span
        >
        <img
          src="/img/architecture.png"
          alt="PROSENE"
          class="w-45 sm:w-60 object-contain"
          style="filter: brightness(0) invert(1)"
        />
        <a
          href="/projects/rentalcars/"
          class="self-end text-xl sm:text-2xl underline-offset-4 hover:underline transition"
        >
          conocer más
        </a>
      </div>
      <!-- Card 3 -->

      <div
        class="flex flex-col items-center p-6 sm:p-8 gap-6 rounded-2xl"
        style="background-color: var(--color-secondary)"
      >
        <span class="text-2xl sm:text-3xl self-start">JUDUCA 2025</span>
        <img
          src="/img/isotipojuduca1.png"
          alt="JUDUCA 2025"
          class="w-40 sm:w-52 object-contain"
        />
        <a
          href="/projects/juduca/"
          class="self-end text-xl sm:text-2xl underline-offset-4 hover:underline transition"
        >
          conocer más
        </a>
      </div>

      <!-- Card 4 -->
      <div
        class="flex flex-col items-center p-6 sm:p-8 gap-6 rounded-2xl"
        style="background-color: var(--color-primary)"
      >
        <span class="text-2xl sm:text-3xl self-start"
          >Librería Universitaria</span
        >
        <img
          src="/img/libreriaLogo.png"
          alt="Librería Universitaria"
          class="w-44 sm:w-56 object-contain"
        />
        <a
          href="/projects/libreria-universitaria/"
          class="self-end text-xl sm:text-2xl underline-offset-4 hover:underline transition"
        >
          conocer más
        </a>
      </div>

      <!-- Card 5 -->
      <div
        class="flex flex-col items-center p-6 sm:p-8 gap-6 rounded-2xl"
        style="background-color: var(--color-accent)"
      >
        <span class="text-2xl sm:text-3xl self-start">PROSENE</span>
        <img
          src="/img/proseneLogo.png"
          alt="PROSENE"
          class="w-48 sm:w-60 object-contain"
        />
        <a
          href="/projects/prosene/"
          class="self-end text-xl sm:text-2xl underline-offset-4 hover:underline transition"
        >
          conocer más
        </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
#projects {
  scroll-margin-top: 5rem;
}
</style>
