import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import ContactUs from './views/ContactUs.vue'
import NotFound from './views/NotFound.vue'
import Photos from './views/Photos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home

    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUs
    },
    {
      path: '/photos/:id',
      name: 'photos',
      component: Photos
    },
    { path: '*', component: NotFound }

  ]
})
