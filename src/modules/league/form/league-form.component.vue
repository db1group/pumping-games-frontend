<template>
    <v-card>
        <v-card-title>
            Crie uma nova liga
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col cols="12" lg="3">
                        <v-text-field variant="outlined" color="input" placeholder="Nome da liga" />
                    </v-col>
                    <v-col cols="12" lg="3">
                        <v-text-field variant="outlined" color="input" placeholder="Logo" />
                    </v-col>
                    <v-col cols="12" lg="3">
                        <v-text-field variant="outlined" color="input" placeholder="Temporada" />
                    </v-col>
                    <v-col cols="12" lg="3">
                        <v-switch label="Ativo" />
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>