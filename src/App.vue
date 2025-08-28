<template>
  <v-app>
    <!-- *** ASIDE *** -->
    <!-- Utilizamos app en el componente para que decirle a Vuetify que forma parte de la APP y que debe reajustar el contenido y tenga en cuenta el aside fijo -->
    <v-navigation-drawer app permanent color="primary">
      <img
        src="@/assets/logoIH.png"
        alt="Logo"
        width="100"
        class="mt-5 mx-10"
      />
      <v-list-item title="IronHealth" subtitle="CRM"></v-list-item>
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
          @click="currentView = 'doctors'"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-file-document"
          title="Medical Report"
          @click="currentView = 'medical'"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-cog"
          title="Settings"
          @click="currentView = 'settings'"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-logout"
          title="Logout"
          @click="currentView = 'logout'"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- *** HEADER *** -->
    <v-app-bar app flat color="primary">
      <v-spacer></v-spacer>
      <v-avatar size="50" class="m-4">
        <v-img :src="userAvatar" alt="Avatar del usuario" />
      </v-avatar>
      <v-btn icon><v-icon>mdi-translate</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-bell</v-icon></v-btn>
    </v-app-bar>

    <!-- *** CONTENIDO DE DASHBOARD *** -->
    <v-main v-if="currentView === 'dashboard'">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-card class="pa-4">
              <v-card-title>Dashboard</v-card-title>
              <v-card-text>
                Overview of key metrics, recent activity, and quick access to
                medical reports, doctors, and patients.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="3">
            <v-card title="Info1" class="pa-4" color="secondary" dark>
              <v-card-text>11</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card title="Info1" class="pa-4" color="accent" dark>
              <v-card-text>11</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card title="Info1" class="pa-4" color="info" dark>
              <v-card-text>11</v-card-text>
            </v-card>
          </v-col>
          <!-- 0 es domingo, 1 es lunes, ... -->
          <v-col cols="3">
            <v-date-picker :first-day-of-week="1"></v-date-picker>
          </v-col>
        </v-row>
        <v-divider class="border-opacity-100" color="info"></v-divider>
        <!-- Fila -->
        <v-row>
          <!-- Columna -->
          <v-col>
            <v-card>
              <v-card-title>Patients</v-card-title>
              <!-- headers: encabezados, items: datos -->
              <v-data-table :headers="headers" :items="patients"></v-data-table>
            </v-card>
            <v-row>
              <v-col>
                <v-card>
                  <v-card-title>Doctors List</v-card-title>
                  <!-- También se puede coger los encabezados del objeto -->
                  <v-data-table
                    :headers="doctorHeaders"
                    :items="doctors"
                  ></v-data-table>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- *** CONTENIDO DE PATIENTS *** -->
    <v-main v-if="currentView === 'patients'">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-card class="pa-4">
              <v-card-title>Patients</v-card-title>
              <v-card-text>
                View and manage patient records, medical history, and personal
                information.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-card title="Total Patients" class="pa-4" color="success" dark>
              <v-card-text>150</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card title="Cancellations" class="pa-4" color="error" dark>
              <v-card-text>11</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>Patients</v-card-title>
              <v-data-table :headers="headers" :items="patients"></v-data-table>
            </v-card>
          </v-col>
        </v-row>

        <v-bottom-sheet>
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn class="mt-4" v-bind="activatorProps" text="Info"></v-btn>
          </template>

          <v-card
            title="Patients Overview"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ></v-card>
        </v-bottom-sheet>

        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <v-card-title>upload scanned report</v-card-title>
              <v-card-text>
                <v-file-input
                  label="Select a photo"
                  accept="image/*"
                  prepend-icon="mdi-camera"
                  v-model="photoFile"
                  @change="previewPhoto"
                ></v-file-input>

                <div v-if="photoPreview" class="mt-4">
                  <v-img
                    :src="photoPreview"
                    max-height="200"
                    contain
                    class="rounded-lg"
                  ></v-img>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="savePhoto">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <v-card-title>Subir informe</v-card-title>
              <v-card-text>
                <v-file-input
                  label="Select a document"
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                  prepend-icon="mdi-file-upload"
                  v-model="docFile"
                  @change="previewDoc"
                ></v-file-input>

                <div v-if="docFile" class="mt-4">
                  <p><strong>Name:</strong> {{ docFile.name }}</p>
                  <p>
                    <strong>Size:</strong>
                    {{ (docFile.size / 1024).toFixed(2) }} KB
                  </p>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" @click="saveDoc">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- *** DOCTORS *** -->
    <v-main v-if="currentView === 'doctors'">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-card class="pa-4">
              <v-card-title>Doctors</v-card-title>
              <v-card-text>
                View and manage the list of doctors, their specialties, and
                contact information.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-card title="Total Doctors" class="pa-4" color="purple" dark>
              <v-card-text>25</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card title="Active Today" class="pa-4" color="indigo" dark>
              <v-card-text>18</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card title="Available Shifts" class="pa-4" color="teal" dark>
              <v-card-text>12</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card>
              <v-card-title>Doctors List</v-card-title>
              <v-data-table
                :headers="doctorHeaders"
                :items="doctors"
              ></v-data-table>
            </v-card>
          </v-col>
        </v-row>

        <!-- *** BOTTOM SHEET CON INFO *** -->
        <v-bottom-sheet>
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn class="mt-4" v-bind="activatorProps" text
              >Doctor Stats</v-btn
            >
          </template>

          <v-card
            title="Doctors Overview"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ></v-card>
        </v-bottom-sheet>
      </v-container>
    </v-main>

    <!-- *** CONTENIDO DE MEDICAL REPORT *** -->
    <v-main v-if="currentView === 'medical'">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-card class="pa-4">
              <v-card-title>Medical Report</v-card-title>
              <v-card-text>
                View and manage the patient's medical test results and doctor's
                observations.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-card color="cyan lighten-2" class="pa-4">
              <v-card-title>Total Reports</v-card-title>
              <v-card-subtitle>52</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="orange lighten-2" class="pa-4">
              <v-card-title>Pending Reports</v-card-title>
              <v-card-subtitle>15</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="green lighten-2" class="pa-4">
              <v-card-title>Completed Reports</v-card-title>
              <v-card-subtitle>37</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="my-4">
          <v-col cols="3">
            <v-text-field label="Search patient"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-select
              label="State"
              :items="['Pending', 'Completed', 'All']"
              v-model="filterStatus"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="3">
            <v-slider
              v-model="priority"
              :min="1"
              :max="10"
              label="Prioridad"
              ticks="always"
              step="1"
            ></v-slider>
          </v-col>
          <v-col cols="3" class="d-flex align-center">
            <v-btn color="primary" @click="applyFilters">Apply filters</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-data-table
              :headers="reportHeaders"
              :items="reports"
            ></v-data-table>
          </v-col>
        </v-row>

        <!-- *** CHIPS *** -->
        <v-row class="my-4">
          <v-col>
            <v-chip color="success" class="ma-1">Cardiology</v-chip>
            <v-chip color="info" class="ma-1">Pediatrics</v-chip>
            <v-chip color="warning" class="ma-1">Neurology</v-chip>
            <v-chip color="error" class="ma-1">Oncology</v-chip>
          </v-col>
        </v-row>

        <!-- *** ALERT  *** -->
        <v-row>
          <v-col>
            <v-alert type="warning" border="left" colored-border>
              Remember to review pending reports before closing the day.
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- *** CONTENIDO DE SETTINGS *** -->
    <v-main v-if="currentView === 'settings'">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-card class="pa-4">
              <v-card-title>Application Settings</v-card-title>
              <v-card-text
                >Configura las opciones de la aplicación y tu perfil de
                usuario.</v-card-text
              >
            </v-card>
          </v-col>
        </v-row>

        <v-row class="my-4">
          <v-col cols="4">
            <v-switch v-model="darkMode" label="Dark Mode"></v-switch>
          </v-col>
          <v-col cols="4">
            <v-switch
              v-model="notifications"
              label="Active notifications"
            ></v-switch>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="language"
              :items="['Español', 'English', 'Français']"
              label="App language"
              outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="my-4">
          <v-col cols="4">
            <v-checkbox
              v-model="shareData"
              label="Sharing anonymous data"
            ></v-checkbox>
          </v-col>
          <v-col cols="4">
            <v-checkbox
              v-model="emailUpdates"
              label="Receive email updates"
            ></v-checkbox>
          </v-col>
          <v-col cols="4">
            <v-slider
              v-model="volume"
              :min="0"
              :max="100"
              step="1"
              label="Volume of alerts"
              ticks="always"
            ></v-slider>
          </v-col>
        </v-row>

        <v-row class="my-4">
          <v-col>
            <v-btn color="success" @click="saveSettings">Save changes</v-btn>
            <v-btn color="error" @click="resetSettings" class="ml-4"
              >Reset</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-main v-if="currentView === 'logout'">
      <v-container fluid>
        <v-row justify="center" class="mt-12">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card
              class="pa-6 text-center"
              elevation="10"
              shaped
              :style="{ borderTop: '4px solid #FF5252' }"
            >
              <v-card-title class="justify-center text-h5 font-weight-bold">
                <v-icon color="red darken-2" size="32" class="mr-2"
                  >mdi-logout</v-icon
                >
                Sign Out
              </v-card-title>

              <v-card-text class="text-subtitle-1 mt-4">
                Are you sure you want to end your session?
              </v-card-text>

              <v-card-actions class="justify-center mt-4">
                <v-btn
                  color="grey lighten-1"
                  class="px-6"
                  @click="cancelLogout"
                >
                  <v-icon left>mdi-cancel</v-icon>
                  Cancel
                </v-btn>

                <v-btn
                  color="red darken-2"
                  class="px-6 white--text"
                  elevation="2"
                  @click="performLogout"
                >
                  <v-icon left>mdi-exit-to-app</v-icon>
                  Sign Out
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

