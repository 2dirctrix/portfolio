<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue'
import { RouterView } from 'vue-router'

const currentTime = ref('')

// 아이콘은 외부 링크 대신 인라인 SVG path로 두어 네트워크 없이도 렌더링된다
const sections = [
  {
    id: 'home',
    label: 'Home',
    icon: 'M3 3h5v5H3V3zm6.5 0h5v5h-5V3zM16 3h5v5h-5V3zM3 9.5h5v5H3v-5zm6.5 0h5v5h-5v-5zm6.5 0h5v5h-5v-5zM3 16h5v5H3v-5zm6.5 0h5v5h-5v-5zm6.5 0h5v5h-5v-5z',
  },
  {
    id: 'about',
    label: 'About',
    icon: 'M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5.33 0-8 2.67-8 5.33V22h16v-2.67C20 16.67 17.33 14 12 14z',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'M3 6a2 2 0 0 1 2-2h4.17a2 2 0 0 1 1.42.59L12 6h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z',
  },
  {
    id: 'career',
    label: 'Career',
    icon: 'M9 4a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3V6a2 2 0 0 0-2-2H9zm0 3V6h6v1H9z',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 9L4.5 7.5v-.9L12 11.6l7.5-5v.9L12 13z',
  },
]

const activeSection = ref('home')
const scrollerRef = useTemplateRef<HTMLElement>('scroller')

const scrollTo = (id: string) => {
  const target = scrollerRef.value?.querySelector<HTMLElement>(`[data-section="${id}"]`)
  if (!target) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
}

// 스크롤 위치로 현재 섹션을 판정한다 (런처 클릭과 휠 스크롤 양쪽에서 동일하게 동작)
let frame = 0
const syncActiveSection = () => {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    const scroller = scrollerRef.value
    if (!scroller) return

    const nodes = [...scroller.querySelectorAll<HTMLElement>('[data-section]')]
    const first = nodes[0]
    if (!first) return

    // 맨 아래까지 내렸다면 마지막 섹션을 활성으로 둔다
    if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 4) {
      const last = nodes[nodes.length - 1]
      activeSection.value = last?.dataset.section ?? activeSection.value
      return
    }

    const threshold = scroller.clientHeight * 0.35
    let current = first.dataset.section ?? 'home'
    for (const node of nodes) {
      if (node.offsetTop - scroller.scrollTop <= threshold) {
        current = node.dataset.section ?? current
      }
    }
    activeSection.value = current
  })
}

let timerId: ReturnType<typeof setInterval> | undefined

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

onMounted(() => {
  updateTime()
  timerId = setInterval(updateTime, 1000)

  scrollerRef.value?.addEventListener('scroll', syncActiveSection, { passive: true })
  syncActiveSection()
})

onUnmounted(() => {
  clearInterval(timerId)
  scrollerRef.value?.removeEventListener('scroll', syncActiveSection)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <!-- h-screen(100vh)와 w-full(100%)로 화면을 고정 -->
  <div
    class="h-screen w-full flex flex-col overflow-hidden bg-gradient-to-br from-ubuntu-purple via-ubuntu-mid-purple to-ubuntu-orange"
  >
    <!-- 1. Top Bar: 시계를 가운데 고정하려면 기준이 되는 relative가 필요 -->
    <header
      class="relative h-7 bg-black/50 backdrop-blur-md flex justify-between items-center px-2 md:px-4 text-[12px] md:text-[13px] z-50 shrink-0 select-none"
    >
      <div class="hover:bg-white/10 px-2 h-full flex items-center">Activities</div>
      <div class="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
        {{ currentTime }}
      </div>
      <div class="flex gap-2 md:gap-4 items-center">
        <span>📶</span><span>🔊</span><span>🔋</span>
      </div>
    </header>

    <div class="flex flex-1 overflow-hidden min-h-0">
      <!-- 2. Side Launcher: 클릭하면 해당 섹션으로 스크롤된다 -->
      <aside
        class="w-12 md:w-16 bg-black/20 backdrop-blur-xl flex flex-col items-center py-4 gap-2 md:gap-4 border-r border-white/5 shrink-0 select-none"
      >
        <!-- 활성 표시 막대가 잘리지 않도록, 런처 폭 전체를 기준(relative)으로 삼는다 -->
        <div
          v-for="section in sections"
          :key="section.id"
          class="relative w-full flex justify-center"
        >
          <div
            v-if="activeSection === section.id"
            class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 md:h-6 bg-ubuntu-orange rounded-r-full shadow-[0_0_8px_#E95420]"
          ></div>
          <button
            type="button"
            :title="section.label"
            :aria-label="section.label"
            :aria-current="activeSection === section.id ? 'true' : undefined"
            class="p-2 rounded-xl transition-all hover:bg-white/10 active:scale-90 cursor-pointer"
            @click="scrollTo(section.id)"
          >
            <svg
              viewBox="0 0 24 24"
              class="w-7 h-7 md:w-9 md:h-9 drop-shadow-md transition-colors"
              :class="activeSection === section.id ? 'fill-white' : 'fill-white/60'"
            >
              <path :d="section.icon" />
            </svg>
          </button>
        </div>
      </aside>

      <!-- 3. Main Area: 이 요소가 스크롤 컨테이너다 -->
      <main
        ref="scroller"
        class="flex-1 relative overflow-y-auto overflow-x-hidden p-4 md:p-10 scroll-smooth"
      >
        <RouterView />
      </main>
    </div>
  </div>
</template>
