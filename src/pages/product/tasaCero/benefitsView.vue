<template>
  <v-container class="pt-5 px-0 pb-15 mb-15" style="max-width: 1300px; margin: 0 auto;">

    <v-row justify="center" align="center" class="mt-15 mb-2">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">Beneficios</h1>
        <p class="description-text mt-6">
          Nuestra Facturación Electronica para tasa cero le ayudará a ahorrar tiempo y dinero en el proceso de facturación, ofreciéndole los siguientes beneficios.
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-8 mb-5" justify="center" align="stretch">
      <v-col
        v-for="(beneficio, index) in beneficios"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="pb-5"
      >
        <v-card elevation="0" class="benefit-card rounded-lg d-flex flex-column align-center text-center pt-10">
          
          <div class="icon-box mb-2"><v-icon size="36" color="white">{{ beneficio.icon }}</v-icon></div>

          <v-card-title class="benefit-title mb-1">
            {{ beneficio.titulo }}
          </v-card-title>

          <v-card-text class="text-body-2 text-grey-darken-2">
            {{ beneficio.descripcion }}
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>


  </v-container>

</template>

<script setup>


const beneficios = [
  {
    titulo: "Facturación en línea 24/7",
    descripcion: "Tu negocio podrá emitir facturas electrónicas en cualquier momento, desde cualquier lugar, utilizando solo una conexión a internet.",
    icon: "mdi-clock-outline",
  },
  {
    titulo: "Envío automático por correo electrónico",
    descripcion: "Las facturas se envían directamente al cliente en formato PDF y XML, simplificando la entrega y mejorando la experiencia del servicio.",
    icon: "mdi-email-outline",
  },
  {
    titulo: "Reducción del uso de papel",
    descripcion: "Ahorra en insumos y contribuye al medio ambiente eliminando la necesidad de imprimir facturas físicas.",
    icon: "mdi-file-document-outline",
  },
  {
    titulo: "Cumplimiento normativo garantizado",
    descripcion: "Nuestro sistema está actualizado con las exigencias del Servicio de Impuestos Nacionales (SIAT).",
    icon: "mdi-shield-check",
  },
  {
    titulo: "Módulo especial para productos exentos de IVA",
    descripcion: "Facilita la identificación y facturación de productos o servicios incluidos en el régimen Tasa Cero, con clasificación automática por rubro.",
    icon: "mdi-bank",
  },
  {
    titulo: "Control de ventas por cliente o canal de distribución",
    descripcion: "Accede a reportes por cliente, punto de venta o canal comercial, para un seguimiento detallado de tus operaciones.",
    icon: "mdi-account-cash-outline",
  },
  {
    titulo: "Alertas y seguimiento tributario",
    descripcion: "Recibe recordatorios sobre fechas clave de envío, validación o cierre fiscal, para evitar omisiones en tus declaraciones.",
    icon: "mdi-bell-alert-outline",
  },
  {
    titulo: "Adaptado para productores, cooperativas y PYMES",
    descripcion: "Ideal para emprendimientos agrícolas, pequeños productores, microempresas y organizaciones que operan bajo el régimen Tasa Cero.",
    icon: "mdi-lan-connect",
  },
  {
    titulo: "Soporte técnico especializado",
    descripcion: "Te acompañamos desde la configuración inicial hasta el uso diario, brindando soporte especializado y actualizaciones permanentes.",
    icon: "mdi-headset",
  },
];
</script>

<style scoped>
.display-title {
  font-size: 2.8rem;
  font-weight: 900;
  line-height: 1.3;
  color: #000000;
}

.display-title2 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #000000;
}

.description-text {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
}

.benefit-title {
  padding-left: 18px;
  padding-right: 18px;
  white-space: normal;
  word-break: break-word;
  text-align: center;
}

.hero-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.benefit-card {
  width: 100%;
  max-width: 410px;
  min-height: 300px;
  background-color: #f4f4f4;
  border: 2px solid #e0e0e0 ;
  transition: border-color 0.1s ease;
  margin: auto;
}

.benefit-card:hover {
  border: 2px solid #1565C0;
}

.icon-box {
  background-color: #1565C0;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
