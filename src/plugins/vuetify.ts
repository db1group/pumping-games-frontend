import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
const rockstartTheme = {
  dark: true,
  colors: {
    input: '#fff',
    primary: '#f72770',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    background: '#13091e',
    'background-seconday': '#13091e',
  },
  variables: {
    'border-color': '#000000',
  },
};
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'rockstartTheme',
    themes: {
      rockstartTheme,
    },
  },
});

export default vuetify;
