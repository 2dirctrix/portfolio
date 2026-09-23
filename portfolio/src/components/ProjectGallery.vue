<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { ProjectImage } from '@/types'
import { resolveProjectImage } from '@/data/projectImages'

const props = defineProps<{
  images: ProjectImage[]
}>()

// 파일을 못 찾은 이미지는 빼고 보여준다
const resolved = computed(() =>
  props.images
    .map((image) => ({ ...image, url: resolveProjectImage(image.file) }))
    .filter((image): image is ProjectImage & { url: string } => Boolean(image.url)),
)

const current = ref(0)

// 다른 프로젝트를 열면 첫 장부터 다시 본다
watch(
  () => props.images,
  () => {
    current.value = 0
  },
)

const go = (index: number) => {
  const total = resolved.value.length
  if (total === 0) return
  current.value = (index + total) % total
}
</script>

<template>
  <figure v-if="resolved.length" class="mb-5">
    <div class="relative rounded-md overflow-hidden border border-white/10 bg-black/40">
      <img
        :src="resolved[current]!.url"
        :alt="resolved[current]!.alt"
        class="w-full max-h-[45vh] object-contain"
        decoding="async"
      />

      <!-- 여러 장일 때만 좌우 이동 버튼을 둔다 -->
      <template v-if="resolved.length > 1">
        <button
          type="button"
          aria-label="이전 사진"
          class="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white text-lg cursor-pointer transition-colors"
          @click="go(current - 1)"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="다음 사진"
          class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white text-lg cursor-pointer transition-colors"
          @click="go(current + 1)"
        >
          ›
        </button>
      </template>
    </div>

    <figcaption class="mt-2 text-white/60 text-[13px]">
      {{ resolved[current]!.alt }}
      <span v-if="resolved.length > 1" class="font-mono text-white/35 ml-1">
        ({{ current + 1 }}/{{ resolved.length }})
      </span>
    </figcaption>

    <!-- 썸네일 목록 -->
    <ul v-if="resolved.length > 1" class="flex flex-wrap gap-2 mt-3">
      <li v-for="(image, index) in resolved" :key="image.file">
        <button
          type="button"
          :aria-label="`${index + 1}번째 사진 보기`"
          :aria-current="index === current ? 'true' : undefined"
          class="block w-16 h-12 rounded overflow-hidden border transition-colors cursor-pointer"
          :class="
            index === current
              ? 'border-ubuntu-orange'
              : 'border-white/15 hover:border-white/40 opacity-70 hover:opacity-100'
          "
          @click="go(index)"
        >
          <img :src="image.url" :alt="image.alt" class="w-full h-full object-cover" loading="lazy" />
        </button>
      </li>
    </ul>
  </figure>
</template>
