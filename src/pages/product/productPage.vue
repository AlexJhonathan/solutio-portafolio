<template>
  <v-container fluid style="padding: 25px 100px 100px 105px">
    <v-row justify="center" align="center" class="mt-10 mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">Nuestros Productos de Facturación</h1>
        <p class="description-text mt-6">
          Explora entre nuestros sistemas de facturación mas destacados, diseñados para adaptarse
          al área que necesites.
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-8" justify="center" align="stretch">
      <v-col
        v-for="(producto, index) in productos"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="pb-5 mb-5 "
      >
        <v-card elevation="0" class="product-card rounded-xl d-flex flex-column align-center text-center">
          <v-img
          class="mt-5 mb-3"
            :src="producto.imagen"
            height="250"
            width="280"
            cover
          ></v-img>

          <v-card-title class="font-weight-bold text-h6 align-center pb-5">
            {{ producto.titulo }}
          </v-card-title>

          <v-card-text class="text-body-2 text-grey-darken-2">
            {{ producto.descripcion }}
          </v-card-text>

          <v-card-actions>
            <RouterLink
                :to="producto.ruta"
                class="footer-link mx-8 pb-5"
              >
                {{ producto.textoEnlace }} ->
            </RouterLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-0" justify="center" align="stretch">
      <v-col
        v-for="(producto, index) in productos2"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="pb-5 mb-5 "
      >
        <v-card elevation="0" class="product-card rounded-xl d-flex flex-column align-center text-center">
          <v-img
          class="mt-5 mb-3"
            :src="producto.imagen"
            height="280"
            width="280"
            cover
          ></v-img>

          <v-card-title class="font-weight-bold text-h6 align-center pb-5">
            {{ producto.titulo }}
          </v-card-title>

          <v-card-text class="text-body-2 text-grey-darken-2">
            {{ producto.descripcion }}
          </v-card-text>

          <v-card-actions >
            <RouterLink
                :to="producto.ruta"
                class="footer-link mx-8 pb-5"
              >
                {{ producto.textoEnlace }} ->
            </RouterLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <infoView />
</template>

<script setup>
import infoView from '@/pages/infoView.vue'
import sectorEducativo from '@/assets/images/products/sectorEducativo.png'
import hoteleria from '@/assets/images/products/hoteleria.png'
import hospital from '@/assets/images/products/hospital.png'
import compraVenta from '@/assets/images/products/compra-venta.png'
import alquileres from '@/assets/images/products/alquileres.png'
import tasaCero from '@/assets/images/products/tasaCero.png'


const productos = [
  {
    titulo: "Sector Educativo",
    descripcion: "Plataforma diseñada para colegios y universidades que simplifica la facturación de matrículas, pensiones y otros servicios educativos.",
    imagen: sectorEducativo,
    textoEnlace: "Ver más",
    ruta: "/sector-educativo-page",
  },
  {
    titulo: "Hotelería y Turismo",
    descripcion: "Sistema de facturación electrónica adaptado al sector hotelero y turístico, con control de ingresos, emisión fiscal y reportes en tiempo real.",
    imagen: hoteleria,
    textoEnlace: "Descubrir",
    ruta: "/hoteleria-turismo-page",
  },
  {
    titulo: "Hospitales y Clínicas",
    descripcion: "Plataforma que facilita la facturación de consultas, tratamientos y servicios médicos de forma rápida y segura.",
    imagen: hospital,
    textoEnlace: "Explorar",
    ruta: "/hospitales-clinicas-page",
  },
];

const productos2 = [
  {
    titulo: "Compra - Venta",
    descripcion: "Solución electrónica para emitir facturas, gestionar ventas y controlar ingresos en negocios de compra y venta de productos o servicios.",
    imagen: compraVenta,
    textoEnlace: "Ver más",
    ruta: "/compra-venta-page",
  },
  {
    titulo: "Alquileres",
    descripcion: "Plataforma que facilita la facturación mensual de alquileres de viviendas, oficinas, equipos u otros bienes.",
    imagen: alquileres,
    textoEnlace: "Descubrir",
    ruta: "/alquileres-page",
  },
  {
    titulo: "Tasa Cero",
    descripcion: "Sistema de facturación electrónica adaptado al régimen fiscal de Tasa Cero, con validación automática y generación de reportes para control tributario.",
    imagen: tasaCero,
    textoEnlace: "Explorar",
    ruta: "/tasa-cero-page",
  },
];
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


.product-card {
  width: 100%;
  max-width: 400px;
  min-height: 530px;
  background-color: #f4f4f4;
  border: 2px solid #e0e0e0 ;
  transition: border-color 0.1s ease;
  margin: auto;
}

.product-card:hover {
  border: 2px solid #1565C0;
}


</style>