// Tab Seleccionada
const currentView = ref("dashboard");

// Avatar
import logoIH from "@/assets/logoIH.png";
const userAvatar = ref(logoIH);

// Pacientes
const patients = ref([
  { name: "John Doe", age: 45, condition: "Diabetes" },
  { name: "Jane Smith", age: 30, condition: "Hypertension" },
  { name: "Alice Brown", age: 0, condition: "Asthma" },
  { name: "Michael Johnson", age: 52, condition: "Arthritis" },
  { name: "Emily Davis", age: 28, condition: "Migraine" },
  { name: "Robert Wilson", age: 65, condition: "Heart Disease" },
  { name: "Sarah Miller", age: 34, condition: "Anxiety" },
  { name: "David Moore", age: 41, condition: "Obesity" },
  { name: "Lisa Taylor", age: 50, condition: "Thyroid Disorder" },
  { name: "James Anderson", age: 38, condition: "Depression" },
  { name: "Patricia Thomas", age: 57, condition: "Osteoporosis" },
  { name: "Daniel Martinez", age: 29, condition: "Allergies" },
  { name: "Jennifer Garcia", age: 43, condition: "Back Pain" },
  { name: "Matthew Robinson", age: 61, condition: "High Cholesterol" },
  { name: "Nancy Clark", age: 36, condition: "Insomnia" },
  { name: "Christopher Rodriguez", age: 55, condition: "Gastritis" },
  { name: "Jessica Lewis", age: 27, condition: "Eczema" },
  { name: "Andrew Lee", age: 48, condition: "Gout" },
  { name: "Karen Walker", age: 32, condition: "Sinusitis" },
  { name: "Thomas Hall", age: 63, condition: "Parkinson's" },
  { name: "Betty Young", age: 40, condition: "Hypothyroidism" },
  { name: "Charles King", age: 59, condition: "Prostate Issues" },
  { name: "Margaret Wright", age: 33, condition: "Pneumonia" },
  { name: "Kevin Scott", age: 46, condition: "Bronchitis" },
  { name: "Donna Green", age: 51, condition: "Anemia" },
  { name: "Jason Baker", age: 37, condition: "Acid Reflux" },
  { name: "Sandra Adams", age: 62, condition: "Cataracts" },
  { name: "Brian Nelson", age: 26, condition: "Sports Injury" },
  { name: "Michelle Carter", age: 49, condition: "Fibromyalgia" },
  { name: "Gary Mitchell", age: 54, condition: "Kidney Stones" },
  { name: "Laura Perez", age: 35, condition: "PCOS" },
  { name: "Steven Turner", age: 44, condition: "Sleep Apnea" },
  { name: "Deborah Phillips", age: 58, condition: "Glaucoma" },
  { name: "Paul Campbell", age: 31, condition: "Tendonitis" },
  { name: "Barbara Evans", age: 47, condition: "Lupus" },
  { name: "Mark Edwards", age: 53, condition: "Hepatitis B" },
  { name: "Ruth Collins", age: 25, condition: "IBS" },
  { name: "Edward Stewart", age: 60, condition: "Alzheimer's" },
  { name: "Dorothy Morris", age: 39, condition: "Varicose Veins" },
  { name: "Ralph Murphy", age: 42, condition: "Hernia" },
  { name: "Sharon Rivera", age: 56, condition: "Menopause Symptoms" },
  { name: "Larry Cook", age: 30, condition: "Food Poisoning" },
  { name: "Cynthia Bell", age: 45, condition: "Scoliosis" },
]);

