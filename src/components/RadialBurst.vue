<script setup lang="ts">
interface BurstLine {
  id: number
  angle: number
}

const totalLines: number = 24
const burstLines: BurstLine[] = Array.from({ length: totalLines }, (_, index) => ({
  id: index,
  angle: (360 / totalLines) * index
}))
</script>

<template>
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
    <div
      v-for="line in burstLines"
      :key="line.id"
      class="absolute bg-accent-red origin-left"
      :style="{
        width: '60vw',
        height: '2px',
        transform: `rotate(${line.angle}deg)`,
        opacity: 0.06
      }"
    ></div>
  </div>
</template>