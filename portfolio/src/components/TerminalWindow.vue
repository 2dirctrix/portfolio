<script setup lang="ts">
import { shell, skillGroups } from '@/data/profile'
import ShellPrompt from './ShellPrompt.vue'
</script>

<template>
  <div
    class="w-full bg-ubuntu-terminal/90 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-white/10 transition-transform duration-200 ease-out motion-safe:hover:scale-[1.02]"
  >
    <!-- 타이틀 바 -->
    <div class="bg-ubuntu-dark-grey/90 px-3 py-1.5 flex justify-between items-center gap-2">
      <span class="text-[10px] md:text-xs text-ubuntu-warm-grey font-mono truncate">
        {{ shell.fullHost }}: ~
      </span>
      <span class="flex gap-1.5 shrink-0" aria-hidden="true">
        <span class="w-3 h-3 rounded-full bg-white/20"></span>
        <span class="w-3 h-3 rounded-full bg-white/20"></span>
        <span class="w-3 h-3 rounded-full bg-ubuntu-orange"></span>
      </span>
    </div>

    <div class="p-4 md:p-6 font-mono leading-relaxed">
      <ShellPrompt command="ls -l skills/" />

      <div class="mt-4 space-y-4">
        <div v-for="group in skillGroups" :key="group.name">
          <p class="text-blue-400 text-xs md:text-sm mb-1">{{ group.name }}/</p>
          <ul class="pl-2 md:pl-4 space-y-0.5">
            <li
              v-for="item in group.items"
              :key="item.name"
              class="text-[11px] sm:text-xs md:text-sm flex flex-wrap gap-x-2"
            >
              <span class="text-white/35">{{ item.perm }}</span>
              <span class="text-ubuntu-orange font-semibold">{{ item.name }}</span>
              <span class="text-white/50"># {{ item.note }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-5">
        <ShellPrompt command="" cursor />
      </div>
    </div>
  </div>
</template>
