<script setup lang="ts">
import HeroVideo from './HeroVideo.vue'

const fullName: string = 'Dennis Tamang'
const jobTitle: string = 'Computer Engineering Student'
const shortIntro: string = 'I build things with code and hardware.'
const githubLink: string = 'https://github.com/captainroach3'
</script>

<template>
  <section id="home" class="scroll-mt-16 bg-paper text-ink ">
    <div class="w-screen h-screen flex items-center">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 border-4 border-ink">
      <div class="h-80 md:h-auto">
        <HeroVideo />
      </div>

      <div class="absolute bottom-8 right-8 font-jp text-m md:text-2xl font-black text-ink opacity-30 uppercase tracking-widest [writing-mode:vertical-lr]">
  藤原とうふ店（自家用）
</div>



      <div class="p-8 md:p-12">
        <p class="font-jp text-sm tracking-widest text-charcoal mb-4">ポートフォリオ ・ PORTFOLIO</p>
        <h1 class="font-manga text-5xl md:text-7xl font-bold leading-none uppercase mb-6">
          {{ fullName }}
        </h1>
        <div class="h-1 w-24 bg-accent-red mb-6"></div>
        <h2 class="font-manga text-xl md:text-2xl uppercase tracking-wide text-charcoal mb-4">
          {{ jobTitle }}
        </h2>
        <p class="text-lg text-charcoal max-w-xl mb-8 leading-relaxed">
          {{ shortIntro }}
        </p>
        <a
          :href="githubLink"
          target="_blank"
          class="inline-block border-4 border-ink bg-ink text-paper px-8 py-3 font-manga uppercase tracking-wide transition-all duration-300 hover:bg-paper hover:text-ink"
        >
          View my GitHub
        </a>
      </div>
    </div>
    </div>
  </section>
</template>