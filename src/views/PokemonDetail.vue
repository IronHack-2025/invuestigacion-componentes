<template>
  <v-container v-if="pokemon" class="d-flex justify-center">
    <v-card max-width="500" class="pa-4 text-center" elevation="6">
      <v-img
        :src="pokemon.sprite"
        class="mx-auto mb-4"
        :height="isSmallScreen ? 180 : 240"
        :width="isSmallScreen ? 180 : 240"
        cover
        style="border-radius: 8px"
      ></v-img>

      <v-card-title class="text-h5 justify-center">
        {{ pokemon.name }}
      </v-card-title>

      <v-card-subtitle class="text-subtitle-1 text-center">
        {{ pokemon.type.join(', ') }}
      </v-card-subtitle>
    </v-card>
  </v-container>

  <v-container v-else class="text-center">
    <p>Cargando Pokémon...</p>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'//obtenemos la ruta pasada por RouteLink

const route = useRoute()
const pokemon = ref(null)

onMounted(async () => {
  try {
    const response = await fetch(`https://pokemon-server-3a2p.onrender.com/api/pokemons/${route.params.id}`)
    if (!response.ok) throw new Error('Error al cargar Pokémon')
    pokemon.value = await response.json()
  } catch (err) {
    console.error(err)
  }
})
</script>

