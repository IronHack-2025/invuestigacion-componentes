<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <!-- <RouterLink to="/about">About</RouterLink> -->
        </nav>
 
    <RouterView />
  </v-app>
</template>

<style scoped>
</style>
