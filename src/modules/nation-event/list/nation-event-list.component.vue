<template>
  <v-card>
    <v-card-title> Eventos de nações </v-card-title>
    <v-card-text>
      <v-row justify="end" class="mb-2">
        <v-col cols="12" sm="auto">
          <v-btn color="primary" @click="redirectToNewNationEvent"
            >Novo evento</v-btn
          >
        </v-col>
      </v-row>
      <v-data-table :headers="headers" :items="items">
        <template v-slot:[`item.action`]="{ item }">
          <div>
            <v-btn small variant="text" icon="mdi-pencil" color="secundary">
            </v-btn>
            <v-btn
              color="red"
              small
              variant="text"
              icon="mdi-trash-can-outline"
            >
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      headers: [
        {
          title: 'Nome do evento',
          key: 'name',
        },
        {
          title: 'Quantidade de nações',
          key: 'nationCount',
          align: 'center',
        },
        {
          title: 'Quantidade de games',
          key: 'gamesCount',
          align: 'center',
        },
        {
          title: 'Ações',
          key: 'action',
          align: 'center',
        },
      ],
      items: [
        {
          id: 'e147e96e-b766-48d8-9691-8f29956bf321',
          name: 'Pumping Games',
          nationCount: 56,
          gamesCount: 47,
        },
        {
          id: '690a59b4-bfe1-4149-8a57-dee3cb52be60',
          name: 'Pumping Games',
          nationCount: 56,
          gamesCount: 47,
        },
        {
          id: 'aa200744-2960-4539-b320-93b41208c232',
          name: 'Pumping Games',
          nationCount: 56,
          gamesCount: 47,
        },
        {
          id: 'ddde0568-815a-4cad-ac43-057ba129a6f2',
          name: 'Pumping Games',
          nationCount: 56,
          gamesCount: 47,
        },
      ],
    };
  },
  methods: {
    redirectToNewNationEvent(): void {
      this.$router.push({ name: 'create-nation-event' });
    },
  },
});
</script>
