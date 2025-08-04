<template>
  <v-container class="pt-5 px-0 pb-15" style="max-width: 1100px; margin: 0 auto;">
    <v-row justify="center" align="center" class="mt-10 mb-5">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">Soporte Técnico</h1>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class=" py-3" style="background-color: #e9e9e9;">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-subtitle">Toda nuestra atención y conocimiento técnico, al servicio de su tranquilidad.</h1>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class=" pt-3 pb-0">
      <img src="@/assets/images/services/soporte.png" alt="Ilustración" />
    </v-row>

    <v-row justify="center" align="center" class="mt-0 mb-5">
      <v-col cols="12" md="12" class="text-left">
        <p class="description-text mt-0 mb-10">
         En un mundo digital donde el tiempo y la conectividad lo son todo, un fallo técnico puede representar pérdidas importantes. En Solutio entendemos que usted necesita soluciones rápidas, eficientes y humanas. Por eso, ofrecemos un servicio de soporte técnico integral para garantizar el correcto funcionamiento de su tecnología, sin importar el rubro al que pertenezca su negocio.
        </p>
        <div class="pa-0 ml-4">
            <h1 class="display-subtitles ">Asistencia Remota y Presencial</h1>
            <p class="description-text mt-6">
                No importa si necesita ayuda inmediata o una visita técnica: en Solutio ofrecemos atención ágil y personalizada, con técnicos especializados que lo asisten tanto de forma remota como en sitio. Atendemos:
            </p>

            <ul class="description-text mt-6 ml-5">
                <li>Errores de sistema o lentitud en equipos</li>
                <li>Conflictos con software de facturación u ofimática</li>
                <li>Instalación y configuración de programas</li>
            </ul>

            <p class="description-text mt-6">
                Ofrecemos canales rápidos de contacto, como WhatsApp, correo y asistencia telefónica.
            </p>



            <h1 class="display-subtitles mt-10">Solución de Problemas</h1>
            <p class="description-text mt-6">
                Nuestro enfoque no es simplemente “parchar” el problema: buscamos diagnosticar y resolver de manera definitiva. Esto incluye:
            </p>

            <ul class="description-text mt-6 ml-5">
                <li>Análisis técnico del problema</li>
                <li>Recomendaciones para evitar recurrencias</li>
                <li>Acompañamiento durante la implementación de soluciones</li>
            </ul>



            <h1 class="display-subtitles mt-10">Soporte para sistemas de facturación</h1>
            <p class="description-text mt-6">
                A diferencia de servicios genéricos, nos especializamos en soluciones de facturación electrónica. Brindamos soporte a los sistemas que usted utiliza para facturar, ya sea:
            </p>

            <ul class="description-text mt-6 ml-5">
                <li>Configuración inicial del sistema</li>
                <li>Resolución de errores de envío, conexión con impuestos o impresión</li>
                <li>Asistencia en actualizaciones o migraciones</li>
                <li>Capacitación breve para su personal si es necesario</li>
            </ul>


            <h1 class="display-subtitles mt-10">¿Por qué elegir el soporte técnico de Solutio?</h1>

            <ul class="description-text mt-6 ml-5">
                <li>Respuesta rápida y trato directo</li>
                <li>Soporte especializado en tecnología y facturación</li>
                <li>Personal técnico capacitado y orientado al cliente</li>
                <li>Planes flexibles para empresas pequeñas, medianas o grandes</li>
            </ul>

            <p class="description-text mt-6">
                En Solutio, más que resolver problemas, ayudamos a que su negocio no se detenga.
            </p>

        </div>
        
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col cols="12" md="8" class="text-center">
        <v-btn
              class="custom-hover-btn text-body-2 mt-5 mb-15"
              color="#1565C0"
              rounded="lg"
              variant="flat"
              height="45"
              width="210"
              elevation="2"
              @click="$router.push('/contact-us-page')"
        >
              Solicitar Servicio
        </v-btn>
      </v-col>
    </v-row>

  </v-container>

  <infoView />

</template>

<script setup>
import infoView from '@/pages/infoView.vue'


</script>

<style scoped>
.display-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #000000;
}

.display-subtitle {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.3;
  color: #000000;
}

.display-subtitles {
  font-size: 1.4rem;
  font-weight: 500;
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

.font-medium {
  font-weight: 500;
}

.icon-box {
  background-color: #1565C0;
  width: 35px;
  height: 35px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
