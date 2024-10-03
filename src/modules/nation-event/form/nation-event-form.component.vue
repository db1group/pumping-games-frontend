<template>
  <v-card>
    <v-card-title>
      <span class="ml-2">{{ formModeTitle }} evento de nações</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form">
        <v-row>
          <v-col cols="12" lg="4">
            <v-text-field
              :rules="[rules.required]"
              validate-on="blur"
              v-model="nationEvent.name"
              placeholder="Nome do evento de nações"
              hint="Ex: Pumping games"
            />
          </v-col>
          <v-col cols="12" lg="3">
            <v-text-field
              v-model="nationEvent.season"
              placeholder="Season"
              hint="Ex: 2024"
            />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn size="large">Cancelar</v-btn>
      <v-btn @click="save" size="large" variant="flat" color="primary">{{
        formModeTitle
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { NationEvent } from '../entities/nation-event';
import { NationEventService } from '../services/nation-event.service';
import { HTTP_CLIENT, HttpClient } from '../../../infra/http/http-client';
import rulesService from '../../../infra/form-validation/rules.service';

export default defineComponent({
  data() {
    return {
      rules: {
        required: rulesService.required,
      },
      nationEvent: new NationEvent(),
      nationEventService: new NationEventService(
        inject(HTTP_CLIENT) as HttpClient
      ),
    };
  },
  methods: {
    async save() {
      const { valid } = await (this.$refs.form as any).validate();

      if (!valid) return;
      if (this.isEditMode) {
        this.updateNationEvent();
        return;
      }
      this.create();
    },
    create() {
      this.nationEventService.createNationEvent(this.nationEvent);
    },
    updateNationEvent() {
      this.nationEventService.updateNationEvent(this.nationEvent);
    },
    async getNationEventById(nationEventId: string) {
      this.nationEvent = await this.nationEventService.getNationEventById(
        nationEventId
      );
    },
  },
  computed: {
    isEditMode() {
      return !!this.$route.params.id;
    },
    formModeTitle() {
      return this.isEditMode ? 'Editar' : 'Cadastrar';
    },
  },

  created() {
    console.log(this);
    const id = this.$route.params.id as string;
    if (id) {
      this.getNationEventById(id);
    }
  },
});
</script>
