<template>
  <nav
    :class="[
      'fixed top-4 left-1/2 transform -translate-x-1/2 w-5xl transition-all duration-300 z-50 rounded-2xl text-white',
      scrolled && !menuOpen
        ? 'py-1 px-6 shadow-none' // remove background when scrolled
        : 'py-1 px-30 shadow-lg',
    ]"
    :style="{
      backgroundColor:
        scrolled && !menuOpen ? 'transparent' : 'var(--color-primary)',
      backdropFilter: scrolled && !menuOpen ? 'blur(8px)' : 'none',
    }"
  >
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center gap-2 cursor-pointer" @click="toggleMenu">
        <div
          :class="[
            'w-14 h-14 flex justify-center items-center transition-all duration-300',
            scrolled && !menuOpen ? 'rounded-full shadow-lg' : '',
          ]"
          style="background-color: var(--color-primary)"
        >
          <img
            class="w-10 filter brightness-0 invert"
            src="/img/LOGO.png"
            alt="Logo"
          />
        </div>
        <a
          v-show="!scrolled || menuOpen"
          href="#home"
          class="font-medium transition-all duration-300 cursor-pointer"
        >
          Jorge Martinez
        </a>
      </div>

      <!-- Menu Links -->
      <ul
        v-show="!scrolled || menuOpen"
        class="flex space-x-6 transition-all duration-300"
      >
        <li>
          <a href="#about" class="hover:underline font-medium">sobre mi</a>
        </li>
        <li>
          <a href="#projects" class="hover:underline font-medium">portafolio</a>
        </li>
        <li>
          <a href="#skills" class="hover:underline font-medium">habilidades</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrolled = ref(false);
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const handleScroll = () => {
  const isScrolled = window.scrollY > 50;
  scrolled.value = isScrolled;
  if (isScrolled) menuOpen.value = false;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
ul {
  transform-origin: top;
}
</style>
