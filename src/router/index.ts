import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue')
    },
    {
      path: '/product-page',
      name: 'product-page',
      component: () => import('@/pages/product/productPage.vue')
    },

    {
      path: '/sector-educativo-page',
      name: 'sector-educativo-page',
      component: () => import('@/pages/product/sectorEducativo/sectorEducativoPage.vue')
    },
    {
      path: '/hoteleria-turismo-page',
      name: 'hoteleria-turismo-page',
      component: () => import('@/pages/product/hoteleriaTurismo/hoteleriaTurismoPage.vue')
    },
    {
      path: '/hospitales-clinicas-page',
      name: 'hospitales-clinicas-page',
      component: () => import('@/pages/product/hospitalesClinicas/hospitalesClinicasPage.vue')
    },
    {
      path: '/compra-venta-page',
      name: 'compra-venta-page',
      component: () => import('@/pages/product/compraVenta/compraVentaPage.vue')
    },
    {
      path: '/alquileres-page',
      name: 'alquileres-page',
      component: () => import('@/pages/product/alquileres/alquileresPage.vue')
    },
    {
      path: '/tasa-cero-page',
      name: 'tasa-cero-page',
      component: () => import('@/pages/product/tasaCero/tasaCeroPage.vue')
    },

    {
      path: '/about-us-page',
      name: 'about-us-page',
      component: () => import('@/pages/aboutUs/aboutUsPage.vue')
    },
    {
      path: '/contact-us-page',
      name: 'contact-us-page',
      component: () => import('@/pages/contactUs/contactUsPage.vue')
    },

    {
      path: '/maintenance-page',
      name: 'maintenance-page',
      component: () => import('@/pages/service/maintenancePage.vue')
    },
    {
      path: '/tecnic-suport-page',
      name: 'tecnic-suport-page',
      component: () => import('@/pages/service/tecnicSuportPage.vue')
    },
    {
      path: '/tecnic-capacitation-page',
      name: 'tecnic-capacitation-page',
      component: () => import('@/pages/service/tecnicCapacitationPage.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router