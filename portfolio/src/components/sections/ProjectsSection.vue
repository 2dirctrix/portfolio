<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '@/data/profile'
import type { Project } from '@/types'
import ShellPrompt from '../ShellPrompt.vue'
import ProjectDialog from '../ProjectDialog.vue'
import { resolveProjectImage } from '@/data/projectImages'

const selected = ref<Project | null>(null)

const logoOf = (project: Project) =>
  project.logo ? resolveProjectImage(project.logo) : undefined

// 카드에는 기술 스택을 일부만 노출하고 나머지는 개수로 접는다
const VISIBLE_TECH = 3
</script>

<template>
  <div class="py-10">
    <ShellPrompt command="ls projects/" />

    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- 카드 전체가 버튼이라 키보드로도 열 수 있다 (button 안에는 span만 둔다) -->
      <button
        v-for="project in projects"
        :key="project.id"
        type="button"
        class="group text-left bg-ubuntu-terminal/85 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-white/10 transition-[transform,border-color] duration-200 ease-out motion-safe:hover:scale-[1.02] hover:border-ubuntu-orange/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ubuntu-orange cursor-pointer flex flex-col"
        @click="selected = project"
      >
        <span
          class="bg-ubuntu-dark-grey/90 px-3 py-1.5 flex justify-between items-center gap-2 shrink-0"
        >
          <span class="text-[10px] md:text-xs text-ubuntu-warm-grey font-mono truncate">
            ~/projects/{{ project.title }}
          </span>
          <span class="flex gap-1.5 shrink-0" aria-hidden="true">
            <span class="w-3 h-3 rounded-full bg-white/20"></span>
            <span class="w-3 h-3 rounded-full bg-white/20"></span>
            <span class="w-3 h-3 rounded-full bg-ubuntu-orange"></span>
          </span>
        </span>

        <span class="p-4 flex flex-col flex-1">
          <span class="flex items-center gap-2 mb-1">
            <span class="text-base md:text-lg font-bold text-white leading-snug">
              {{ project.title }}
            </span>
            <!-- 로고는 장식이라 alt를 비워 보조기기에서 건너뛰게 한다 (제목이 바로 옆에 있다) -->
            <img
              v-if="logoOf(project)"
              :src="logoOf(project)"
              alt=""
              class="w-6 h-6 md:w-7 md:h-7 shrink-0 rounded object-contain"
              loading="lazy"
              decoding="async"
            />
          </span>

          <span class="block text-white/55 text-[13px] mb-2">{{ project.subtitle }}</span>

          <span class="block font-mono text-[11px] text-white/35 mb-3">
            {{ project.period }} · {{ project.team }}
          </span>

          <span
            v-if="project.award"
            class="self-start text-[10px] font-mono px-2 py-0.5 rounded-full bg-ubuntu-orange/20 text-ubuntu-orange border border-ubuntu-orange/40 mb-3"
          >
            {{ project.award }}
          </span>
          <span
            v-else-if="project.status"
            class="self-start text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/50 border border-white/15 mb-3"
          >
            {{ project.status }}
          </span>

          <span class="flex flex-wrap gap-1.5 mt-auto">
            <span
              v-for="tech in project.techStack.slice(0, VISIBLE_TECH)"
              :key="tech"
              class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/60"
            >
              {{ tech }}
            </span>
            <span
              v-if="project.techStack.length > VISIBLE_TECH"
              class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-white/40"
            >
              +{{ project.techStack.length - VISIBLE_TECH }}
            </span>
          </span>

          <span
            class="block mt-3 text-[11px] font-mono text-ubuntu-orange/70 group-hover:text-ubuntu-orange transition-colors"
          >
            자세히 보기 →
          </span>
        </span>
      </button>
    </div>

    <ProjectDialog :project="selected" @close="selected = null" />
  </div>
</template>
