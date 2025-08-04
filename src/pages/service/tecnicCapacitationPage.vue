<template>
  <v-container class="pt-5 px-0 pb-15" style="max-width: 1100px; margin: 0 auto;">
    <v-row justify="center" align="center" class="mt-10 mb-5">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">Capacitación Técnica</h1>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class=" py-3" style="background-color: #e9e9e9;">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-subtitle">Todo nuestro conocimiento técnico, para fortalecer las habilidades de su equipo.</h1>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class=" pt-3 pb-0">
      <img src="@/assets/images/services/capacitacion.png" alt="Ilustración" />
    </v-row>

    <v-row justify="center" align="center" class="mt-0 mb-5">
      <v-col cols="12" md="12" class="text-left">
        <p class="description-text mt-0 mb-10">
         Contar con el mejor equipo tecnológico no basta si su personal no sabe cómo utilizarlo de manera eficiente y segura. En Solutio, creemos que la capacitación es clave para que su inversión en tecnología rinda al máximo. Por eso ofrecemos un servicio especializado de formación técnica, orientado a mejorar el uso, cuidado y aprovechamiento de sus sistemas y equipos.
        </p>
        <div class="pa-0 ml-4">
            <h1 class="display-subtitles ">Formación práctica y personalizada</h1>
            <p class="description-text mt-6">
                No todos los usuarios tienen los mismos conocimientos, ni todas las empresas usan la tecnología de la misma manera. Por eso, nuestras capacitaciones se diseñan en base a su contexto, cubriendo:
            </p>

            <ul class="description-text mt-6 ml-5">
                <li>Uso correcto de sistemas de facturación electrónica</li>
                <li>Manejo de equipos informáticos (PCs, laptops, impresoras, redes)</li>
                <li>Buenas prácticas de seguridad digital y respaldo de información</li>
                <li>Solución de errores comunes y mantenimiento básico</li>
                <li>Orientación al uso de software y herramientas complementarias</li>
            </ul>

            <p class="description-text mt-6">
                Trabajamos con grupos pequeños o individuales, presencialmente o en modalidad virtual, según lo que mejor se ajuste a su necesidad.
            </p>



            <h1 class="display-subtitles mt-10">Programas para diferentes sectores</h1>
            <p class="description-text mt-6">
                Sabemos que un colegio no trabaja igual que un hotel, y que una clínica tiene necesidades distintas a un comercio. Por eso, nuestros programas se especializan en sectores como:
            </p>

            <ul class="description-text mt-6 ml-5">
                <li>Instituciones educativas</li>
                <li>Hotelería y turismo</li>
                <li>Centros médicos y clínicas</li>
                <li>Negocios de compra-venta</li>
                <li>Tasa cero</li>
                <li>Sistemas de alquiler</li>
            </ul>

            <p class="description-text mt-6">
                Le ayudamos a comprender y dominar los procesos tecnológicos que su rubro exige.
            </p>



            <h1 class="display-subtitles mt-10">¿Por qué elegir nuestra capacitación técnica?</h1>

            <ul class="description-text mt-6 ml-5">
                <li>Contenido claro, práctico y directamente aplicable</li>
                <li>Instructores con experiencia técnica y trato amigable</li>
                <li>Acompañamiento posterior a la capacitación si lo requiere</li>
                <li>Material de apoyo digital incluido</li>
            </ul>

            <p class="description-text mt-6">
                En Solutio, formamos a su equipo para que la tecnología trabaje a su favor.
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
