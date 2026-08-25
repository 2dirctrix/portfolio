<script setup lang="ts">
import { timeline, certificates, trainings } from '@/data/profile'
import AppWindow from '../AppWindow.vue'
import ShellPrompt from '../ShellPrompt.vue'
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
            <p class="text-white/55 text-sm">{{ entry.org }}</p>

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
          </li>
        </ol>
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
