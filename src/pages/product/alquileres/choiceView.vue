<template>
  <v-container fluid class="bg-white" style="padding: 100px 100px 100px 105px">

    <v-row justify="center" align="center" class="mt-15 mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">¿Por qué elegir nuestra Facturación?</h1>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="mb-15">

       <v-col cols="12" md="6" class="d-flex justify-center pt-5">
        <img src="@/assets/images/products/alquileres1.png" alt="Ilustración" class="hero-image" />
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="display-title">
          Sabemos que la gestión de contratos y cobros por alquileres requiere precisión y control. Nuestra solución está diseñada para facilitarte:
        </h1>

            <ul class="description-text mt-6 ml-5">
                <li class="mb-2">Emisión rápida y segura de facturas electrónicas por alquileres de inmuebles, equipos y otros bienes</li>
                <li class="mb-2">Registro detallado de inquilinos, contratos y pagos</li>
                <li class="mb-2">Control eficiente de cobros, anticipos y cuentas por cobrar</li>
                <li class="mb-2">Generación de reportes financieros, históricos de pagos y estados de cuentas</li>
                <li class="mb-2">Administración de múltiples propiedades o flotas desde una sola plataforma</li>
                <li class="mb-2">Cumplimiento estricto con las normativas tributarias vigentes del SIN</li>
                <li class="mb-2">Integración opcional con sistemas de administración para optimizar procesos</li>

            </ul>
            
      </v-col>
      
    </v-row>

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

.footer-link {
  display: block;
  color: rgb(0, 0, 0);
  text-decoration: none;
  margin-bottom: 8px;
  transition: color 0.1s ease;
  font-size: 1.1rem;
  font-weight: 600;
}

.footer-link:hover {
  color: #1d6ecb;
  background-color: transparent !important;
}


.about-card {
  width: 100%;
  max-width: 290px;
  min-height: 135px;;
  border: 1px solid #1565C0;
  margin: auto;
  background-color: #1565C0;
  color: white;
  
}



</style>
