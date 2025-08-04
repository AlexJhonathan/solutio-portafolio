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
    descripcion: "Emite facturas electrónicas por consultas, internaciones o servicios médicos en cualquier momento y desde cualquier dispositivo.",
    icon: "mdi-clock-outline",
  },
  {
    titulo: "Envío automático al paciente o aseguradora",
    descripcion: "Las facturas se envían automáticamente en formato PDF y XML por correo electrónico al paciente o entidad aseguradora.",
    icon: "mdi-email-outline",
  },
  {
    titulo: "Reducción del uso de papel",
    descripcion: "Reduce el uso de papel en facturación y archivo, facilitando la gestión digital y cumpliendo con normativas ambientales.",
    icon: "mdi-file-document-outline",
  },
  {
    titulo: "Cumplimiento normativo garantizado",
    descripcion: "Garantiza que tu clínica u hospital cumpla con el SIAT y otras exigencias tributarias, evitando multas o rechazos.",
    icon: "mdi-shield-check",
  },
  {
    titulo: "Módulo clínico especializado",
    descripcion: "Facilita la facturación por consultas, cirugías, internaciones, farmacia, laboratorio y otros servicios médicos.",
    icon: "mdi-bank",
  },
  {
    titulo: "Control por paciente o convenio",
    descripcion: "Visualiza y gestiona cobros por paciente, seguro o convenio, incluyendo anticipos y saldos pendientes.",
    icon: "mdi-account-cash-outline",
  },
  {
    titulo: "Alertas y seguimiento de cobros",
    descripcion: "Recibe notificaciones de cuentas vencidas, pagos pendientes o servicios sin facturar.",
    icon: "mdi-bell-alert-outline",
  },
  {
    titulo: "Integración con sistemas médicos (HIS)",
    descripcion: "Conéctate fácilmente con sistemas hospitalarios o administrativos existentes para automatizar la emisión de facturas.",
    icon: "mdi-lan-connect",
  },
  {
    titulo: "Soporte técnico especializado",
    descripcion: "Recibe soporte durante la implementación, capacitación, uso diario y ante cualquier cambio normativo del SIN.",
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
