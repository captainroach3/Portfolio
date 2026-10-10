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
  <section id="skills" class="scroll-mt-16 bg-ink text-paper px-6 py-20 border-b-4 border-ink">
     <RadialBurst />
    <div class="relative overflow-hidden max-w-5xl mx-auto border-4 border-paper p-8">
      <div v-reveal>
        <p class="font-jp text-sm tracking-widest text-accent-red mb-2">スキル ・ SKILLS</p>
        <h2 class="font-manga text-4xl font-bold uppercase mb-4">Technical Skills</h2>
        <div class="w-16 h-1 bg-accent-red mb-10"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-reveal class="border-4 border-paper p-6">
          <h3 class="font-manga text-xl font-bold uppercase mb-4">Programming</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in programmingSkills"
              :key="skill"
              class="border-2 border-paper px-3 py-1 text-sm transition-all duration-300 hover:bg-paper hover:text-ink"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <div v-reveal="150" class="border-4 border-paper p-6">
          <h3 class="font-manga text-xl font-bold uppercase mb-4">Hardware and Embedded</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in hardwareSkills"
              :key="skill"
              class="border-2 border-paper px-3 py-1 text-sm transition-all duration-300 hover:bg-paper hover:text-ink"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <div v-reveal="300" class="border-4 border-paper p-6">
          <h3 class="font-manga text-xl font-bold uppercase mb-4">Web and Tools</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in toolsSkills"
              :key="skill"
              class="border-2 border-paper px-3 py-1 text-sm transition-all duration-300 hover:bg-paper hover:text-ink"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>