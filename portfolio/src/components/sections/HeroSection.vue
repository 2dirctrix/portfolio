<script setup lang="ts">
import TerminalWindow from '../TerminalWindow.vue'
</script>

<template>
  <section class="min-h-screen flex flex-col items-center justify-center p-6">
    <div class="text-center mb-10 animate-in fade-in zoom-in duration-700">
      <h1 class="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter uppercase drop-shadow-2xl">
        LEE JUN SEON
      </h1>
      <p class="text-xl md:text-2xl text-white/80 font-medium">
        Embedded Software Engineer <span class="text-ubuntu-orange mx-2">|</span> Ubuntu 24.04
      </p>
    </div>
    
    <div class="w-full max-w-4xl transition-all duration-500 hover:scale-[1.02]">
      <TerminalWindow />
    </div>

    <!-- 아래로 스크롤 유도 아이콘 -->
    <div class="mt-16 animate-bounce opacity-50">
      <span class="text-3xl">↓</span>
    </div>
  </section>
</template>