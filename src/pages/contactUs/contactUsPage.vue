<template>
  <v-container class="pt-5 px-0 pb-15" style="max-width: 1300px; margin: 0 auto;">
    <v-row justify="center" align="center" class="mt-10 mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">Contáctanos</h1>
      </v-col>
    </v-row>

    <v-row justify="start" align="start" class="mt-10 mb-5">
      <v-col cols="12" md="5" class="text-left">
        <h1 class="display-subtitle">¿Necesitas ayuda o tienes dudas sobre nuestros producto y servicios?</h1>
        <p class="description-text mt-6">
          Si tiene preguntas acerca de la elección, precio o cómo ordenar productos y servicios de SOLUTIO S.R.L. Contáctese con nosotros, responderemos sus preguntas a la brevedad posible.
        </p>
      </v-col>
    </v-row>

    <v-row justify="start" align="start" class="mt-0 mb-10 pl-3">
      <v-col cols="12" md="5" class="text-left pa-0">
        <div class="d-flex align-center mb-5">
          <div class="icon-box mr-3"><v-icon size="20" color="white">mdi-whatsapp</v-icon></div>
          <a
            href="https://wa.me/59173490133?text=Hola%2C%20quiero%20más%20información"
            target="_blank"
            rel="noopener"
            class="contact-link"
          >
            <span>(+591) 73490133</span>
          </a>
          
        </div>

        <div class="d-flex align-center mb-5">
          <div class="icon-box mr-3"><v-icon size="20" color="white">mdi-email</v-icon></div>
          <a
            href="https://mail.google.com/mail/?view=cm&to=solutiolguera@gmail.com"
            target="_blank"
            rel="noopener"
            class="contact-link"
          >
            <span>solutiolguera@gmail.com</span>
          </a>
          
        </div>

        <div class="d-flex align-center mb-5">
          <div class="icon-box mr-3"><v-icon size="20" color="white">mdi-phone</v-icon></div>
          <span class="contact-link">Calle Ernesto Trigo #1237 IV Centenario, Tarija - Bolivia</span>
        </div>
      </v-col>
      
      
    </v-row>

  </v-container>

  <infoView />

</template>

<script setup>
import infoView from '@/pages/infoView.vue'


</script>

<style scoped>
.display-title {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.3;
  color: #000000;
}

.display-subtitle {
  font-size: 2rem;
  font-weight: 500;
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

.icon-box {
  background-color: #1565C0;
  width: 35px;
  height: 35px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-link {
  display: block;
  color: #000000;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1.1rem;
}

.contact-link:hover {
  color: #1565C0;
  background-color: transparent !important;
}

</style>
