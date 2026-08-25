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
const showTopButton = ref(false)
const scrollerRef = useTemplateRef<HTMLElement>('scroller')

const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

const scrollTo = (id: string) => {
  const target = scrollerRef.value?.querySelector<HTMLElement>(`[data-section="${id}"]`)
  if (!target) return

  target.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
}

// 런처가 아닌 스크롤 컨테이너 자체를 맨 위로 올린다
const scrollToTop = () => {
  scrollerRef.value?.scrollTo({ top: 0, behavior: scrollBehavior() })
}

// 스크롤 위치로 현재 섹션을 판정한다 (런처 클릭과 휠 스크롤 양쪽에서 동일하게 동작)
let frame = 0
const syncActiveSection = () => {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    const scroller = scrollerRef.value
    if (!scroller) return

    // 한 화면 이상 내려갔을 때만 '맨 위로' 버튼을 띄운다
    showTopButton.value = scroller.scrollTop > scroller.clientHeight * 0.6

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
        class="relative z-30 w-12 md:w-16 bg-black/20 backdrop-blur-xl flex flex-col items-center py-4 gap-2 md:gap-4 border-r border-white/5 shrink-0 select-none"
      >
        <!-- 활성 표시 막대가 잘리지 않도록, 런처 폭 전체를 기준(relative)으로 삼는다 -->
        <div
          v-for="section in sections"
          :key="section.id"
          class="group relative w-full flex justify-center"
        >
          <div
            v-if="activeSection === section.id"
            class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 md:h-6 bg-ubuntu-orange rounded-r-full shadow-[0_0_8px_#E95420]"
          ></div>
          <button
            type="button"
            :aria-label="section.label"
            :aria-current="activeSection === section.id ? 'true' : undefined"
            class="relative p-2 rounded-2xl cursor-pointer transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-white/10 hover:scale-[1.18] hover:shadow-lg hover:shadow-ubuntu-orange/25 active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ubuntu-orange"
            @click="scrollTo(section.id)"
          >
            <!-- glow ring -->
            <span
              class="pointer-events-none absolute inset-0 rounded-2xl border border-ubuntu-orange/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              aria-hidden="true"
            ></span>
            <svg
              viewBox="0 0 24 24"
              class="w-7 h-7 md:w-9 md:h-9 drop-shadow-md transition-colors"
              :class="activeSection === section.id ? 'fill-white' : 'fill-white/60'"
            >
              <path :d="section.icon" />
            </svg>
          </button>

          <!-- 툴팁: 호버와 키보드 포커스 모두에서 뜬다 -->
          <span
            class="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-1 md:ml-2 z-40 whitespace-nowrap rounded-md border border-white/10 bg-black/85 backdrop-blur-sm px-2 py-1 text-xs text-white shadow-lg opacity-0 -translate-x-1 transition-[opacity,transform] duration-150 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0"
            role="tooltip"
          >
            {{ section.label }}
          </span>
        </div>
      </aside>

      <!-- 3. Main Area: 이 요소가 스크롤 컨테이너다 -->
      <main
        ref="scroller"
        class="flex-1 relative overflow-y-auto overflow-x-hidden p-4 md:p-10 scroll-smooth"
      >
        <RouterView />
      </main>

      <!-- 맨 위로: 뷰포트 기준 고정. 상세 다이얼로그(z-100)보다는 아래에 둔다 -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-2"
        leave-active-class="transition duration-150 ease-in"
        leave-to-class="opacity-0 translate-y-2"
      >
        <button
          v-if="showTopButton"
          type="button"
          aria-label="맨 위로"
          title="맨 위로"
          class="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-ubuntu-orange text-white shadow-lg shadow-black/40 hover:brightness-110 active:scale-90 transition-[filter,transform] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
          @click="scrollToTop"
        >
          <svg viewBox="0 0 24 24" class="w-5 h-5 md:w-6 md:h-6 fill-current" aria-hidden="true">
            <path d="M12 4l8 8-1.4 1.4L13 7.8V20h-2V7.8L5.4 13.4 4 12z" />
          </svg>
        </button>
      </Transition>
    </div>
  </div>
</template>
