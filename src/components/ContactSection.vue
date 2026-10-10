<script setup lang="ts">
const emailValue: string = 'dennistamang78@gmail.com'
const emailHref: string = 'https://mail.google.com/mail/?view=cm&fs=1&to=dennistamang78@gmail.com'

const githubValue: string = 'github.com/captainroach3'
const githubHref: string = 'https://github.com/captainroach3'

const facebookValue: string = 'facebook.com/dennis.tamang'
const facebookHref: string = 'https://www.facebook.com/CaptainRoach3'
</script>

<template>
  <section id="contact" class="scroll-mt-16 bg-ink text-paper px-6 py-20">
    <div class="max-w-3xl mx-auto border-4 border-paper p-8 text-center">
      <div v-reveal>
        <p class="font-jp text-sm tracking-widest text-accent-red mb-2">連絡先 ・ CONTACT</p>
        <h2 class="font-manga text-4xl font-bold uppercase mb-4">Get In Touch</h2>
        <div class="w-16 h-1 bg-accent-red mb-10 mx-auto"></div>

        <p class="text-lg mb-10">
          Feel free to reach out through any of the channels below.
        </p>
      </div>

      <div v-reveal="150" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          :href="emailHref"
          target="_blank"
          class="flex items-center gap-4 border-2 border-paper p-5 text-left transition-all duration-300 hover:bg-paper hover:text-ink"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0-.828.672-1.5 1.5-1.5h16.5c.828 0 1.5.672 1.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75l9.75 6.75 9.75-6.75" />
          </svg>
          <div>
            <p class="text-xs uppercase tracking-wide mb-1">Email</p>
            <p class="font-semibold break-all">{{ emailValue }}</p>
          </div>
        </a>

        <a
          :href="githubHref"
          target="_blank"
          class="flex items-center gap-4 border-2 border-paper p-5 text-left transition-all duration-300 hover:bg-paper hover:text-ink"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          <div>
            <p class="text-xs uppercase tracking-wide mb-1">GitHub</p>
            <p class="font-semibold break-all">{{ githubValue }}</p>
          </div>
        </a>

        <a
          :href="facebookHref"
          target="_blank"
          class="flex items-center gap-4 border-2 border-paper p-5 text-left transition-all duration-300 hover:bg-paper hover:text-ink"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
          </svg>
          <div>
            <p class="text-xs uppercase tracking-wide mb-1">Facebook</p>
            <p class="font-semibold break-all">{{ facebookValue }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>