const doctors = ref([
  {
    name: "Dr. Carlos Méndez",
    age: 48,
    specialty: "Cardiología",
    yearsOfExperience: 18,
    hospital: "Hospital General de Madrid",
  },
  {
    name: "Dra. Ana López",
    age: 39,
    specialty: "Pediatría",
    yearsOfExperience: 12,
    hospital: "Clínica Infantil San José",
  },
  {
    name: "Dr. Javier Ramírez",
    age: 52,
    specialty: "Traumatología",
    yearsOfExperience: 22,
    hospital: "Hospital Universitario La Paz",
  },
  {
    name: "Dra. Sofía García",
    age: 41,
    specialty: "Dermatología",
    yearsOfExperience: 15,
    hospital: "Centro Médico Velázquez",
  },
  {
    name: "Dr. Luis Fernández",
    age: 55,
    specialty: "Neurología",
    yearsOfExperience: 25,
    hospital: "Hospital Ramón y Cajal",
  },
  {
    name: "Dra. Elena Martínez",
    age: 37,
    specialty: "Ginecología",
    yearsOfExperience: 10,
    hospital: "Clínica Ginecológica Madrid",
  },
  {
    name: "Dr. Pablo Sánchez",
    age: 44,
    specialty: "Oncología",
    yearsOfExperience: 16,
    hospital: "MD Anderson Madrid",
  },
  {
    name: "Dra. Isabel Díaz",
    age: 49,
    specialty: "Endocrinología",
    yearsOfExperience: 20,
    hospital: "Hospital Quirónsalud",
  },
  {
    name: "Dr. Miguel Ángel Torres",
    age: 50,
    specialty: "Oftalmología",
    yearsOfExperience: 23,
    hospital: "Clínica Barraquer",
  },
  {
    name: "Dra. Laura Gómez",
    age: 36,
    specialty: "Psiquiatría",
    yearsOfExperience: 9,
    hospital: "Hospital Gregorio Marañón",
  },
]);

