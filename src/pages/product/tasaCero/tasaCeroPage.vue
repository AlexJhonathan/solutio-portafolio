<template>
  <v-container class="pt-5 px-0 pb-15" style="max-width: 1300px; margin: 0 auto;">
    <v-row justify="center" align="center" class="mb-15">
      <!-- Columna de texto -->
      <v-col cols="12" md="6" class="pt-15">
        <h1 class="display-title">
          FACTURACIÓN - TASA CERO
        </h1>
        <p class="description-text mt-6">
          Si ofreces productos o servicios exentos de IVA, como alimentos de la canasta básica, medicamentos esenciales o productos agrícolas, necesitas una herramienta ágil, segura y 100% compatible con el régimen de Tasa Cero del SIN. Nuestra plataforma de facturación electrónica te permite emitir comprobantes válidos en segundos, desde cualquier dispositivo, con control total de tus operaciones y sin complicaciones administrativas.
        </p>
        <v-btn
              class="custom-hover-btn text-body-2 mt-8 mb-15 mr-8"
              color="#1565C0"
              rounded="lg"
              variant="flat"
              height="45"
              width="150"
              elevation="2"
              :to="{ name: 'contact-us-page' }"
            >
              Solicitar DEMO
        </v-btn>
      </v-col>

      <!-- Columna de imagen -->
      <v-col cols="12" md="6" class="d-flex justify-center pt-5 ">
        <img src="@/assets/images/products/tasaCero.png" alt="Ilustración" class="hero-image" />
      </v-col>

    </v-row>

    <v-row class="pt-15 mt-15 mb-15" no-gutters justify="center"  align="center">
          <img v-for="(logo, index) in logos" :key="index" :src="logo" class="logo-image" />
    </v-row>

    
  </v-container>

  <choiceView />

  <benefitsView />

  <questionsView />

  <contactUsView />

  <infoView />

</template>

<script setup>
import infoView from '@/pages/infoView.vue'
import choiceView from '@/pages/product/tasaCero/choiceView.vue'
import benefitsView from '@/pages/product/tasaCero/benefitsView.vue'
import questionsView from '@/pages/product/tasaCero/questionsView.vue'
import contactUsView from '@/pages/product/tasaCero/contactUsView.vue'

const logos = [
  new URL('@/assets/images/bancofie.png', import.meta.url).href,
  new URL('@/assets/images/logoeco.png', import.meta.url).href,

];

</script>

<style scoped>
.display-title {
  font-size: 3rem;
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


.logo-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 80px; /* controla el alto */
}

.logo-track {
  display: flex;
  width: fit-content;
  animation: scroll-logos 25s linear infinite; /* controla la velocidad */
}

.logo-image {
  height: 40px; /* alto de cada logo */
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

</style>
