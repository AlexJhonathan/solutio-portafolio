<template>
  <v-container class="pt-5 px-0 pb-15 mb-15" style="max-width: 1300px; margin: 0 auto;">

    <v-row justify="center" align="center" class="mt-15 mb-2">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">Beneficios</h1>
        <p class="description-text mt-6">
          Nuestra Facturación Electronica para alquileres le ayudará a ahorrar tiempo y dinero en el proceso de facturación, ofreciéndole los siguientes beneficios.
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
    descripcion: "Emite facturas electrónicas por alquileres en cualquier momento y desde cualquier dispositivo con conexión a internet.",
    icon: "mdi-clock-outline",
  },
  {
    titulo: "Envío automático por correo electrónico",
    descripcion: "Las facturas llegan directamente al inquilino o cliente en formatos PDF y XML, facilitando su gestión.",
    icon: "mdi-email-outline",
  },
  {
    titulo: "Reducción del uso de papel",
    descripcion: "Reduce costos y espacio al eliminar la impresión y archivo físico de documentos.",
    icon: "mdi-file-document-outline",
  },
  {
    titulo: "Cumplimiento normativo garantizado",
    descripcion: "Asegura el cumplimiento con las normas del SIN y evita sanciones o devoluciones.",
    icon: "mdi-shield-check",
  },
  {
    titulo: "Módulo especializado en alquileres",
    descripcion: "Gestiona contratos, pagos mensuales, anticipos y servicios adicionales vinculados al alquiler.",
    icon: "mdi-bank",
  },
  {
    titulo: "Control detallado de pagos",
    descripcion: "Consulta el estado de cuentas por cada inquilino o contrato, con registros de abonos y saldos pendientes.",
    icon: "mdi-account-cash-outline",
  },
  {
    titulo: "Alertas de vencimiento y cobros",
    descripcion: "Recibe notificaciones sobre pagos próximos o retrasados para evitar morosidad.",
    icon: "mdi-bell-alert-outline",
  },
  {
    titulo: "Integración con sistemas de administración",
    descripcion: "Posibilidad de enlazar con software de gestión inmobiliaria o de flotas para automatizar procesos.",
    icon: "mdi-lan-connect",
  },
  {
    titulo: "Soporte técnico especializado",
    descripcion: "Acompañamiento en la implementación, capacitación y atención ante cualquier consulta o actualización.",
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
