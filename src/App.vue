<script setup lang="ts">
import NavBar from './components/NavigationBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillSection from './components/SkillSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import ContactSection from './components/ContactSection.vue'
import CursorGlow from './components/CursorGlow.vue'




</script>

<template>
  <CursorGlow />
  <NavBar />
  <HeroSection
    fullName="Dennis Reigneel"
    jobTitle="Frontend Developer"
    shortIntro="I design and build modern, responsive web experiences."
    githubLink="https://github.com/"
  />
  <AboutSection />
  <SkillSection />
  <ProjectSection />
  <ContactSection />
</template>