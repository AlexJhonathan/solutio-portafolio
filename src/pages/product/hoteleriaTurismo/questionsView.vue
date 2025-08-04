<template>
  <v-container fluid class="pt-5 pb-15 bg-white" style="padding: 100px 100px 100px 105px">

    <v-row justify="center" align="center" class="mt-15 mb-2">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">Preguntas Frecuentes</h1>

      </v-col>
    </v-row>

    <v-row class="mt-8 mb-15" justify="center">
      <v-col cols="12" md="11">
        <v-expansion-panels
          v-model="panelActivo"
          multiple
          elevation="0"
          class="faq-panels rounded-lg"
          
        >
          <v-expansion-panel
            v-for="(item, index) in preguntas"
            :key="index"
            class="faq-panel rounded-lg mb-7"
          >
            <v-expansion-panel-title>
              <span class="faq-question pb-4 pt-3 pl-3">{{ item.pregunta }}</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="faq-answer pl-5 pb-3">{{ item.respuesta }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>


  </v-container>

</template>

<script setup>
import { ref } from 'vue'

const preguntas = ref([
  {
    pregunta: '¿Necesito instalar algún programa para utilizar el sistema de Facturación Electrónica de Solutio?',
    respuesta: 'No, nuestro sistema está alojado en la nube, lo que significa que no necesitas instalar ningún software. Puedes acceder desde cualquier dispositivo con conexión a internet, sin incurrir en costos adicionales de infraestructura o mantenimiento.',
  },
  {
    pregunta: '¿El sistema se puede personalizar con la imagen de mi hotel o agencia?',
    respuesta: 'Sí. Puedes incorporar tu logotipo, colores corporativos y los datos de tu establecimiento o agencia para que las facturas reflejen tu identidad comercial. También ofrecemos desarrollos a medida según tus necesidades específicas.',
  },
  {
    pregunta: '¿Qué es una factura electrónica y cuál es su validez?',
    respuesta: 'Es un documento digital con validez legal ante el Servicio de Impuestos Nacionales (SIN), generado a través de un sistema autorizado. La factura electrónica reemplaza al documento físico y debe ser registrada y validada en línea.',
  },
  {
    pregunta: '¿Puedo usar este sistema en distintos tipos de negocios turísticos?',
    respuesta: 'Sí. Nuestra solución se adapta a hoteles, hostales, agencias de viaje, operadores de tours, rentadoras de vehículos y otros negocios del rubro turístico. Cumple con los requisitos del SIN y permite configurar distintos tipos de servicios turísticos.',
  },
  {
    pregunta: '¿Puedo generar facturas para reservas, hospedaje, alimentación, tours, transporte, etc.?',
    respuesta: 'Exactamente. Puedes facturar diferentes tipos de servicios turísticos, como noches de hospedaje, paquetes turísticos, alimentación, traslados, alquiler de equipos, y otros productos o servicios que ofrezcas.',
  },
  {
    pregunta: '¿El sistema permite gestionar múltiples sucursales o puntos de emisión?',
    respuesta: 'Sí. Puedes manejar diferentes puntos de emisión o sucursales desde una sola cuenta, con reportes y control individual o consolidado, ideal para cadenas hoteleras o agencias con varias oficinas.',
  },
  {
    pregunta: '¿Puedo controlar el historial de facturación por cliente o por reserva?',
    respuesta: 'Claro. Cada cliente cuenta con un historial detallado de facturas emitidas, pagos realizados y documentos asociados a cada reserva o servicio, lo que facilita el seguimiento y control financiero.',
  },
  {
    pregunta: '¿Es posible automatizar la emisión de facturas para reservas confirmadas o servicios recurrentes?',
    respuesta: 'Sí. El sistema permite programar la emisión automática de facturas en base a reservas confirmadas, estancias prolongadas o servicios periódicos, optimizando el trabajo del personal de recepción o administración.',
  }
])


const panelActivo = ref(null)

</script>

<style scoped>
.display-title {
  font-size: 2.8rem;
  font-weight: 900;
  line-height: 1.3;
  color: #000000;
}

.faq-panels {
  background-color: white;
}

.faq-panel {
  border: 2px solid #e0e0e0;
  width: 100%;
  max-width: 1400px;
  min-height: 90px;
  margin-bottom: 12px;
  transition: border-color 0.1s ease;
}

.faq-panel:hover {
  border-color: #1565C0;
  background-color: white !important;
  
}

.v-expansion-panel--active {
  border-color: #1565C0 !important;
  margin-top: 0px;
}

.faq-question {
  font-weight: 600;
  font-size: 1.6rem;
  color: #333;
}

.faq-answer {
  font-size: 1.2rem;
  color: #555;
  padding-right: 8px;
  line-height: 1.6;
}

</style>
