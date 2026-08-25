<script setup lang="ts">
import { shell } from '@/data/profile'

withDefaults(
  defineProps<{
    command: string
    /** 명령 뒤에 깜빡이는 커서를 붙일지 */
    cursor?: boolean
  }>(),
  { cursor: false },
)
</script>

<template>
  <p class="font-mono text-xs sm:text-sm md:text-base flex items-center flex-wrap">
    <span class="text-green-400 font-bold">{{ shell.user }}@{{ shell.host }}</span>
    <span class="text-white/60">:</span>
    <span class="text-blue-400">~</span>
    <span class="text-white/60">$</span>
    <span class="ml-2 text-white/90">{{ command }}</span>
    <span
      v-if="cursor"
      class="ml-2 w-2 h-4 bg-ubuntu-orange animate-pulse inline-block"
      aria-hidden="true"
    ></span>
  </p>
</template>
