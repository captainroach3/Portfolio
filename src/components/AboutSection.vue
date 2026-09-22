<script setup lang="ts">
interface QuickFact {
  id: number
  label: string
  value: string
}

const aboutParagraphOne: string =
  'I am a fourth-year Computer Engineering student at Cagayan State University – Carig Campus. I enjoy understanding how software and hardware work together, and I am building my skills in programming, web development, and electronics.'

const aboutParagraphTwo: string =
  'My main interest is embedded systems, where software runs directly on small hardware devices. I recently completed a backend project and am now learning front-end development, with the goal of building reliable systems that solve practical problems.'

const quickFacts: QuickFact[] = [
  { id: 1, label: 'Program', value: 'BS Computer Engineering' },
  { id: 2, label: 'School', value: 'Cagayan State University – Carig Campus' },
  { id: 3, label: 'Year Level', value: '4th Year' },
  { id: 4, label: 'Focus Areas', value: 'Embedded Systems' }
]
</script>

<template>
  <section id="about" class="scroll-mt-16 bg-sage text-ink px-6 py-20">
    <div class="max-w-5xl mx-auto">
      <p class="text-sm uppercase tracking-widest text-jade mb-2">About Me</p>
      <h2 class="font-serif text-4xl font-bold text-deep-teal mb-4">Professional Profile</h2>
      <div class="w-16 h-1 bg-gold mb-10"></div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="md:col-span-2">
          <p class="text-lg leading-relaxed mb-6">{{ aboutParagraphOne }}</p>
          <p class="text-lg leading-relaxed">{{ aboutParagraphTwo }}</p>
        </div>

        <div class="bg-parchment border-l-4 border-jade rounded-lg p-6 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 class="font-serif text-xl font-bold text-deep-teal mb-4">Quick Facts</h3>
          <div v-for="fact in quickFacts" :key="fact.id" class="mb-4">
            <p class="text-xs uppercase tracking-wide text-jade">{{ fact.label }}</p>
            <p class="font-semibold text-deep-teal">{{ fact.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>