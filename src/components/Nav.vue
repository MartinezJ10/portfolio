<template>
  <nav
    :class="[
      'fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[95%] md:w-5xl transition-all duration-300 z-50 rounded-2xl text-white',
      scrolled && !menuOpen
        ? 'py-1 px-4 sm:px-6 shadow-none'
        : 'py-2 px-6 sm:px-10 shadow-lg',
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
            'w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center transition-all duration-300',
            scrolled && !menuOpen ? 'rounded-full shadow-lg' : '',
          ]"
          style="background-color: var(--color-primary)"
        >
          <img
            class="w-8 sm:w-10 filter brightness-0 invert"
            src="/img/LOGO.png"
            alt="Logo"
          />
        </div>
        <a
          v-show="!scrolled || menuOpen"
          href="#home"
          class="font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer"
        >
          Jorge Martinez
        </a>
      </div>

      <!-- Desktop Menu -->
      <ul
        v-show="!scrolled || menuOpen"
        class="hidden md:flex space-x-6 transition-all duration-300"
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

      <!-- Mobile Menu Icon -->
      <button class="md:hidden p-2" @click="toggleMenu">
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <ul
        v-if="menuOpen"
        class="flex flex-col items-center mt-4 space-y-4 md:hidden text-lg font-medium"
      >
        <li><a href="#about" class="hover:underline">sobre mi</a></li>
        <li><a href="#projects" class="hover:underline">portafolio</a></li>
        <li><a href="#skills" class="hover:underline">habilidades</a></li>
      </ul>
    </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