const reports = ref([
  {
    id: "RPT-001",
    patientName: "John Doe",
    doctorName: "Dr. Carlos Méndez",
    testType: "Análisis de Sangre",
    date: "2025-08-15",
    result: "Normal",
    status: "Completado",
  },
  {
    id: "RPT-002",
    patientName: "Jane Smith",
    doctorName: "Dra. Ana López",
    testType: "Radiografía de Tórax",
    date: "2025-08-18",
    result: "Sin anomalías",
    status: "Completado",
  },
  {
    id: "RPT-003",
    patientName: "Alice Brown",
    doctorName: "Dr. Javier Ramírez",
    testType: "Resonancia Magnética",
    date: "2025-08-20",
    result: "Requiere seguimiento",
    status: "Pendiente",
  },
  {
    id: "RPT-004",
    patientName: "Michael Johnson",
    doctorName: "Dra. Sofía García",
    testType: "Electrocardiograma",
    date: "2025-08-22",
    result: "Ritmo normal",
    status: "Completado",
  },
  {
    id: "RPT-005",
    patientName: "Emily Davis",
    doctorName: "Dr. Luis Fernández",
    testType: "Prueba de Esfuerzo",
    date: "2025-08-25",
    result: "Leve taquicardia",
    status: "Revisión",
  },
  {
    id: "RPT-006",
    patientName: "Robert Wilson",
    doctorName: "Dra. Elena Martínez",
    testType: "Ecografía Abdominal",
    date: "2025-08-26",
    result: "Pólipo en vesícula",
    status: "Pendiente",
  },
  {
    id: "RPT-007",
    patientName: "Sarah Miller",
    doctorName: "Dr. Pablo Sánchez",
    testType: "Biopsia",
    date: "2025-08-27",
    result: "Negativo para malignidad",
    status: "Completado",
  },
]);
</script>
