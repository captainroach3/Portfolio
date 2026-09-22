<script setup lang="ts">
const emailValue: string = 'dennistamang78@gmail.com'
const emailHref: string = 'https://mail.google.com/mail/?view=cm&fs=1&to=dennistamang78@gmail.com'

const githubValue: string = 'github.com/captainroach3'
const githubHref: string = 'https://github.com/captainroach3'

const facebookValue: string = 'facebook.com/dennis.tamang'
const facebookHref: string = 'https://www.facebook.com/CaptainRoach3'
</script>

<template>
  <section id="contact" class="scroll-mt-16 bg-deep-teal text-parchment px-6 py-20">
    <div class="max-w-3xl mx-auto text-center">
      <p class="text-sm uppercase tracking-widest text-gold mb-2">Contact</p>
      <h2 class="font-serif text-4xl font-bold mb-4">Get In Touch</h2>
      <div class="w-16 h-1 bg-gold mb-10 mx-auto"></div>

      <p class="text-lg text-mist mb-10">
        Feel free to reach out through any of the channels below.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <!-- Email -->
        <a
          :href="emailHref"
          target="_blank"
          class="flex items-center gap-4 bg-white/5 border border-gold/30 rounded-lg p-5 text-left transition hover:-translate-y-1 hover:shadow-lg hover:border-gold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0-.828.672-1.5 1.5-1.5h16.5c.828 0 1.5.672 1.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75l9.75 6.75 9.75-6.75" />
          </svg>
          <div>
            <p class="text-xs uppercase tracking-wide text-gold mb-1">Email</p>
            <p class="font-semibold">{{ emailValue }}</p>
          </div>
        </a>

        <!-- GitHub -->
        <a
          :href="githubHref"
          target="_blank"
          class="flex items-center gap-4 bg-white/5 border border-gold/30 rounded-lg p-5 text-left transition hover:-translate-y-1 hover:shadow-lg hover:border-gold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gold shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.16.69-3.83-1.34-3.83-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 2.86-.39c.97 0 1.95.13 2.86.39 2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
          </svg>
          <div>
            <p class="text-xs uppercase tracking-wide text-gold mb-1">GitHub</p>
            <p class="font-semibold">{{ githubValue }}</p>
          </div>
        </a>

        <!-- Facebook -->
        <a
          :href="facebookHref"
          target="_blank"
          class="flex items-center gap-4 bg-white/5 border border-gold/30 rounded-lg p-5 text-left transition hover:-translate-y-1 hover:shadow-lg hover:border-gold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gold shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
          </svg>
          <div>
            <p class="text-xs uppercase tracking-wide text-gold mb-1">Facebook</p>
            <p class="font-semibold">{{ facebookValue }}</p>
          </div>
        </a>

      </div>
    </div>
  </section>
</template>