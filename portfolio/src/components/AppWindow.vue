<script setup lang="ts">
// 우분투 창 크롬(타이틀바 + 신호등 버튼)을 재사용하기 위한 래퍼
defineProps<{
  title: string
}>()
</script>

<template>
  <!-- 호버 시 살짝 확대. 모션을 줄인 환경에서는 적용하지 않는다 -->
  <section
    class="bg-ubuntu-terminal/85 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-white/10 transition-transform duration-200 ease-out motion-safe:hover:scale-[1.02]"
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
