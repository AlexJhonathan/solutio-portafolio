<template>
  <v-container fluid class="pt-15 px-0 pb-12 mt-0 color-fondo text-white">

    <v-row class="pt-15 pl-15 ml-15 pb-10">
      <v-col cols="12" md="6">
        <div class="mb-4 font-weight-bold text-h4">SOLUTIO</div>

        <div class="d-flex align-center mb-5">
          <v-icon class="mr-2" color="orange">mdi-phone</v-icon>
          <span>(+591) 73490133</span>
        </div>
        <div class="d-flex align-center mb-5">
          <v-icon class="mr-2" color="orange">mdi-email</v-icon>
          <span>solutiolguera@gmail.com</span>
        </div>
        <div class="d-flex align-start mb-6">
          <v-icon class="mr-2 mt-1" color="orange">mdi-earth</v-icon>
          <span>Calle Ernesto Trigo #1237 IV Centenario, Tarija - Bolivia</span>
        </div>

        <div class="mb-3">Siguenos</div>

        <div class="d-flex ga-2">
          <a
            href="https://www.facebook.com/people/Solutio-Software/100054471939036/"
            target="_blank"
            rel="noopener"
            style="text-decoration: none; color: inherit; background-color: transparent"
          >
            <v-btn icon variant="outlined" size="small">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </a>

          <a
            href="https://www.instagram.com/tecnologiaparami/?hl=es" 
            target="_blank"
            rel="noopener"
            style="text-decoration: none; color: inherit; background-color: transparent"
          >
            <v-btn icon variant="outlined" size="small">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </a>
        </div>
      </v-col>

      <v-col cols="12" md="2">
        <div class="text-subtitle-1 font-weight-bold mb-3">Empresa</div>
        <RouterLink to="/about-us-page" class="footer-link pl-0">Sobre nosotros</RouterLink>
        <RouterLink to="/contact-us-page" class="footer-link pl-0">Contáctenos</RouterLink>
      </v-col>

      <v-col cols="12" md="2">
        <div class="text-subtitle-1 font-weight-bold mb-3">Productos</div>
        <RouterLink to="/sector-educativo-page" class="footer-link pl-0">Sector Educativo</RouterLink>
        <RouterLink to="/hoteleria-turismo-page" class="footer-link pl-0">Hotelería y Turismo</RouterLink>
        <RouterLink to="/hospitales-clinicas-page" class="footer-link pl-0">Hospitales y clinicas</RouterLink>
        <RouterLink to="/compra-venta-page" class="footer-link pl-0">Compra - Venta</RouterLink>
        <RouterLink to="/alquileres-page" class="footer-link pl-0">Alquileres</RouterLink>
        <RouterLink to="/tasa-cero-page" class="footer-link pl-0">Tasa Cero</RouterLink>
      </v-col>

      <v-col cols="12" md="2">
        <div class="text-subtitle-1 font-weight-bold mb-3">Servicios</div>
        <RouterLink to="/maintenance-page" class="footer-link pl-0">Mantenimiento</RouterLink>
        <RouterLink to="/tecnic-suport-page" class="footer-link pl-0">Soporte Técnico</RouterLink>
        <RouterLink to="/tecnic-capacitation-page" class="footer-link pl-0">Capacitación Técnica</RouterLink>
      </v-col>
    </v-row>

    <v-divider class="my-10"></v-divider>
    <div class="text-center text-caption">
      SOLUTIO S.R.L. © 2024 - Todos los derechos reservados<br />
    </div>
  </v-container>
</template>


<script setup>

</script>

<style scoped>
.display-title {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.3;
  color: #000000;
}

.description-text {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
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

.color-fondo {
  background-color: #0a1a33;
}

.footer-link {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 8px;
  transition: color 0.3s ease;
  font-size: 1.1rem;
  font-weight: 400;
}

.footer-link:hover {
  color: #1565C0;
  background-color: transparent !important;
}

</style>
