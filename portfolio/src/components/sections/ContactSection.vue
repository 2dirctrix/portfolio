<script setup lang="ts">
import { contacts, profile } from '@/data/profile'
import AppWindow from '../AppWindow.vue'
import ShellPrompt from '../ShellPrompt.vue'
</script>

<template>
  <div class="py-10">
    <ShellPrompt command="cat contact.txt" />

    <div class="mt-4">
      <AppWindow title="contact.txt">
        <dl class="space-y-3">
          <div
            v-for="contact in contacts"
            :key="contact.label"
            class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
          >
            <dt class="font-mono text-xs text-ubuntu-orange w-20 shrink-0">
              {{ contact.label }}
            </dt>
            <dd class="text-sm md:text-base">
              <a
                v-if="contact.href"
                :href="contact.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/85 hover:text-ubuntu-orange underline underline-offset-4 decoration-white/20 hover:decoration-ubuntu-orange transition-colors break-all"
              >
                {{ contact.value }}
              </a>
              <span v-else class="text-white/85 break-all">{{ contact.value }}</span>
            </dd>
          </div>
        </dl>

        <p class="mt-6 pt-5 border-t border-white/10 text-white/45 text-xs md:text-sm">
          {{ profile.goal }}
        </p>
      </AppWindow>

      <p class="mt-6 text-center font-mono text-[11px] text-white/25">
        © {{ new Date().getFullYear() }} {{ profile.name }}
      </p>
    </div>
  </div>
</template>
