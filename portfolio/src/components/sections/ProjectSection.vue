<script setup lang="ts">
const projects = [
  { 
    id: 1, 
    title: "Linux Kernel Driver", 
    desc: "I2C 센서 데이터를 처리하는 커스텀 커널 드라이버 설계", 
    tech: ["C", "Linux", "I2C"] 
  },
  { 
    id: 2, 
    title: "Yocto Project Image", 
    desc: "Raspberry Pi용 커스텀 OS 이미지 빌드 및 최적화", 
    tech: ["Python", "Bitbake", "Shell"] 
  },
  { 
    id: 3, 
    title: "RTOS Monitoring System", 
    desc: "FreeRTOS 기반의 실시간 데이터 수집 및 처리 시스템", 
    tech: ["C++", "FreeRTOS", "STM32"] 
  }
]
</script>

<template>
  <section class="min-h-screen py-24 px-6 md:px-20">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-black mb-16 inline-block border-b-4 border-ubuntu-orange pb-2 uppercase tracking-tighter">
        /home/sumi/projects
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="p in projects" :key="p.id" 
             class="group bg-ubuntu-terminal/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div class="h-48 bg-gradient-to-r from-ubuntu-purple to-ubuntu-mid-purple flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
            📂
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-3 group-hover:text-ubuntu-orange transition-colors">{{ p.title }}</h3>
            <p class="text-white/60 mb-6 leading-relaxed">{{ p.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="t in p.tech" :key="t" class="text-[10px] font-mono bg-black/30 px-2 py-1 rounded text-ubuntu-warm-grey border border-white/5">
                #{{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>