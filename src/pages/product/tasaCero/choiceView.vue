<template>
  <v-container fluid class="bg-white" style="padding: 100px 100px 100px 105px">

    <v-row justify="center" align="center" class="mt-15 mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">¿Por qué elegir nuestra Facturación?</h1>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="mb-15">

       <v-col cols="12" md="6" class="d-flex justify-center pt-5">
        <img src="@/assets/images/products/tasaCero1.png" alt="Ilustración" class="hero-image" />
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="display-title">
          Porque hemos desarrollado una plataforma que facilita tu gestión tributaria y comercial sin complicaciones:
        </h1>

            <ul class="description-text mt-6 ml-5">
                <li class="mb-2">Emisión rápida de facturas electrónicas para productos y servicios exentos de IVA</li>
                <li class="mb-2">Clasificación automática de ítems en la categoría Tasa Cero</li>
                <li class="mb-2">Control de clientes y ventas con historial completo de operaciones</li>
                <li class="mb-2">Reportes detallados de ingresos y movimientos para tu contabilidad o declaraciones</li>
                <li class="mb-2">Soporte para sucursales, puntos de venta y vendedores móviles</li>
                <li class="mb-2">Cumplimiento garantizado con los requisitos del SIN</li>
                <li class="mb-2">Ideal para negocios agrícolas, alimentarios, farmacéuticos, artesanales y más</li>

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
