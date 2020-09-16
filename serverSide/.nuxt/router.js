import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55a845f6 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _62addb38 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _2f3c7ebc = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _64172a96 = () => interopDefault(import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _71abd30c = () => interopDefault(import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _54fef863 = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _bc0048b2 = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _6368ec78 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _55a845f6,
    name: "about"
  }, {
    path: "/admin",
    component: _62addb38,
    name: "admin"
  }, {
    path: "/posts",
    component: _2f3c7ebc,
    name: "posts"
  }, {
    path: "/admin/auth",
    component: _64172a96,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _71abd30c,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _54fef863,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _bc0048b2,
    name: "posts-id"
  }, {
    path: "/",
    component: _6368ec78,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
