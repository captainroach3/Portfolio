<script setup lang="ts">
const videoSource: string = '/videos/hero-background.mp4'
</script>

<template>
  <div class="relative w-full h-full overflow-hidden bg-ink">
    <video
      :src="videoSource"
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
    ></video>

    <div class="absolute inset-0 bg-ink/40"></div>
  </div>
</template>