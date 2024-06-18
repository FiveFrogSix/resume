<script setup>
import { ref } from 'vue';
const theme = ref("dark")
</script>
<template>
    <v-app-bar absolute :elevation="0" scroll-behavior="hide" scroll-threshold="200" color="transparent"
        style='z-index:3000;'>
        <template v-slot:append>
            <v-row dense>
                <v-col align-self="center">
                    <v-btn-toggle density="compact" rounded="pill" dividedborderless>
                        <v-btn value="TH" size="small">
                            <span>TH</span>
                        </v-btn>
                        <v-btn value="EN" size="small">
                            <span>EN</span>
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
                <v-col>
                    <v-switch v-model="theme" false-icon="mdi-moon-waning-crescent" true-icon="mdi-white-balance-sunny"
                        false-value="dark" true-value="light" hide-details inset></v-switch>
                </v-col>
            </v-row>


        </template>

    </v-app-bar>
</template>