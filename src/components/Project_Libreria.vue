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
      <h1 class="text-8xl font-light">Librería Universitaria</h1>
    </div>
    <div class="flex justify-evenly">
      <div class="flex flex-col w-xl gap-6">
        <div>
          <p class="text-2xl font">
            Formé parte del equipo encargado del análisis y diseño de un sistema
            catálogo para la comercialización y visualización del vasto
            inventario que ofrece la Librería Universitaria en la UNAH
          </p>
        </div>
        <div>
          <h3 class="text-3xl font-bold">Stack Utilizado</h3>
          <div class="flex gap-18 mt-4">
            <div class="flex items-center justify-start gap-4">
              <img class="w-12" src="/img/wireframes.png" alt="" /><span
                class="text-xl"
                >Wireframing</span
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
      </div>
      <div class="h-full right-0 top-0 -z-10 w-1/3"></div>
    </div>
    <div
      class="h-full absolute right-0 top-0 -z-10 w-1/3 flex justify-center items-center"
      style="background-color: var(--color-accent)"
    >
      <img class="w-95" src="/img/libreriaLogo.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style></style>
