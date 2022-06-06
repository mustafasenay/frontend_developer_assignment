import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboardPage from '../components/dashboardPage.vue'
import birthdayPage from '../components/birthdayPage.vue'
import newCommersPage from '../components/newCommersPage.vue'
import moreNewsPage from '../components/moreNewsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    name : 'dashboardPage',
    component : dashboardPage
  },
  {
    path : "/birthdaypage",
    name : 'birthdayPage',
    component : birthdayPage
  },
  {
    path : "/newcommerspage",
    name : 'newCommersPage',
    component : newCommersPage
  },
  {
    path : "/morenewspage",
    name : 'moreNewsPage',
    component : moreNewsPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
