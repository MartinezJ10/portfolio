<template>
  <div class="relative w-64 h-64 mx-auto mt-20">
    <div
      class="absolute top-1 left-1 w-28 h-28 bg-blue-700 rounded-lg animate-float"
    ></div>

    <div
      class="absolute top-1 right-1 w-28 h-28 bg-orange-400 rounded-lg animate-float delay-2000"
    ></div>

    <div
      class="absolute bottom-1 left-1 w-28 h-28 bg-pink-300 rounded-lg animate-float delay-1000"
    ></div>

    <div
      class="absolute bottom-1 right-1 w-28 h-28 bg-blue-500 rounded-lg animate-float delay-3000"
    ></div>
  </div>
</template>

<style>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
.delay-1000 {
  animation-delay: 1s;
}
.delay-2000 {
  animation-delay: 2s;
}
.delay-3000 {
  animation-delay: 3s;
}
</style>
