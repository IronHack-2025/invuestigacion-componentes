// src/main.js
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Iconos
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        dark: false, 
        colors: {
          background: '#FFFFFF', 
          primary: '#1976D2',    
          secondary: '#424242',  
          accent: '#82B1FF',     
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          error: '#FF5252',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
