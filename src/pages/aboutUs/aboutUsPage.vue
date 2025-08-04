<template>
  <v-container class="pt-15 px-0 pb-15 mb-10" style="max-width: 1300px; margin: 0 auto;">
    <v-row justify="center" align="center">

       <v-col cols="12" md="6" class="d-flex justify-center pt-5">
        <img src="@/assets/images/aboutUs.png" alt="Ilustración" class="hero-image" />
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="display-title">
          Acerca de Nosotros
        </h1>
        <p class="description-text mt-6">
          SOLUTIO S.R.L. es una empresa boliviana enfocada en el desarrollo de soluciones de facturación electrónica, adaptadas a distintos sectores y regímenes tributarios. Nos especializamos en cumplir con los requerimientos del Servicio de Impuestos Nacionales (SIN), ofreciendo herramientas confiables, fáciles de usar y actualizadas. Nuestro compromiso es acompañar a empresas y profesionales en su transformación digital, asegurando eficiencia, cumplimiento normativo y soporte técnico en todo momento.
        </p>
      </v-col>
      
    </v-row>
  </v-container>

  <aboutUsView />

  <infoView />

</template>

<script setup>
import infoView from '@/pages/infoView.vue'
import aboutUsView from '@/pages/aboutUs/aboutUsView.vue'
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
</style>
