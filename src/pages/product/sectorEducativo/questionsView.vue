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
    pregunta: '¿El sistema se puede personalizar con la imagen de mi institución educativa?',
    respuesta: 'Sí. Puedes incorporar el logotipo, colores institucionales y los datos específicos de tu unidad educativa para que las facturas reflejen tu identidad institucional. También ofrecemos desarrollos a medida según las necesidades particulares de tu institución.',
  },
  {
    pregunta: '¿Qué es una factura electrónica y cuál es su validez?',
    respuesta: 'Es un documento digital con validez legal ante el Servicio de Impuestos Nacionales (SIN), generado a través de un sistema autorizado. La factura electrónica reemplaza al documento físico y debe ser registrada y validada en línea.',
  },
  {
    pregunta: '¿Este sistema es válido para colegios fiscales, de convenio y privados?',
    respuesta: 'Sí. Nuestro sistema está diseñado para adaptarse a todo tipo de instituciones educativas, cumpliendo con los requisitos normativos del SIN y brindando herramientas específicas para su operativa diaria.',
  },
  {
    pregunta: '¿Puedo generar facturas para diferentes conceptos como pensiones, matrícula, materiales, etc.?',
    respuesta: 'Exactamente. El sistema permite crear y gestionar distintos tipos de productos o servicios educativos, lo que te permite facturar ítems como mensualidades, inscripción, materiales, alimentación, transporte escolar, entre otros.',
  },
  {
    pregunta: '¿El sistema permite gestionar diferentes niveles y ciclos educativos?',
    respuesta: 'Sí. Puedes segmentar la facturación por nivel (inicial, primaria, secundaria, etc.), curso o paralelo, facilitando la organización y seguimiento de pagos por parte de los padres o tutores.',
  },
  {
    pregunta: '¿El sistema permite controlar el historial de pagos por estudiante?',
    respuesta: 'Claro. Cada estudiante cuenta con un historial detallado de facturas emitidas, pagos realizados, saldos pendientes y estado de cuenta, lo que facilita el control administrativo de la unidad educativa.',
  },
  {
    pregunta: '¿Es posible automatizar la emisión de facturas recurrentes?',
    respuesta: 'Sí. Nuestra solución incluye funcionalidades para programar facturas mensuales u otras recurrencias, ideal para cobros periódicos como pensiones escolares. Esto optimiza el tiempo del personal administrativo y reduce errores manuales.',
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
