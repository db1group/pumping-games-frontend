import { createApp } from 'vue';

import vuetify from './plugins/vuetify';

import App from './App.vue';
import { DependencyInjection } from './infra/dependecy-injection/dependency-injection';
import pinia from './infra/plugins/pinia';
import router from './routes/router';

const app = createApp(App).use(vuetify).use(pinia);
const dependencyInjectionManager = new DependencyInjection();

dependencyInjectionManager.authService.connect().then(() => {
  app.use(router);
  dependencyInjectionManager.execute(app);

  app.mount('#app');
});
