<template>
  <section class="min-h-screen py-24 px-6 md:px-20 bg-black/10 backdrop-blur-sm">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl font-black mb-16 inline-block border-b-4 border-ubuntu-orange pb-2 uppercase tracking-tighter">
        /var/log/about_me
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div class="space-y-6 text-lg text-white/90 leading-relaxed italic">
          <p>"하드웨어의 동작 원리를 이해하고, 가장 효율적인 소프트웨어를 구현하는 것을 즐깁니다."</p>
          <p>임베디드 리눅스 엔지니어로서 커널 수준의 드라이버 개발과 빌드 시스템 최적화 경험을 쌓아왔습니다.</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="skill in ['C/C++', 'Linux', 'RTOS', 'Yocto', 'Python', 'Git']" :key="skill"
               class="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-ubuntu-orange transition-all">
            <span class="text-ubuntu-orange font-bold mr-2">></span> {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>