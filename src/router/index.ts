import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/Layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'editor',
          component: () => import('@/views/Editor.vue')
        }
      ]
    }
  ]
})

export default router
