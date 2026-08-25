<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import CareerSection from '@/components/sections/CareerSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <!-- data-section: 런처의 활성 표시와 스크롤 이동이 이 값을 기준으로 동작한다 -->
  <div class="max-w-5xl mx-auto">
    <section id="home" data-section="home" class="min-h-full">
      <HeroSection />
    </section>

    <section id="about" data-section="about">
      <AboutSection />
    </section>

    <section id="projects" data-section="projects">
      <ProjectsSection />
    </section>

    <section id="career" data-section="career">
      <CareerSection />
    </section>

    <section id="contact" data-section="contact">
      <ContactSection />
    </section>
  </div>
</template>
