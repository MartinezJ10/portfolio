<template>
  <div id="skills" class="min-h-screen w-6xl flex flex-col justify-evenly">
    <h1 class="text-8xl font-light">tecnologías</h1>
    <div class="flex gap-10">
      <div class="flex flex-col gap-6">
        <h1 class="text-3xl font-semibold">Frontend</h1>
        <div
          class="flex flex-col gap-6 p-10 rounded-xl"
          :style="{ backgroundColor: 'rgba(var(--color-primary-rgb), 0.10)' }"
        >
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/vue.png" alt="" /><span class="text-xl"
              >Vue</span
            >
          </div>
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/html.png" alt="" /><span class="text-xl"
              >HTML+CSS+JS</span
            >
          </div>
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/tailwind.png" alt="" /><span
              class="text-xl"
              >Tailwind</span
            >
          </div>
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/bootstrap.png" alt="" /><span
              class="text-xl"
              >Bootstrap</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <h1 class="text-3xl font-semibold">Backend</h1>
        <div
          class="flex flex-col gap-6 p-10 rounded-xl"
          :style="{ backgroundColor: 'rgba(var(--color-primary-rgb), 0.10)' }"
        >
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/django.png" alt="" /><span
              class="text-xl"
              >Django</span
            >
          </div>
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/node.png" alt="" /><span class="text-xl"
              >Node</span
            >
          </div>
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/express.png" alt="" /><span
              class="text-xl"
              >Express</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <h1 class="text-3xl font-semibold">UI/UX</h1>
        <div
          class="flex flex-col gap-6 p-10 rounded-xl"
          :style="{ backgroundColor: 'rgba(var(--color-primary-rgb), 0.10)' }"
        >
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/wireframes.png" alt="" /><span
              class="text-xl"
              >Wireframing</span
            >
          </div>
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/usability.png" alt="" /><span
              class="text-xl"
              >Usability Testing</span
            >
          </div>
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/research.png" alt="" /><span
              class="text-xl"
              >User Research</span
            >
          </div>
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/DT.png" alt="" /><span class="text-xl"
              >Design Thinking</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <h1 class="text-3xl font-semibold">Base de datos y Analítica</h1>
        <div
          class="flex flex-col gap-6 p-10 rounded-xl"
          :style="{ backgroundColor: 'rgba(var(--color-primary-rgb), 0.10)' }"
        >
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/sql.png" alt="" /><span class="text-xl"
              >SQL</span
            >
          </div>
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/tableau.png" alt="" /><span
              class="text-xl"
              >Tableau</span
            >
          </div>
          <div class="flex items-center justify-start gap-4">
            <img class="w-12" src="/img/excel.png" alt="" /><span
              class="text-xl"
              >Excel</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
