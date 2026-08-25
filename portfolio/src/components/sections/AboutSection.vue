<script setup lang="ts">
import { profile, strengths } from '@/data/profile'
import AppWindow from '../AppWindow.vue'
import ShellPrompt from '../ShellPrompt.vue'
</script>

<template>
  <div class="py-10">
    <ShellPrompt command="cat about.md" />

    <div class="mt-4 space-y-4">
      <AppWindow title="about.md">
        <h2 class="text-xl md:text-2xl font-bold text-white mb-1">{{ profile.name }}</h2>
        <p class="text-ubuntu-orange text-sm md:text-base font-mono mb-5">{{ profile.role }}</p>

        <div class="space-y-3">
          <p
            v-for="(paragraph, i) in profile.intro"
            :key="i"
            class="text-white/80 text-sm md:text-base leading-relaxed"
          >
            {{ paragraph }}
          </p>
        </div>

        <blockquote
          class="mt-6 pl-4 border-l-2 border-ubuntu-orange text-white/90 text-sm md:text-base italic"
        >
          {{ profile.goal }}
        </blockquote>
      </AppWindow>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AppWindow
          v-for="strength in strengths"
          :key="strength.title"
          :title="`strengths/${strength.title}`"
        >
          <h3 class="text-base md:text-lg font-bold text-white mb-2">{{ strength.title }}</h3>
          <p class="text-white/75 text-sm leading-relaxed">{{ strength.body }}</p>
        </AppWindow>
      </div>
    </div>
  </div>
</template>
