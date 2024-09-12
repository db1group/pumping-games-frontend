<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <h1>Home</h1>
        </v-card-title>
        <v-card-text>
          <p>Welcome to Rockstar Gaming</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="3">
          <v-card>
            <v-img
              src="/images/league/create-league-card.jpg"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white">
                Cria uma nova liga
              </v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="createNewNationEvent"> Nova liga de nações </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    createNewNationEvent() {
      this.$router.push({ name: 'create-nation-event' });
    },
  },
});
</script>
