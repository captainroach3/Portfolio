<script setup lang="ts">
interface QuickFact {
  id: number
  label: string
  value: string
}

interface PersonalInfoItem {
  id: number
  label: string
  value: string
}

const profilePhoto: string = '/images/profile.jpg'

const noiseBackground: string =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"

const aboutParagraphOne: string =
  'I am a fourth-year Computer Engineering student at Cagayan State University – Carig Campus. I enjoy understanding how software and hardware work together, and I am building my skills in programming, web development, and electronics.'

const aboutParagraphTwo: string =
  'My main interest is embedded systems, where software runs directly on small hardware devices. I recently completed a backend project and am now learning front-end development, with the goal of building reliable systems that solve practical problems.'

const personalInfo: PersonalInfoItem[] = [
  { id: 1, label: 'Address', value: 'Tumauini, Isabela, Philippines' },
  { id: 2, label: 'Age', value: '21 years old' },
  { id: 3, label: 'Email', value: 'dennistamang78@gmail.com' },
  { id: 4, label: 'Nationality', value: 'Filipino' }
]

const quickFacts: QuickFact[] = [
  { id: 1, label: 'Program', value: 'BS Computer Engineering' },
  { id: 2, label: 'School', value: 'Cagayan State University – Carig Campus' },
  { id: 3, label: 'Year Level', value: '4th Year' },
  { id: 4, label: 'Focus Areas', value: 'Embedded Systems' }
]
</script>

<template>
  <section id="about" class="relative overflow-hidden scroll-mt-16 bg-sage text-ink border-b-4 border-ink py-20">
    <div class="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black opacity-[0.07] pointer-events-none mix-blend-multiply"></div>
    <div class="max-w-5xl mx-auto border-4 border-ink p-8">
      <p class="font-jp text-sm tracking-widest text-accent-red mb-2">自己紹介 ・ ABOUT</p>
      <h2 class="font-manga text-4xl font-bold uppercase mb-4">Professional Profile</h2>
      <div class="w-16 h-1 bg-accent-red mb-10"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <img
            :src="profilePhoto"
            alt="Profile photo"
            class="w-full h-64 object-cover border-4 border-ink grayscale contrast-125 mb-0"
          />
          <div class="border-4 border-t-0 border-ink p-6">
            <h3 class="font-manga text-lg font-bold uppercase mb-4">Personal Info</h3>
            <div v-for="info in personalInfo" :key="info.id" class="mb-4">
              <p class="text-xs uppercase tracking-wide text-accent-red">{{ info.label }}</p>
              <p class="font-semibold">{{ info.value }}</p>
            </div>
          </div>
        </div>

        <div class="border-4 border-ink p-6">
          <h3 class="font-manga text-lg font-bold uppercase mb-4">About Myself</h3>
          <p class="text-lg leading-relaxed mb-6">{{ aboutParagraphOne }}</p>
          <p class="text-lg leading-relaxed">{{ aboutParagraphTwo }}</p>
        </div>
      </div>

      <div class="border-4 border-ink p-6">
        <h3 class="font-manga text-xl font-bold uppercase mb-6">Quick Facts</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="fact in quickFacts" :key="fact.id">
            <p class="text-xs uppercase tracking-wide text-accent-red">{{ fact.label }}</p>
            <p class="font-semibold">{{ fact.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>