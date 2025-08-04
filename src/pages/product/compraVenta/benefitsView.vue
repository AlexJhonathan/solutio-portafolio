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
    descripcion: "Genera facturas en cualquier momento y desde cualquier lugar con conexión a internet.",
    icon: "mdi-clock-outline",
  },
  {
    titulo: "Envío automático por correo electrónico",
    descripcion: "Envía las facturas al cliente por correo en PDF y XML de forma inmediata.",
    icon: "mdi-email-outline",
  },
  {
    titulo: "Reducción del uso de papel",
    descripcion: "Olvídate de los archivos físicos y contribuye al cuidado del medio ambiente.",
    icon: "mdi-file-document-outline",
  },
  {
    titulo: "Cumplimiento normativo garantizado",
    descripcion: "Cumple con el SIAT y evita multas o rechazos por errores tributarios.",
    icon: "mdi-shield-check",
  },
  {
    titulo: "Gestión de compras y ventas",
    descripcion: "Registra compras a proveedores y ventas a clientes en un solo sistema.",
    icon: "mdi-bank",
  },
  {
    titulo: "Control de inventario en tiempo real",
    descripcion: "Tu stock se actualiza automáticamente con cada venta o compra registrada.",
    icon: "mdi-account-cash-outline",
  },
  {
    titulo: "Seguimiento de pagos por cliente",
    descripcion: "Consulta abonos, deudas y estado de cuenta por cada cliente.",
    icon: "mdi-bell-alert-outline",
  },
  {
    titulo: "Alertas de vencimientos y cobros",
    descripcion: "Recibe recordatorios sobre pagos pendientes o vencidos.",
    icon: "mdi-lan-connect",
  },
  {
    titulo: "Soporte técnico especializado",
    descripcion: "Nuestro equipo te acompaña en todo el proceso: capacitación, soporte técnico y actualización ante cambios normativos.",
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
