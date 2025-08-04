<template>
  <v-container class="pt-5 px-0 pb-15 mb-15" style="max-width: 1300px; margin: 0 auto;">

    <v-row justify="center" align="center" class="mt-15 mb-2">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-title">Beneficios</h1>
        <p class="description-text mt-6">
          Nuestra Facturación Electronica para hotelería y turismo le ayudará a ahorrar tiempo y dinero en el proceso de facturación, ofreciéndole los siguientes beneficios.
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
    descripcion: "Tu hotel, hostal o agencia de turismo podrá emitir facturas electrónicas en cualquier momento.",
    icon: "mdi-clock-outline",
  },
  {
    titulo: "Envío automático por correo electrónico",
    descripcion: "Las facturas pueden ser enviadas automáticamente a los huéspedes o clientes en formato PDF y XML.",
    icon: "mdi-email-outline",
  },
  {
    titulo: "Reducción del uso de papel",
    descripcion: "Contribuye al cuidado del medio ambiente eliminando la necesidad de impresión de facturas físicas y simplificando el archivo contable.",
    icon: "mdi-file-document-outline",
  },
  {
    titulo: "Cumplimiento normativo garantizado",
    descripcion: "Cumple con todos los requisitos del sistema tributario vigente, evitando sanciones y observaciones.",
    icon: "mdi-shield-check",
  },
  {
    titulo: "Módulo especial para reservas y servicios",
    descripcion: "Gestiona fácilmente la facturación por noches de hospedaje, paquetes turísticos, servicios adicionales y más.",
    icon: "mdi-bank",
  },
  {
    titulo: "Control de pagos por cliente o reserva",
    descripcion: "Consulta el estado de cuenta por cada huésped o cliente, registrando abonos, saldos pendientes y cobros realizados.",
    icon: "mdi-account-cash-outline",
  },
  {
    titulo: "Alertas de vencimiento y seguimiento de pagos",
    descripcion: "Recibe notificaciones sobre pagos vencidos, próximos cobros o reservas con facturación pendiente.",
    icon: "mdi-bell-alert-outline",
  },
  {
    titulo: "Integración con sistemas de reservas o PMS",
    descripcion: "Posibilidad de integrarse con tu sistema de gestión hotelera o motor de reservas para automatizar la facturación al momento del check-in o check-out.",
    icon: "mdi-lan-connect",
  },
  {
    titulo: "Soporte técnico especializado",
    descripcion: "Nuestro equipo te acompaña en todo el proceso: implementación, capacitación, soporte técnico y actualización ante cambios normativos.",
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
