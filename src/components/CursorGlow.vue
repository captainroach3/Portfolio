<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mouseX = ref<number>(0)
const mouseY = ref<number>(0)

const updateMousePosition = (event: MouseEvent) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition)
})
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
    :style="{
      background: `radial-gradient(250px circle at ${mouseX}px ${mouseY}px, rgba(176,30,30,0.08), transparent 20%)`
    }"
  ></div>
</template>