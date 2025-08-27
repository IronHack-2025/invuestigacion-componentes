<template>
  <v-app>
    <!-- *** ASIDE *** -->
    <!-- Utilizamos app en el componente para que decirle a Vuetify que forma parte de la APP y que debe reajustar el contenido y tenga en cuenta el aside fijo -->
    <v-navigation-drawer app permanent color="primary">
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider />
      <v-list>
        <v-list-item
          link
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          @click="currentView = 'dashboard'"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-account-multiple"
          title="Patients"
          @click="currentView = 'patients'"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-doctor"
          title="Doctors"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-file-document"
          title="Medical Report"
        ></v-list-item>
        <v-list-item link prepend-icon="mdi-cog" title="Settings"></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-logout"
          title="Logout"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- *** HEADER *** -->
    <v-app-bar app flat color="info">
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-translate</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-bell</v-icon></v-btn>
    </v-app-bar>

    <!-- *** CONTENIDO DE DASHBOARD *** -->
    <v-main v-if="currentView === 'dashboard'">
      <v-container fluid>
        <!-- *** CONTENIDO VARIO CON CALENDARIO *** -->
        <v-row>
          <v-col cols="3">
            <v-card
              title="Info 1"
              subtitle="Detalles"
              class="pa-4"
              color="success"
            ></v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              title="Info 2"
              subtitle="Detalles"
              class="pa-4"
              color="warning"
            ></v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              title="Info 3"
              subtitle="Detalles"
              class="pa-4"
              color="error"
            ></v-card>
          </v-col>
          <v-col cols="3">
            <v-date-picker></v-date-picker>
          </v-col>
        </v-row>
        <!-- Fila -->
        <v-row>
          <!-- Columna -->
          <v-col>
            <v-card>
              <v-card-title>Patients</v-card-title>
              <!-- headers: encabezados, items: datos -->
              <v-data-table :headers="headers" :items="patients"></v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- *** CONTENIDO DE DASHBOARD *** -->
    <v-main v-if="currentView === 'dashboard'">
      <v-container fluid>
        <!-- *** CONTENIDO VARIO CON CALENDARIO *** -->
        <v-row>
          <v-col cols="3">
            <v-card
              title="Info 1"
              subtitle="Detalles"
              class="pa-4"
              color="success"
            ></v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              title="Info 2"
              subtitle="Detalles"
              class="pa-4"
              color="warning"
            ></v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              title="Info 3"
              subtitle="Detalles"
              class="pa-4"
              color="error"
            ></v-card>
          </v-col>
          <v-col cols="3">
            <v-date-picker></v-date-picker>
          </v-col>
        </v-row>
        <!-- Fila -->
        <v-row>
          <!-- Columna -->
          <v-col>
            <v-card>
              <v-card-title>Patients</v-card-title>
              <!-- headers: encabezados, items: datos -->
              <v-data-table :headers="headers" :items="patients"></v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- *** CONTENIDO DE PATIENTS *** -->
    <v-main v-if="currentView === 'patients'">
      <v-container fluid>
        <!-- *** CONTENIDO VARIO CON BOTTOM SHEET *** -->
        <v-row>
          <v-col cols="4">
            <v-card
              title="Info 1"
              subtitle="Detalles"
              class="pa-4"
              color="error"
            ></v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              title="Info 2"
              subtitle="Detalles"
              class="pa-4"
              color="success"
            ></v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              title="Info 3"
              subtitle="Detalles"
              class="pa-4"
              color="warning"
            ></v-card>
          </v-col>
        </v-row>
        <!-- Fila -->
        <v-row>
          <!-- Columna -->
          <v-col>
            <v-card>
              <v-card-title>Patients</v-card-title>
              <!-- headers: encabezados, items: datos -->
              <v-data-table :headers="headers" :items="patients"></v-data-table>
            </v-card>
          </v-col>
        </v-row>

        <v-bottom-sheet>
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" text="Info"></v-btn>
          </template>

          <v-card
            title="Información sobre pacientes"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ></v-card>
        </v-bottom-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
// Encabezados
const headers = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
  { title: "Condition", key: "condition" },
];

// Pacientes
const patients = ref([
  { name: "John Doe", age: 45, condition: "Diabetes" },
  { name: "Jane Smith", age: 30, condition: "Hypertension" },
  { name: "Alice Brown", age: 60, condition: "Asthma" },
]);

// Tab Seleccionada
const currentView = ref("dashboard");
</script>
