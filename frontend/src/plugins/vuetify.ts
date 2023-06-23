import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import {
  VBtn,
  VDialog,
  VIcon,
  VLayout,
  VMain,
  VRow,
  VCol,
  VCard,
  VImg,
  VTextField
} from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components: {
    VBtn,
    VDialog,
    VIcon,
    VLayout,
    VMain,
    VRow,
    VCol,
    VCard,
    VImg,
    VTextField
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          primary: '#086788',
          secondary: '#06aed5',
          accent: '#F0C808'
        }
      }
    }
  }
})
