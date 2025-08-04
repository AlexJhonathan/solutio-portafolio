<template>
  <v-container class="pt-5 px-0 pb-15" style="max-width: 1100px; margin: 0 auto;">
    <v-row justify="center" align="center" class="mt-10 mb-5">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">Mantenimiento y Reparación</h1>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class=" py-3" style="background-color: #e9e9e9;">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-subtitle">El cuidado y funcionamiento de su tecnología en manos expertas</h1>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class=" pt-3 pb-0">
      <img src="@/assets/images/services/mantenimiento.png" alt="Ilustración" />
    </v-row>

    <v-row justify="center" align="center" class="mt-0 mb-5">
      <v-col cols="12" md="12" class="text-left">
        <p class="description-text mt-0 mb-10">
          En un entorno cada vez más digital, el buen funcionamiento de los equipos informáticos es clave para mantener la productividad, evitar pérdidas de tiempo y proteger la información de su negocio. En Solutio, entendemos la importancia de mantener sus dispositivos operativos, seguros y actualizados. Por eso, ofrecemos un servicio integral de mantenimiento preventivo y correctivo, pensado para acompañar el crecimiento de su organización.
        </p>
        <div class="pa-0 ml-4">
            <h1 class="display-subtitles ">Diagnóstico y Reparación</h1>
            <p class="description-text mt-6">
                Sabemos que cualquier falla técnica puede afectar seriamente su operación. Nuestro equipo técnico está capacitado para identificar problemas tanto de hardware como de software y brindar soluciones eficientes. Nos encargamos de reparar:
            </p>

            <ul class="description-text mt-6 ml-5">
                <li>Equipos de escritorio y laptops</li>
                <li>Impresoras fiscales y convencionales</li>
                <li>Dispositivos de red (routers, switches, etc.)</li>
                <li>Sistemas periféricos y accesorios</li>
            </ul>

            <p class="description-text mt-6">
                Contamos con herramientas especializadas y personal certificado para garantizar resultados profesionales en el menor tiempo posible.
            </p>


            <h1 class="display-subtitles mt-10">Mantenimiento Preventivo</h1>
            <p class="description-text mt-6">
                No espere a que los problemas aparezcan. El mantenimiento regular prolonga la vida útil de sus equipos y mejora su rendimiento. Nuestro plan de mantenimiento incluye:
            </p>

            <ul class="description-text mt-6 ml-5">
                <li>Limpieza física interna y externa</li>
                <li>Revisión de temperatura, fuente de poder y ventilación</li>
                <li>Optimización del sistema operativo y eliminación de software malicioso</li>
                <li>Revisión de conectividad y redes internas</li>
            </ul>

            <p class="description-text mt-6">
                Programamos visitas periódicas y mantenemos un historial técnico de sus equipos para ofrecer un servicio proactivo.
            </p>


            <h1 class="display-subtitles mt-10">Asesoría Personalizada</h1>
            <p class="description-text mt-6">
                Además de reparar y mantener, en Solutio le ayudamos a elegir e implementar las herramientas adecuadas. Brindamos recomendaciones sobre:
            </p>

            <ul class="description-text mt-6 ml-5">
                <li>Sustitución o actualización de equipos obsoletos</li>
                <li>Compatibilidad con software de facturación</li>
                <li>Soluciones de respaldo de información y seguridad digital</li>
            </ul>


            <h1 class="display-subtitles mt-10">¿Por qué elegir nuestro servicio?</h1>
            <p class="description-text mt-6">
                Además de reparar y mantener, en Solutio le ayudamos a elegir e implementar las herramientas adecuadas. Brindamos recomendaciones sobre:
            </p>

            <ul class="description-text mt-6 ml-5">
                <li>Atención rápida y personalizada</li>
                <li>Técnicos capacitados con experiencia en entornos educativos, comerciales y hoteleros</li>
                <li>Planes adaptables según el tamaño y necesidad de su empresa</li>
                <li>Soporte remoto y presencial</li>
            </ul>

            <p class="description-text mt-6">
                En Solutio, cuidamos su tecnología para que usted se concentre en lo más importante: hacer crecer su negocio.
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
