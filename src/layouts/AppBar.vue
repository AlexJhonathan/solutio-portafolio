<template>
  <div class="app-bar-wrapper">
    <v-app-bar flat height="100" class="custom-app-bar">
      <v-container style="max-width: 1300px; margin: 0 auto;">
        <v-row align="center" justify="space-between" class="fill-height">
          <!-- Logo -->
          <v-col cols="3" class="d-flex align-center pr-0 pl-0">
            <img
              src="@/assets/logo-solutio4.png"
              alt="Logo"
              height="42"
              class="mr-3"
            />
            <v-app-bar-title class="text-black font-weight-bold pr-0">
              SOLUTIO
            </v-app-bar-title>
          </v-col>

          <v-col cols="6" class="d-flex justify-center">
            <nav class="d-flex align-center">
              <template v-for="(item, index) in drawerItems" :key="item.title">
                <template v-if="item.title !== 'Servicios'">
                  <RouterLink
                    :to="item.route"
                    class="nav-link mx-8"
                    active-class="active-link"
                  >
                    {{ item.title }}
                  </RouterLink>
                </template>

                <template v-else>
                  <!-- Menú desplegable para Servicios -->
                  <v-menu
                    open-on-hover
                    offset-y
                    transition="scale-transition"
                    location="bottom"
                  >
                    <template #activator="{ props }">
                      <span v-bind="props" class="nav-link mx-8 d-inline-block">
                        Servicios <v-icon size="18" class="ml-1">mdi-chevron-down</v-icon>
                      </span>
                    </template>

                    <v-list class="py-2 px-1">
                      <v-list-item
                        v-for="(subItem, index) in serviceItems"
                        :key="index"
                        @click="$router.push(subItem.route)"
                        class="custom-subitem"
                      >
                        <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </template>
            </nav>
          </v-col>


          <v-col cols="3" class="d-flex justify-end">
            <v-btn
              class="custom-hover-btn text-body-2"
              color="#1565C0"
              rounded="lg"
              variant="flat"
              height="40"
              elevation="2"
              @click="$router.push('/contact-us-page')"
            >
              Contáctanos
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import { drawerItems } from '@/assets/utilities/DrawerItems'

// Remueve "Servicios" del nav normal
const filteredDrawerItems = drawerItems.filter(item => item.title !== 'Servicios')

// Subrutas del dropdown de Servicios
const serviceItems = [
  { title: 'Mantenimiento y Reparación', route: '/maintenance-page' },
  { title: 'Soporte Técnico', route: '/tecnic-suport-page' },
  { title: 'Capacitación Técnica', route: '/tecnic-capacitation-page' }
]
</script>


<style scoped>
/* Contenedor externo que permite centrar el AppBar */
.app-bar-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 0px;
}

/* Forzar ancho del AppBar */
.custom-app-bar {
  width: 1450px !important;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #ffffff;
  position: relative;
  left: auto !important;
  right: auto !important;
}

/* --- Estilo de los links --- */
.nav-link {
  color: rgb(0, 0, 0);
  font-size: 1.05rem;
  font-weight: 400;
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.2s;
  display: inline-block;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0%;
  background-color: rgb(0, 0, 0);
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after,
.active-link::after {
  width: 100%;
}

.nav-link:hover {
  background-color: transparent !important;
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

.custom-subitem {
  font-size: 1rem;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 180px;
}

.custom-subitem:hover {
  background-color: #f2f2f2 !important;
}
</style>
