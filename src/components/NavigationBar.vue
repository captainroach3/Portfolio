<script setup lang="ts">
import { ref } from 'vue'

const fullName: string = 'Raging Potato'
const isMenuOpen = ref<boolean>(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-paper border-b-4 border-ink">
    <nav class="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
      <a href="#home" class="font-manga text-lg md:text-xl font-bold uppercase text-ink" @click="closeMenu">
        {{ fullName }}
      </a>

      <!-- links shown on medium screens and up -->
      <div class="hidden md:flex gap-8 text-sm font-manga uppercase tracking-wide">
        <a href="#about" class="text-charcoal hover:text-accent-red transition-colors duration-300">About</a>
        <a href="#skills" class="text-charcoal hover:text-accent-red transition-colors duration-300">Skills</a>
        <a href="#projects" class="text-charcoal hover:text-accent-red transition-colors duration-300">Projects</a>
        <a href="#contact" class="text-charcoal hover:text-accent-red transition-colors duration-300">Contact</a>
      </div>

      <!-- hamburger button, shown only below medium screens -->
      <button
        @click="toggleMenu"
        class="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
        aria-label="Toggle menu"
      >
        <span class="block w-6 h-0.5 bg-ink transition-transform duration-300" :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"></span>
        <span class="block w-6 h-0.5 bg-ink transition-opacity duration-300" :class="isMenuOpen ? 'opacity-0' : ''"></span>
        <span class="block w-6 h-0.5 bg-ink transition-transform duration-300" :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
      </button>
    </nav>

    <!-- mobile dropdown menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden flex flex-col border-t-4 border-ink bg-paper font-manga uppercase tracking-wide text-sm"
    >
      <a href="#about" class="px-6 py-4 border-b border-ink/20 text-charcoal" @click="closeMenu">About</a>
      <a href="#skills" class="px-6 py-4 border-b border-ink/20 text-charcoal" @click="closeMenu">Skills</a>
      <a href="#projects" class="px-6 py-4 border-b border-ink/20 text-charcoal" @click="closeMenu">Projects</a>
      <a href="#contact" class="px-6 py-4 text-charcoal" @click="closeMenu">Contact</a>
    </div>
  </header>
</template>