<script setup lang="ts">
import { profile } from '@/data/profile'
import TerminalWindow from '../TerminalWindow.vue'
</script>

<template>
  <div class="min-h-full flex flex-col items-center justify-center py-10">
    <div class="text-center mb-8 md:mb-10 px-4">
      <h1
        class="text-4xl sm:text-6xl md:text-7xl font-black mb-3 text-white drop-shadow-2xl tracking-tighter"
      >
        {{ profile.name }}
      </h1>
      <p class="text-white/90 text-sm sm:text-base md:text-xl font-medium">
        {{ profile.role }}
      </p>
    </div>

    <div class="w-full max-w-[95%] md:max-w-3xl">
      <TerminalWindow />
    </div>

    <p class="mt-8 text-white/50 text-xs md:text-sm animate-bounce" aria-hidden="true">
      ↓ scroll
    </p>
  </div>
</template>
