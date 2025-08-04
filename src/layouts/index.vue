<template>
  <v-app>
    <AppBar />
    <v-main class="custom-background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from './AppBar.vue'
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.custom-background {
  background-color: #f4f4f4;
}

.v-application {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
