<script setup lang="ts">
const programmingSkills: string[] = [
  'Python(learning)',
  'C/C++ (Arduino)',
  'SQL'
]

const hardwareSkills: string[] = [
  'Arduino and ESP-32',
  'PID Control'
]

const toolsSkills: string[] = [
  'Django REST Framework',
  'PostgreSQL',
  'Vue 3 (learning)',
  'Git'
]
</script>

<template>
  <section id="skills" class="scroll-mt-16 bg-deep-teal text-parchment px-6 py-20">
    <div class="max-w-5xl mx-auto">
      <p class="text-sm uppercase tracking-widest text-gold mb-2">Skills</p>
      <h2 class="font-serif text-4xl font-bold mb-4">Technical Skills</h2>
      <div class="w-16 h-1 bg-gold mb-10"></div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white/5 border border-gold/30 rounded-lg p-6">
          <h3 class="font-serif text-xl font-bold text-gold mb-4">Programming</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in programmingSkills"
              :key="skill"
              class="bg-jade/40 px-3 py-1 rounded-full text-sm"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="bg-white/5 border border-gold/30 rounded-lg p-6">
          <h3 class="font-serif text-xl font-bold text-gold mb-4">Hardware and Embedded</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in hardwareSkills"
              :key="skill"
              class="bg-jade/40 px-3 py-1 rounded-full text-sm"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="bg-white/5 border border-gold/30 rounded-lg p-6">
          <h3 class="font-serif text-xl font-bold text-gold mb-4">Web and Tools</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in toolsSkills"
              :key="skill"
              class="bg-jade/40 px-3 py-1 rounded-full text-sm"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>