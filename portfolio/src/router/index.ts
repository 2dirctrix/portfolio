import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 한 페이지 안에서 스크롤로 섹션을 이동하므로 라우트는 하나만 둔다
    { path: '/', name: 'home', component: HomeView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
