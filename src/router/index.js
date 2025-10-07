import { createRouter, createWebHistory } from 'vue-router'
import Randevu from '../components/Randevu.vue'
import Hakkimizda from '../components/Hakkimizda.vue'
import Iletisim from '../components/Iletisim.vue'
import InfoSection from '../components/InfoSection.vue'

const routes = [
  { path: '/', component: InfoSection },
  { path: '/randevu', component: Randevu },
  { path: '/hakkimizda', component: Hakkimizda },
  { path: '/iletisim', component: Iletisim },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
