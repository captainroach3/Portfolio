<script setup lang="ts">
const fullName: string = 'Home'
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-deep-teal/95 text-parchment border-b border-gold/40">
    <nav class="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
      <a href="#home" class="font-serif text-xl font-bold text-gold">{{ fullName }}</a>
      <div class="flex gap-4 md:gap-8 text-sm">
        <a href="#about" class="hover:text-gold">About</a>
        <a href="#skills" class="hover:text-gold">Skills</a>
        <a href="#projects" class="hover:text-gold">Projects</a>
        <a href="#contact" class="hover:text-gold">Contact</a>
      </div>
    </nav>
  </header>
</template>