<script setup lang="ts">
import { shell, skillGroups } from '@/data/profile'
import AppWindow from './AppWindow.vue'
import ShellPrompt from './ShellPrompt.vue'
</script>

<template>
  <!-- 창 크롬은 AppWindow를 그대로 재사용한다 -->
  <AppWindow :title="`${shell.fullHost}: ~`" body-class="font-mono leading-relaxed">
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
  </AppWindow>
</template>
