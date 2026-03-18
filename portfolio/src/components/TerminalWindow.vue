<script setup lang="ts">
// 별도의 로직 없이 디자인 위주로 구성
</script>

<template>
  <!-- bg-ubuntu-terminal/90 정도로 투명도 유지 -->
  <div class="w-full bg-ubuntu-terminal/90 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-white/10 font-mono">
    <!-- 타이틀 바 -->
    <div class="bg-ubuntu-dark-grey/90 px-3 py-1.5 flex justify-between items-center">
      <div class="text-[10px] md:text-xs text-ubuntu-warm-grey truncate mr-2">sumi@embedded-dev: ~</div>
      <div class="flex gap-1.5 shrink-0">
        <div class="w-3 h-3 rounded-full bg-white/20"></div>
        <div class="w-3 h-3 rounded-full bg-white/20"></div>
        <div class="w-3 h-3 rounded-full bg-ubuntu-orange"></div>
      </div>
    </div>
    
    <!-- 내용: grid-cols를 모바일에서는 1열로 변경 -->
    <div class="p-4 md:p-6 text-xs sm:text-sm md:text-base leading-relaxed h-[300px] md:h-[400px] overflow-y-auto scrollbar-thin">
      <div class="mb-4">
        <span class="text-green-400 font-bold">sumi@dev</span>:<span class="text-blue-400">~</span>$ ls -l skills/
      </div>
      <!-- 반응형 그리드: 기본 1열, 작은 화면(sm)부터 2열 -->
      <div class="mb-6 pl-2 md:pl-4 text-ubuntu-orange grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4">
        <span>-rwxr-xr-x C/C++</span>
        <span>-rw-r--r-- FreeRTOS</span>
        <span>-rwxr-xr-x Linux_Kernel</span>
        <span>-rw-r--r-- Yocto_Build</span>
        <span>-rwxr-xr-x I2C/SPI/UART</span>
        <span>-rw-r--r-- ARM_Cortex</span>
      </div>

      <div class="flex items-center">
        <span class="text-green-400 font-bold">sumi@dev</span>:<span class="text-blue-400">~</span>$ 
        <span class="ml-2 w-2 h-4 bg-ubuntu-orange animate-pulse"></span>
      </div>
    </div>
  </div>
</template>