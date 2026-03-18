<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";

const currentTime = ref("");

const menus = [
  { path: '/', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/App_grid_icon.svg' },
  { path: '/about', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/GNOME_Contacts_icon_2019.svg' },
  { path: '/projects', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/66/GNOME_Folder_icon_2019.svg' }
]

const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
});
</script>

<template>
  <!-- h-screen(100vh)와 w-full(100%)로 화면을 고정 -->
  <div class="h-screen w-full flex flex-col overflow-hidden select-none bg-gradient-to-br from-ubuntu-purple via-ubuntu-mid-purple to-ubuntu-orange">
    
    <!-- 1. Top Bar: 모바일에서는 글자가 겹치지 않게 간격 조절 -->
    <header class="h-7 bg-black/50 backdrop-blur-md flex justify-between items-center px-2 md:px-4 text-[12px] md:text-[13px] z-50 shrink-0">
      <div class="hover:bg-white/10 px-2 h-full flex items-center">Activities</div>
      <div class="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
        {{ currentTime }}
      </div>
      <div class="flex gap-2 md:gap-4 items-center">
        <span>📶</span><span>🔊</span><span>🔋</span>
      </div>
    </header>

    <div class="flex flex-1 overflow-hidden min-h-0">
      <!-- 2. Side Launcher: 화면이 아주 작아지면 숨기거나 좁게 유지 -->
      <aside class="w-12 md:w-16 bg-black/20 backdrop-blur-xl flex flex-col items-center py-4 gap-2 md:gap-4 border-r border-white/5 shrink-0">
        <!-- 각 아이콘의 크기도 반응형으로 조절 -->
        <RouterLink v-for="menu in menus" :key="menu.path" :to="menu.path" class="relative p-2">
          <div v-if="$route.path === menu.path" class="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 w-1 h-5 md:h-6 bg-ubuntu-orange rounded-r-full shadow-[0_0_8px_#E95420]"></div>
          <img :src="menu.icon" class="w-7 h-7 md:w-9 md:h-9" />
        </RouterLink>
      </aside>

      <!-- 3. Main Area: 가로 스크롤 방지를 위해 overflow-x-hidden 설정 -->
      <main class="flex-1 relative overflow-y-auto overflow-x-hidden p-4 md:p-10">
        <RouterView />
      </main>
    </div>
  </div>
</template>