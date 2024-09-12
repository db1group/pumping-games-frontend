<template>
  <v-navigation-drawer permanent>
    <v-list-item class="pa-4" nav> {{ username }} </v-list-item>

    <v-divider></v-divider>
    <v-list>
      <v-list-item link href="/" title="Home" value="home"></v-list-item>
      <v-list-item
        href="/nation-events"
        title="Evento de nações"
        value="nations"
      ></v-list-item>
      <v-list-item href="/" title="Ligas" value="leagues"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { authStore } from '../../store/auth-store';

export default defineComponent({
  computed: {
    username() {
      const store = authStore();
      return store.username;
    },
  },
});
</script>
