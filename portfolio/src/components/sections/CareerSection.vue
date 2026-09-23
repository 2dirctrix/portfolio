<script setup lang="ts">
import { ref } from 'vue'
import { timeline, awards, certificates, trainings } from '@/data/profile'
import AppWindow from '../AppWindow.vue'
import ShellPrompt from '../ShellPrompt.vue'

// 접힌 상태로 시작해 클릭하면 펼쳐진다
const awardsOpen = ref(false)
</script>

<template>
  <div class="py-10">
    <ShellPrompt command="cat career.log" />

    <div class="mt-4 space-y-4">
      <AppWindow title="career.log">
        <ol class="relative border-l border-white/15 ml-2 space-y-7">
          <li v-for="entry in timeline" :key="entry.period" class="pl-5">
            <span
              class="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full bg-ubuntu-orange"
              aria-hidden="true"
            ></span>

            <p class="flex items-center gap-2 flex-wrap">
              <span class="font-mono text-[11px] md:text-xs text-ubuntu-orange">
                {{ entry.period }}
              </span>
              <span
                v-if="entry.ongoing"
                class="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-green-400/15 text-green-400 border border-green-400/30"
              >
                진행 중
              </span>
            </p>
            <h3 class="text-base md:text-lg font-bold text-white mt-0.5">{{ entry.title }}</h3>
            <p class="text-white/55 text-sm">
              <!-- 운영 기관이 있으면 대상 앞에 붙인다 -->
              <span v-if="entry.agency" class="text-white/75">{{ entry.agency }}</span>
              <span v-if="entry.agency" class="text-white/30 mx-1.5" aria-hidden="true">·</span>
              <span>{{ entry.org }}</span>
            </p>

            <ul v-if="entry.points.length" class="mt-2 space-y-1">
              <li
                v-for="(point, i) in entry.points"
                :key="i"
                class="text-white/70 text-[13px] leading-relaxed flex gap-2"
              >
                <span class="text-white/30 shrink-0" aria-hidden="true">·</span>
                <span>{{ point }}</span>
              </li>
            </ul>

            <!-- 관련 기사 등 외부 링크 -->
            <ul v-if="entry.links?.length" class="mt-3 space-y-1">
              <li v-for="link in entry.links" :key="link.href">
                <a
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-baseline gap-1.5 text-[13px] text-ubuntu-orange hover:underline underline-offset-4"
                >
                  <span>{{ link.label }}</span>
                  <span v-if="link.source" class="text-white/40 text-[11px] font-mono">
                    {{ link.source }} ↗
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ol>
      </AppWindow>

      <AppWindow title="awards/">
        <button
          type="button"
          class="w-full flex items-center justify-between gap-3 cursor-pointer group"
          :aria-expanded="awardsOpen"
          aria-controls="awards-list"
          @click="awardsOpen = !awardsOpen"
        >
          <span class="text-base md:text-lg font-bold text-white">수상 내역</span>
          <span class="flex items-center gap-2 shrink-0">
            <span class="font-mono text-base md:text-lg font-bold text-white">
              {{ awards.length }}건
            </span>
            <svg
              viewBox="0 0 24 24"
              class="w-6 h-6 fill-white transition-transform duration-200"
              :class="awardsOpen ? 'rotate-180' : ''"
              aria-hidden="true"
            >
              <path d="M12 15.5 5.5 9l1.4-1.4L12 12.7l5.1-5.1L18.5 9z" />
            </svg>
          </span>
        </button>

        <!-- grid-rows 0fr→1fr 트릭: max-height를 추정하지 않고도 높이가 자연스럽게 늘어난다 -->
        <div
          id="awards-list"
          class="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
          :class="awardsOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
          <div class="overflow-hidden">
            <ul class="space-y-4 pt-4">
              <li
                v-for="award in awards"
                :key="`${award.title}-${award.sortKey}`"
                class="pb-4 last:pb-0 border-b border-white/10 last:border-0"
              >
                <div class="flex items-start justify-between gap-3 flex-wrap">
                  <p class="font-bold text-white text-sm md:text-base">
                    {{ award.title }}
                    <span v-if="award.project" class="text-white/55 font-normal">
                      — {{ award.project }}
                    </span>
                  </p>
                  <span
                    class="shrink-0 text-[10px] md:text-[11px] font-mono px-2 py-0.5 rounded-full bg-ubuntu-orange/20 text-ubuntu-orange border border-ubuntu-orange/40"
                  >
                    {{ award.rank }}
                  </span>
                </div>

                <p v-if="award.category" class="text-white/60 text-[13px] mt-1">
                  {{ award.category }}
                </p>

                <p class="font-mono text-[11px] text-white/35 mt-1">
                  {{ award.org }} · {{ award.period }} · {{ award.team }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </AppWindow>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppWindow title="certificates/">
          <h3 class="text-base md:text-lg font-bold text-white mb-3">자격 · 어학</h3>
          <ul class="space-y-2">
            <li
              v-for="cert in certificates"
              :key="cert.name"
              class="flex justify-between items-baseline gap-3 text-sm"
            >
              <span class="text-white/85">{{ cert.name }}</span>
              <span class="font-mono text-[11px] text-white/40 shrink-0">
                {{ cert.org ? `${cert.org} · ${cert.date}` : cert.date }}
              </span>
            </li>
          </ul>
        </AppWindow>

        <AppWindow title="trainings/">
          <h3 class="text-base md:text-lg font-bold text-white mb-3">교육 이수</h3>
          <ul class="space-y-2">
            <li
              v-for="training in trainings"
              :key="training.name"
              class="flex justify-between items-baseline gap-3 text-sm"
            >
              <span class="text-white/85">{{ training.name }}</span>
              <span class="font-mono text-[11px] text-white/40 shrink-0">
                {{ training.org ? `${training.org} · ${training.date}` : training.date }}
              </span>
            </li>
          </ul>
        </AppWindow>
      </div>
    </div>
  </div>
</template>
