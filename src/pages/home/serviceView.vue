<template>
  <v-container class="pt-5 px-0 pb-15" style="max-width: 1300px; margin: 0 auto;">
    <v-row justify="center" align="center" class="mt-10 mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">Explore nuevas formas en las que podemos colaborar con usted</h1>
        <p class="description-text mt-6">
          Aunque seamos una empresa enfocada en la facturación electrónica, en SOLUTIO S.R.L. estamos seguros de que podemos apoyarle ofreciendole nuestros siguientes servicios:
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-8" justify="center" align="stretch">
      <v-col
        cols="12"
        sm="6"
        md="6"
        class="pb-5 mb-5 "
      >
        <v-card
          v-for="(servicio, index) in servicios"
          :key="index"
          class="service-card rounded-lg mb-5 pr-15 pt-5"
          :class="{ 'active-card': servicioSeleccionado.titulo === servicio.titulo }"
          @click="seleccionarServicio(servicio)"
          :ripple="false"
        >
          <v-row no-gutters class="">
            <!-- Icono -->
            <v-col cols="3" class="d-flex align-start justify-center pa-4 pt-5">
              <v-icon
                :icon="servicio.icono"
                size="40"
                color="#1565C0"
                
              ></v-icon>
            </v-col>

            <!-- Contenido -->
            <v-col cols="9" class="py-4 pr-4 text-left">
              <h3 class="font-weight-bold text-h6 mb-2">{{ servicio.titulo }}</h3>
              <p class="text-body-2 text-grey-darken-2 mb-4">
                {{ servicio.descripcion }}
              </p>
              <v-btn
                class="custom-hover-btn text-body-2"
                rounded="lg"
                variant="flat"
                height="45"
                elevation="2"
                :to="servicio.ruta"
                >
                Mas Información
                </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="6"
        class="pb-5 mb-5 d-flex flex-column align-center"
      >
      <v-img
          v-if="servicioSeleccionado"
          :src="servicioSeleccionado.imagen"
          height="400"
          width="550"

        ></v-img>
      </v-col>
    </v-row>

  </v-container>


</template>

<script setup>
import { ref } from 'vue'
import mantenimiento from '@/assets/images/services/mantenimiento.png'
import soporte from '@/assets/images/services/soporte.png'
import capacitacion from '@/assets/images/services/capacitacion.png'

const servicios = [
  {
    titulo: "Mantenimiento y Reparación",
    descripcion: "Usted conoce el valor de sus equipos; nosotros nos encargamos de mantenerlos en óptimas condiciones, asegurando su funcionamiento continuo y prolongando su vida útil.",
    imagen: mantenimiento,
    icono: 'mdi-cash-register',
    ruta: "/maintenance-page",
  },
  {
    titulo: "Soporte Técnico",
    descripcion: "Cuando surgen inconvenientes, usted necesita respuestas rápidas; nosotros le brindamos soporte técnico oportuno y confiable para que sus operaciones no se detengan.",
    imagen: soporte,
    icono: 'mdi-school-outline',
    ruta: "/tecnic-suport-page",
  },
  {
    titulo: "Capacitación Técnica",
    descripcion: "Usted tiene el equipo y el sistema; nosotros lo ayudamos a sacarles el máximo provecho, capacitando a su personal para un uso eficiente y seguro de las herramientas tecnológicas.",
    imagen: capacitacion,
    icono: 'mdi-calendar-check-outline',
    ruta: "/tecnic-capacitation-page",
  },
]


const servicioSeleccionado = ref(servicios[0])



const seleccionarServicio = (servicio) => {
  servicioSeleccionado.value = servicio
  console.log('Servicio seleccionado:', servicioSeleccionado.value)
}



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

.service-card {
  width: 100%;
  max-width: 600px;
  min-height: 270px;
  background-color: #f4f4f4;
  border: 1px solid #ccc ;
  transition: border-color 0.4s ease;
  margin: auto;
  
}

.service-card:hover {
  border: 1px solid #1565C0;
}

.active-card {
  background-color: #1565C0;
  border-color: #1565C0;
  color: white;
}

/* Cambiar color de títulos, textos y botón */
.active-card h3,
.active-card p {
  color: white !important;
}

/* Cambiar color del ícono */
.active-card .v-icon {
  color: white !important;
}

/* Cambiar estilos del botón en el card activo */
.active-card .v-btn {
  background-color: white !important;
  color: #1565C0 !important;
}

</style>
