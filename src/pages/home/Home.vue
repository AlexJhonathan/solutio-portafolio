<template>
  <v-container class="pt-5 px-0 pb-15" style="max-width: 1300px; margin: 0 auto;">
    <v-row justify="center" align="center" class="mb-15">
      <!-- Columna de texto -->
      <v-col cols="12" md="6" class="pt-15 mt-10">
        <h1 class="display-title">
          Especialistas en sistemas de Facturación en Línea para negocios modernos
        </h1>
        <p class="description-text mt-6">
          SOLUTIO S.R.L. es una empresa especializada en facturación electrónica, dedicada a ofrecer soluciones tecnológicas adaptadas a distintos rubros como hoteles, instituciones educativas y comercios, facilitando una gestión fiscal moderna, ágil y eficiente. Trabajamos con un enfoque práctico y cercano, acompañando a cada cliente en su proceso de digitalización.
        </p>
        <v-btn
          class="custom-hover-btn text-body-2 mt-8 mb-15 mr-8"
          color="#1565C0"
          rounded="lg"
          variant="flat"
          height="45"
          width="150"
          elevation="2"
          @click="scrollToSection('product')"
        >
          Ver Productos
        </v-btn>

        <v-btn
          class="custom-hover-btn text-body-2 mt-8 mb-15"
          color="#1565C0"
          rounded="lg"
          variant="flat"
          height="45"
          width="150"
          elevation="2"
          @click="scrollToSection('service')"
        >
          Ver Servicios
        </v-btn>
      </v-col>

      <!-- Columna de imagen -->
      <v-col cols="12" md="5" class="d-flex justify-center pt-5 pl-10">
        <img src="@/assets/images/invoice.png" alt="Ilustración" class="hero-image" />
      </v-col>

    </v-row>

    <v-row class="logo-carousel-container pt-15 mt-15 mb-15" no-gutters>
      <div class="logo-carousel">
        <div class="logo-track">
          <img v-for="(logo, index) in logos" :key="index" :src="logo" class="logo-image" />
          <!-- duplicamos para efecto infinito -->
          <img v-for="(logo, index) in logos" :key="'copy-' + index" :src="logo" class="logo-image" />
        </div>
      </div>
    </v-row>
  </v-container>
  
  <div ref="productSection">
    <productView />
  </div>

  <div ref="serviceSection">
    <serviceView />
  </div>

  <contactUsView />

  <infoView />

</template>

<script setup>
import productView from '@/pages/home/ProductView.vue'
import contactUsView from '@/pages/home/contactUsView.vue'
import infoView from '@/pages/infoView.vue'
import serviceView from '@/pages/home/serviceView.vue'

import { ref } from 'vue'

const productSection = ref(null)
const serviceSection = ref(null)

function scrollToSection(section) {
  if (section === 'product' && productSection.value) {
    productSection.value.scrollIntoView({ behavior: 'smooth' })
  } else if (section === 'service' && serviceSection.value) {
    serviceSection.value.scrollIntoView({ behavior: 'smooth' })
  }
}

const logos2 = [
  new URL('@/assets/images/bancofie.png', import.meta.url).href,
  new URL('@/assets/images/logoeco.png', import.meta.url).href,
  new URL('@/assets/images/bancofie.png', import.meta.url).href,
  new URL('@/assets/images/logoeco.png', import.meta.url).href,
  new URL('@/assets/images/bancofie.png', import.meta.url).href,
  new URL('@/assets/images/logoeco.png', import.meta.url).href,

];

const logos = [
  new URL('@/assets/logos-empresas/esa.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/juanfelipe2.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/lgo-americano.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-bandancha.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-ceila.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-chaquenio2.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-clinica.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-elpatio.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-freddy.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-freddy2.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-inac2.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-inmaking.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-itabel.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-jenry.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-jose.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-justiniano.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-kardex2.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-kevin2.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-laura.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-llantar.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-mitru-tarijaC.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-niki.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-reynaldo.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-setpetrol.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-sixto.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-space.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-ssava.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-ssip.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-surllantas.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-tropiflor2.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-turimo-tupiza.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-ultrafox2.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-urenda1.jpg', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-freddy.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-vieli.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/logo-zarate4.png', import.meta.url).href,
  new URL('@/assets/logos-empresas/rollofactura3.png', import.meta.url).href,

];

</script>

<style scoped>
.display-title {
  font-size: 2.8rem;
  font-weight: 900;
  line-height: 1.3;
  color: #000000;
}

.description-text {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
}

.hero-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.custom-hover-btn {
  background-color: #1565C0;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.custom-hover-btn:hover {
  background-color: rgb(255, 255, 255) !important;
  color: black !important;
  border-color: black;
}


.logo-carousel-container {
  overflow: hidden;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.logo-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 80px; /* controla el alto */
}

.logo-track {
  display: flex;
  width: fit-content;
  animation: scroll-logos 60s linear infinite; /* controla la velocidad */
}

.logo-image {
  height: 50px; /* alto de cada logo */
  margin: 0 40px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: transform 0.2s, filter 0.2s;
}

.logo-image:hover {
  filter: grayscale(0%);
  opacity: 1;
}

@keyframes scroll-logos {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
