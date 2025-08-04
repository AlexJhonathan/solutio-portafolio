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
    pregunta: '¿El sistema se puede personalizar con la imagen de mi negocio?',
    respuesta: 'Sí. Puedes incorporar tu logotipo, colores corporativos y los datos de tu empresa para que las facturas reflejen tu identidad comercial. También ofrecemos desarrollos a medida según tus necesidades específicas.',
  },
  {
    pregunta: '¿Qué es una factura electrónica y cuál es su validez?',
    respuesta: 'Es un documento digital con validez legal ante el Servicio de Impuestos Nacionales (SIN), generado a través de un sistema autorizado. La factura electrónica reemplaza al documento físico y debe ser registrada y validada en línea.',
  },
  {
    pregunta: '¿Este sistema es compatible con diferentes rubros que facturan bajo Tasa Cero?',
    respuesta: 'Sí. Nuestra solución está diseñada para adaptarse a cualquier empresa o profesional que facture bajo el régimen de Tasa Cero, como médicos, clínicas, instituciones educativas, exportadores de servicios, entre otros.',
  },
  {
    pregunta: '¿Puedo facturar diferentes tipos de servicios o productos dentro del régimen Tasa Cero?',
    respuesta: 'Exactamente. Puedes emitir facturas electrónicas para cualquier bien o servicio que esté exento del IVA según la normativa boliviana, incluyendo servicios profesionales, atención médica, educación, exportaciones, entre otros.',
  },
  {
    pregunta: '¿El sistema permite gestionar múltiples puntos de emisión o sucursales?',
    respuesta: 'Sí. Puedes manejar diferentes puntos de emisión desde una sola cuenta, con control individual o consolidado, ideal para empresas con presencia en varias ciudades o con diferentes áreas de atención.',
  },
  {
    pregunta: '¿Puedo revisar el historial de facturación por cliente o servicio?',
    respuesta: 'Claro. El sistema registra el historial de cada cliente, incluyendo facturas emitidas, fechas, conceptos facturados y pagos asociados, facilitando el seguimiento contable y tributario.',
  },
  {
    pregunta: '¿Es posible automatizar la emisión de facturas para servicios recurrentes o pacientes frecuentes?',
    respuesta: 'Sí. Puedes programar la emisión automática de facturas en base a servicios periódicos, suscripciones o atenciones recurrentes, lo que reduce el trabajo manual y mejora la eficiencia operativa.',
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
