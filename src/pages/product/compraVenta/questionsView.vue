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
    respuesta: 'No, nuestro sistema está alojado en la nube. Puedes acceder desde cualquier dispositivo con conexión a internet, sin instalar software ni costos adicionales.',
  },
  {
    pregunta: '¿El sistema se puede personalizar con la imagen de mi empresa?',
    respuesta: 'Sí. Puedes incorporar tu logotipo, colores corporativos y datos de tu negocio para que las facturas reflejen tu identidad comercial.',
  },
  {
    pregunta: '¿Qué es una factura electrónica y cuál es su validez?',
    respuesta: 'Es un documento digital con validez legal ante el Servicio de Impuestos Nacionales (SIN), generado por un sistema autorizado. Reemplaza la factura física y debe ser validada en línea.',
  },
  {
    pregunta: '¿Este sistema es adecuado para distintos tipos de negocios de compra y venta?',
    respuesta: 'Sí. Nuestra solución se adapta a tiendas minoristas, mayoristas, distribuidores, comercios electrónicos y más, cumpliendo con los requisitos del SIN.',
  },
  {
    pregunta: '¿Puedo generar facturas para diferentes tipos de productos y servicios?',
    respuesta: 'Exactamente. Puedes facturar ventas de productos, servicios, devoluciones, notas de crédito y otros conceptos relacionados a tu negocio.',
  },
  {
    pregunta: '¿El sistema permite gestionar múltiples sucursales o puntos de venta?',
    respuesta: 'Sí. Puedes administrar varios puntos de emisión desde una sola cuenta, con reportes consolidados o individuales por sucursal.',
  },
  {
    pregunta: '¿Puedo consultar el historial de facturación por cliente o producto?',
    respuesta: 'Claro. Cada cliente y producto tiene un historial completo de facturas emitidas, pagos y devoluciones para un control detallado.',
  },
  {
    pregunta: '¿Es posible automatizar la emisión de facturas recurrentes o ventas programadas?',
    respuesta: 'Sí. Puedes programar facturas automáticas para ventas periódicas, contratos o suscripciones, facilitando la gestión comercial.',
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
