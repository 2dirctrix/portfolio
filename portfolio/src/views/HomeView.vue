<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const currentTime = ref('')

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleString('en-US', { 
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false 
  })
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})
</script>

<template>
  <div class="h-full w-full flex flex-col items-center justify-center py-6"">
    <div class="h-full flex flex-col items-center justify-center">
    <div class="text-center mb-6 md:mb-10 px-4">
      <h1 class="text-4xl sm:text-6xl md:text-7xl font-black mb-3 text-white drop-shadow-2xl uppercase tracking-tighter">
        이 준 선
      </h1>
      <p class="text-white/90 text-sm sm:text-base md:text-xl font-medium">
        Embedded Engineer <span class="text-ubuntu-orange">|</span> Ubuntu 24.04 LTS
      </p>
    </div>

    <div class="w-full max-w-[95%] md:max-w-3xl transition-all duration-500 hover:scale-[1.02]">
      <TerminalWindow />
    </div>
  </div>
    <!-- 1. Top Bar (상단 바) -->
    <header class="h-7 bg-black/50 backdrop-blur-md flex justify-between items-center px-4 text-[13px] font-medium z-50">
      <div class="hover:bg-white/10 px-2 h-full flex items-center cursor-default">Activities</div>
      <div class="absolute left-1/2 -translate-x-1/2 hover:bg-white/10 px-2 h-full flex items-center cursor-default">
        {{ currentTime }}
      </div>
      <div class="flex gap-4 items-center">
        <div class="flex gap-3 hover:bg-white/10 px-2 h-full items-center cursor-default">
          <span>📶</span><span>🔊</span><span>🔋</span><span>▼</span>
        </div>
      </div>
    </header>

    <div class="flex flex-1 overflow-hidden">
      <!-- 2. Side Launcher (측면 독) -->
      <aside class="w-14 bg-black/20 backdrop-blur-sm flex flex-col items-center py-4 gap-4 border-r border-white/5">
        <RouterLink to="/" class="hover:bg-white/10 p-2 rounded-xl transition-all active:scale-90 group" title="Home">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/App_grid_icon.svg" class="w-8 h-8 drop-shadow-md" />
        </RouterLink>
        <RouterLink to="/about" class="hover:bg-white/10 p-2 rounded-xl transition-all active:scale-90" title="About">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/GNOME_Contacts_icon_2019.svg" class="w-8 h-8 drop-shadow-md" />
        </RouterLink>
        <RouterLink to="/projects" class="hover:bg-white/10 p-2 rounded-xl transition-all active:scale-90" title="Projects">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/GNOME_Folder_icon_2019.svg" class="w-8 h-8 drop-shadow-md" />
        </RouterLink>
        
        <div class="mt-auto mb-2 opacity-50 hover:opacity-100 transition cursor-pointer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Ubuntu_logo_2022.svg" class="w-8 h-8" />
        </div>
      </aside>

      <!-- 3. Desktop Main Area -->
      <main class="flex-1 relative overflow-y-auto p-10">
        <RouterView />
      </main>
    </div>
  </div>
</template>