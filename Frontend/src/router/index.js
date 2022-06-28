import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'AllLivro',
    component: Home
  },
  {
    path: '/getlivro',
    name: 'Livro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Livro.vue')
  },
  {
    path: '/newLivro',
    name: 'newLivro',
    component: () => import(/* webpackChunkName: "about" */ '../views/newLivro.vue')
  },
  {
    path: '/newAssistente',
    name: 'newAssistente',
    component: () => import(/* webpackChunkName: "about" */ '../views/newAssistente.vue')
  },
  {
    path: '/newBibliotecario',
    name: 'newBibliotecario' ,
    component: () => import(/* webpackChunkName: "about" */ '../views/newBibliotecario.vue')
  },
  {
    path: '/newUsuario',
    name: 'newUsuario' ,
    component: () => import(/* webpackChunkName: "about" */ '../views/newUsuario.vue')
  },
  {
    path: '/livros',
    name: 'livros' ,
    component: () => import(/* webpackChunkName: "about" */ '../views/Livros.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
