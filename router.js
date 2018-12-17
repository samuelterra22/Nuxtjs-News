import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'

import Routes from '~/pages/routes'

Vue.use(Router)

/**
 *  Application routes
 *
 *  @returns {VueRouter} The router with app routes
 * */
export function createRouter() {
  return new Router({
    base: '/',
    mode: 'history',
    fallback: false,
    linkActiveClass: 'is-active-link',
    linkExactActiveClass: 'is-active-link-exact',
    scrollBehavior,
    routes: [...Routes]
  })
}
