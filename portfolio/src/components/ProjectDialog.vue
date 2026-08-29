<script setup lang="ts">
import { ref, watch, onUnmounted, nextTick } from 'vue'
import type { Project } from '@/types'

const props = defineProps<{
  project: Project | null
}>()

const emit = defineEmits<{ close: [] }>()

const panelRef = ref<HTMLElement | null>(null)

// 다이얼로그를 연 요소. 닫을 때 여기로 포커스를 돌려준다.
let previouslyFocused: HTMLElement | null = null

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

const focusableInPanel = () =>
  panelRef.value ? [...panelRef.value.querySelectorAll<HTMLElement>(FOCUSABLE)] : []

// Tab이 다이얼로그 밖으로 새어나가지 않도록 순환시킨다
const trapTab = (event: KeyboardEvent) => {
  const items = focusableInPanel()
  const first = items[0]
  const last = items[items.length - 1]
  if (!first || !last) {
    // 포커스 가능한 요소가 없으면 패널 자신에 묶어둔다
    event.preventDefault()
    panelRef.value?.focus()
    return
  }

  const active = document.activeElement
  if (event.shiftKey && (active === first || active === panelRef.value)) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && active === last) {
    event.preventDefault()
    first.focus()
  }
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
    return
  }
  if (event.key === 'Tab') trapTab(event)
}

// 열려 있는 동안에만 리스너를 붙인다
watch(
  () => props.project,
  async (project) => {
    if (project) {
      previouslyFocused = document.activeElement as HTMLElement | null
      window.addEventListener('keydown', onKeydown)
      await nextTick()
      panelRef.value?.focus()
    } else {
      window.removeEventListener('keydown', onKeydown)
      // 닫은 뒤 원래 카드로 돌아가야 키보드 사용자가 위치를 잃지 않는다
      previouslyFocused?.focus()
      previouslyFocused = null
    }
  },
)

onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="project"
        class="fixed inset-0 z-100 flex items-center justify-center p-3 md:p-8 bg-black/60 backdrop-blur-sm"
        @click.self="emit('close')"
      >
        <div
          ref="panelRef"
          role="dialog"
          aria-modal="true"
          :aria-label="project.title"
          tabindex="-1"
          class="w-full max-w-2xl max-h-full flex flex-col bg-ubuntu-terminal rounded-lg shadow-2xl border border-white/15 overflow-hidden outline-none"
        >
          <!-- 타이틀 바: 오렌지 점이 닫기 버튼 -->
          <header
            class="bg-ubuntu-dark-grey px-3 py-2 flex justify-between items-center gap-2 shrink-0"
          >
            <span class="text-[11px] md:text-xs text-ubuntu-warm-grey font-mono truncate">
              ~/projects/{{ project.title }}
            </span>
            <span class="flex gap-1.5 shrink-0 items-center">
              <span class="w-3 h-3 rounded-full bg-white/20" aria-hidden="true"></span>
              <span class="w-3 h-3 rounded-full bg-white/20" aria-hidden="true"></span>
              <button
                type="button"
                aria-label="닫기"
                class="w-3 h-3 rounded-full bg-ubuntu-orange hover:brightness-125 transition cursor-pointer"
                @click="emit('close')"
              ></button>
            </span>
          </header>

          <div class="p-5 md:p-6 overflow-y-auto scrollbar-thin">
            <div class="flex items-start justify-between gap-3 mb-1">
              <h2 class="text-xl md:text-2xl font-bold text-white">{{ project.title }}</h2>
              <span
                v-if="project.award"
                class="shrink-0 text-[10px] md:text-[11px] font-mono px-2 py-0.5 rounded-full bg-ubuntu-orange/20 text-ubuntu-orange border border-ubuntu-orange/40"
              >
                {{ project.award }}
              </span>
              <span
                v-else-if="project.status"
                class="shrink-0 text-[10px] md:text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/50 border border-white/15"
              >
                {{ project.status }}
              </span>
            </div>

            <p class="text-white/60 text-sm mb-2">{{ project.subtitle }}</p>

            <p class="font-mono text-[11px] text-white/40 mb-5">
              {{ [project.period, project.team, ...project.role].join(' · ') }}
            </p>

            <p class="text-white/85 text-sm md:text-[15px] leading-relaxed">
              {{ project.description }}
            </p>

            <ul v-if="project.details.length" class="mt-4 space-y-2">
              <li
                v-for="(detail, i) in project.details"
                :key="i"
                class="text-white/75 text-[13px] md:text-sm leading-relaxed flex gap-2"
              >
                <span class="text-ubuntu-orange shrink-0" aria-hidden="true">›</span>
                <span>{{ detail }}</span>
              </li>
            </ul>

            <ul class="flex flex-wrap gap-1.5 mt-5">
              <li
                v-for="tech in project.techStack"
                :key="tech"
                class="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/70"
              >
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
