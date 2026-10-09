<script setup lang="ts">
const fullName: string = 'Raging Potato'
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-paper border-b-4 border-ink">
    <nav class="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
      <a href="#home" class="font-manga text-xl font-bold uppercase text-ink">{{ fullName }}</a>
      <div class="flex gap-4 md:gap-8 text-sm font-manga uppercase tracking-wide">
        <a href="#about" class="text-charcoal hover:text-accent-red transition-colors duration-300">About</a>
        <a href="#skills" class="text-charcoal hover:text-accent-red transition-colors duration-300">Skills</a>
        <a href="#projects" class="text-charcoal hover:text-accent-red transition-colors duration-300">Projects</a>
        <a href="#contact" class="text-charcoal hover:text-accent-red transition-colors duration-300">Contact</a>
      </div>
    </nav>
  </header>
</template>