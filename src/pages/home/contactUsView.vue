<template>
  <v-container fluid class="pt-15 px-0 pb-15 mt-15 bg-white" >
    <v-card
          variant="outlined"
          rounded="xl"
          class="py-8 px-16 my-15 border-blue"
          style="max-width: 1300px; margin: 0 auto;"
    >
      <v-row justify="center" align="center">
        <!-- Columna de texto -->
        <v-col cols="12" md="6" class="pt-15">

            <h2 class="text-h4 font-weight-bold mb-4">Contáctanos</h2>
            <p class="text-body-1">
              ¿Tienes alguna pregunta o necesitas más información? Puedes contactarnos a través del siguiente formulario, por correo electrónico o llamándonos. Estamos aquí para ayudarte.
            </p>
            <v-btn
                  class="custom-hover-btn text-body-2 mt-8 mb-15"
                  color="#1565C0"
                  rounded="lg"
                  variant="flat"
                  height="45"
                  width="150"
                  elevation="2"
                  :to="{ name: 'contact-us-page' }"
                >
                  Contáctanos
            </v-btn>
          
        </v-col>

        <!-- Columna de imagen -->
        <v-col cols="12" md="6" class="d-flex justify-center pt-5 ">
          <img src="@/assets/images/contactUs.png" alt="Ilustración" class="hero-image" />
        </v-col>

      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>

</script>

<style scoped>
.border-blue {
  border: 4px solid #1565C0;
}

.display-title {
  font-size: 2.8rem;
  font-weight: 900;
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
</style>
