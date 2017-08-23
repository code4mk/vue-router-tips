import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tutorial from '@/components/Tutorial'
import Music from '@/components/Music'
import Mdocument from '@/components/Mdocument'
import Videos from '@/components/Videos'
import Edit from '@/components/Edit'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial,
    children: [
      {
        path: '/',
        redirect: 'music'
      },
      {
        path: 'music',
        name: 'Music',
        component: Music
      },
      {
        path: 'documents',
        name: 'Document',
        component: Mdocument
      },
      {
        path: 'videos',
        component: Videos
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: 'admin',
  routes

})
