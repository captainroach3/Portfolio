<script setup lang="ts">
interface Project {
  id: number
  title: string
  category: string
  description: string
  techStack: string[]
  githubLink: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'PID Line Follower Robot',
    category: 'Embedded Systems',
    description: 'An autonomous line follower robot that tracks a line using a sensor array and PID control.',
    techStack: ['Arduino Nano', 'QTR-8A', 'TB6612FNG', 'N20 Motors', 'PID Control'],
    githubLink: ''
  },
  {
    id: 2,
    title: 'Laboratory Borrowing System',
    category: 'Backend Development',
    description: 'A backend for borrowing laboratory items, built from an ER diagram with User, Staff, Inventory, and Transaction tables.',
    techStack: ['Django', 'Django REST Framework', 'PostgreSQL'],
    githubLink: ''
  },
  {
    id: 3,
    title: 'Rotating DNA Helix Display',
    category: 'Hardware Project',
    description: 'A display of a DNA helix that rotates using a motor and is lit with LED strip lights.',
    techStack: ['Arduino', 'Motor', 'LED Strips'],
    githubLink: ''
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    description: 'This website, built as a single-page portfolio to present my skills and projects.',
    techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS'],
    githubLink: ''
  }
]
</script>

<template>
  <section id="projects" class="scroll-mt-16 bg-paper text-charcoal px-6 py-20 border-b-4 border-ink">
    <div class="max-w-5xl mx-auto border-4 border-ink p-8">
      <p class="font-jp text-sm tracking-widest text-accent-red mb-2">作品 ・ WORKS</p>
      <h2 class="font-manga text-4xl font-bold uppercase mb-4">Selected Work</h2>
      <div class="w-16 h-1 bg-accent-red mb-10"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="project in projects"
          :key="project.id"
          class="border-4 border-ink p-6 transition-all duration-300 hover:bg-ink hover:text-paper"
        >
          <p class="text-xs uppercase tracking-wide text-accent-red mb-1">{{ project.category }}</p>
          <h3 class="font-manga text-xl font-bold uppercase mb-3">{{ project.title }}</h3>
          <p class="mb-4 leading-relaxed">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="border-2 border-ink px-3 py-1 text-xs"
            >
              {{ tech }}
            </span>
          </div>

          <a
            v-if="project.githubLink !== ''"
            :href="project.githubLink"
            target="_blank"
            class="font-manga uppercase tracking-wide underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>