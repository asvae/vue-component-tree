import Router from 'vue-router'
import Vue from 'vue'

import {createRoute, VueBookComponents} from 'vue-book'
import ContactComponent from './components/tree/ContactComponent'

Vue.use(Router)
Vue.use(VueBookComponents)

export default new Router({
  routes: [
    createRoute({
      requireContext: require.context('./components', true, /.vue$/),
      path: '/demo',
      hideFileExtensions: false, // optional, hides file extensions in list.
    }),
    {
      path: '/path',
      component: ContactComponent,
    },
  ],
})
