import { createApp } from 'vue';

import router from './routes/router';
import vuetify from './plugins/vuetify';

import App from './App.vue';

createApp(App).use(vuetify).use(router).mount('#app');
