<template>
  <section
    id="skills"
    class="min-h-screen w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center gap-16"
  >
    <!-- Title -->
    <h1
      class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-center"
    >
      tecnologías
    </h1>

    <!-- Skill Categories -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
      <!-- Frontend -->
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl sm:text-3xl font-semibold text-center lg:text-left">
          Frontend
        </h2>
        <div
          class="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl"
          :style="{ backgroundColor: 'rgba(var(--color-primary-rgb), 0.10)' }"
        >
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/vue.png"
              alt="Vue"
            />
            <span class="text-lg sm:text-xl">Vue</span>
          </div>
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/html.png"
              alt="HTML+CSS+JS"
            />
            <span class="text-lg sm:text-xl">HTML + CSS + JS</span>
          </div>
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/tailwind.png"
              alt="Tailwind"
            />
            <span class="text-lg sm:text-xl">Tailwind</span>
          </div>
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/bootstrap.png"
              alt="Bootstrap"
            />
            <span class="text-lg sm:text-xl">Bootstrap</span>
          </div>
        </div>
      </div>

      <!-- Backend -->
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl sm:text-3xl font-semibold text-center lg:text-left">
          Backend
        </h2>
        <div
          class="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl"
          :style="{ backgroundColor: 'rgba(var(--color-primary-rgb), 0.10)' }"
        >
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/django.png"
              alt="Django"
            />
            <span class="text-lg sm:text-xl">Django</span>
          </div>
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/node.png"
              alt="Node"
            />
            <span class="text-lg sm:text-xl">Node</span>
          </div>
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/express.png"
              alt="Express"
            />
            <span class="text-lg sm:text-xl">Express</span>
          </div>
        </div>
      </div>

      <!-- UI / UX -->
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl sm:text-3xl font-semibold text-center lg:text-left">
          UI / UX
        </h2>
        <div
          class="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl"
          :style="{ backgroundColor: 'rgba(var(--color-primary-rgb), 0.10)' }"
        >
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/wireframes.png"
              alt="Wireframing"
            />
            <span class="text-lg sm:text-xl">Wireframing</span>
          </div>
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/usability.png"
              alt="Usability Testing"
            />
            <span class="text-lg sm:text-xl">Usability Testing</span>
          </div>
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/research.png"
              alt="User Research"
            />
            <span class="text-lg sm:text-xl">User Research</span>
          </div>
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/DT.png"
              alt="Design Thinking"
            />
            <span class="text-lg sm:text-xl">Design Thinking</span>
          </div>
        </div>
      </div>

      <!-- Databases & Analytics -->
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl sm:text-3xl font-semibold text-center lg:text-left">
          Base de datos y Analítica
        </h2>
        <div
          class="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl"
          :style="{ backgroundColor: 'rgba(var(--color-primary-rgb), 0.10)' }"
        >
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/sql.png"
              alt="SQL"
            />
            <span class="text-lg sm:text-xl">SQL</span>
          </div>
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/tableau.png"
              alt="Tableau"
            />
            <span class="text-lg sm:text-xl">Tableau</span>
          </div>
          <div class="flex items-center gap-4">
            <img
              class="w-10 sm:w-12 object-contain"
              src="/img/excel.png"
              alt="Excel"
            />
            <span class="text-lg sm:text-xl">Excel</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
#skills {
  scroll-margin-top: 5rem;
}
</style>
