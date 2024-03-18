<script setup>
import { ref } from 'vue';
const count = ref(0)
const message = ref("Counter: 0")
const increment = () => {
    count.value++;
    message.value = `Counter: ${count.value}`;
}

const decreased = () => {
    count.value--;
    message.value = `Counter: ${count.value}`;
}
</script>

<template>
    <v-app>
        <v-main>
            <v-container v-bind:fluid="true">
                <v-row align="center" class="ga-3">
                    <v-col cols="12">
                        <div class="text-h3">{{ message }}</div>
                    </v-col>
                    <v-col cols="12">
                        <v-btn id="btnup" @click="increment()">Increment</v-btn>
                        <v-btn id="btndown" @click="decreased()">Increment</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>

</template>