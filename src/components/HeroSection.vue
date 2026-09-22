<script setup lang="ts">
const fullName: string = 'Tamang, Dennis'
const jobTitle: string = 'Computer Engineering Student'
const shortIntro: string = 'Welcome to my internet brag sheet.'
const githubLink: string = 'https://github.com/captainroach3'
</script>

<template>
  <section
    id="home"
    class="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-deep-teal via-jade/60 to-deep-teal text-parchment px-6"
  >
    
    <div class="absolute top-20 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-jade/30 rounded-full blur-3xl"></div>

   
    <div class="relative z-10 flex flex-col items-center text-center">
      <p class="text-xl uppercase b tracking-widest text-orange-200 mb-4">Hello, I am</p>
      <h1 class="font-serif text-5xl md:text-7xl font-bold mb-4">{{ fullName }}</h1>
      <h2 class="text-2xl text-orange-200 mb-6">{{ jobTitle }}</h2>
      <div class="w-16 h-1 text-orange-200 mb-6"></div>
      <p class="text-lg text-mist max-w-xl mb-8">{{ shortIntro }}</p>
      <a
        :href="githubLink"
        target="_blank"
        class="bg-gold text-deep-teal hover:bg-parchment px-6 py-3 rounded-lg font-semibold"
      >
        View my GitHub
      </a>
    </div>
  </section>
</template>