<script setup lang="ts">
// 우분투 창 크롬(타이틀바 + 신호등 버튼)을 재사용하기 위한 래퍼
defineProps<{
  title: string
}>()
</script>

<template>
  <section
    class="bg-ubuntu-terminal/85 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-white/10"
  >
    <header class="bg-ubuntu-dark-grey/90 px-3 py-1.5 flex justify-between items-center gap-2">
      <span class="text-[10px] md:text-xs text-ubuntu-warm-grey font-mono truncate">
        {{ title }}
      </span>
      <span class="flex gap-1.5 shrink-0" aria-hidden="true">
        <span class="w-3 h-3 rounded-full bg-white/20"></span>
        <span class="w-3 h-3 rounded-full bg-white/20"></span>
        <span class="w-3 h-3 rounded-full bg-ubuntu-orange"></span>
      </span>
    </header>

    <div class="p-4 md:p-6">
      <slot />
    </div>
  </section>
</template>
