import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import signIn from '../components/signIn';
import admin from '../views/Admin.vue';
import newProduct from '../components/NewProduct';
import listProduct from '../components/ProductList';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: signIn,
  },
  {
    path: '/Admin',
    name: 'admin',
    component: admin,
    children: [
      {
        path: 'new-product',
        name: 'new-product',
        component: newProduct,
      },
      {
        path: 'list-product',
        name: 'list-product',
        component: listProduct,
      },
    ],
  },
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/About.vue'),
  },*/
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
