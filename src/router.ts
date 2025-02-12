//@ts-ignore
import routes from 'virtual:generated-pages'
import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


// router.beforeEach(async (to, from, next) => {
//   from
//   to

//   next({ path: '/home' })


// })

export default router
