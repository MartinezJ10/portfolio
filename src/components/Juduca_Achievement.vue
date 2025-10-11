<template>
  <section class="min-h-screen w-8xl relative overflow-hidden">
    <div
      v-for="(text, index) in achievements"
      :key="index"
      :data-index="index"
      class="achievement-slide h-screen flex items-center justify-center text-center px-10 transition-opacity duration-700"
    >
      <transition name="fade-slide" mode="out-in">
        <div
          v-if="activeIndex === index"
          :key="text"
          class="max-w-3xl mx-auto text-3xl md:text-5xl font-light leading-snug text-gray-900"
        >
          {{ text }}
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const achievements = [
  "Se contó con una inscripción de +2500 participantes del evento.",
  "Se generaron +20 tipos de credenciales de forma automatizada y la generación de un QR identificador en cada una de ellas.",
  "Se implementó el control de asistencia por boletería con QR, lográndose la contabilización de miles de personas por partidos.",
  "Se logró contabilizar ~13000 platos de comida a lo largo del evento, mediante asignación por QR de credencial; esto fue vital para la auditoría de su presupuesto.",
  "Se estructuró un mecanismo de inserción automatizada que logró insertar +800 estudiantes voluntarios en pocos minutos con ayuda de bases de datos institucionales.",
];

const activeIndex = ref(0);

onMounted(() => {
  const sections = document.querySelectorAll(".achievement-slide");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) activeIndex.value = index;
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));
});
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
