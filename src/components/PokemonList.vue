<template>
  <v-container class="pa-10">
    <v-row>
      <v-col v-for="(pokemon, index) in pokemons" :key="pokemon._id" cols="12" sm="6" md="4" lg="3">
        <!-- <RouterLink :to="`/pokemon/${pokemon._id}`"> -->
        <RouterLink
          :to="{
            name: 'pokemon-detail',
            params: { id: pokemon._id },
            state: { pokemon },
          }"
        >
          <v-card class="rounded-lg elevation-2">
            <v-img :src="pokemon.sprite" height="300" cover />
            <v-card-title class="text-h6 text-center">{{ pokemon.name }}</v-card-title>
            <v-card-subtitle class="text-center">{{ pokemon.type.join(", ") }}</v-card-subtitle>
          </v-card>
        </RouterLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

const pokemons = ref([]);

onMounted(() => {
  getInfo();
});

const getInfo = async () => {
  try {
    const response = await fetch("https://pokemon-server-3a2p.onrender.com/api/pokemons");
    if (!response.ok) {
      throw new Error(`Error en la API: ${response.status}`);
    }
    const data = await response.json();
    pokemons.value = data;
    console.log("Pokemons:", data);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};
</script>
