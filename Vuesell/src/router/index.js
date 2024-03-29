import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import goods from '@/components/goods/goods.vue'
import ratings from '@/components/ratings/ratings.vue'
import seller from '@/components/seller/seller.vue'


Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }

  ],
  linkActiveClass: 'active'
})
