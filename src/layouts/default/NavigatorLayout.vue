<script setup>
import { ref } from "vue";

const active = ref(false)
const btnlist = ref([
    { id: "home", title: "หน้าแรก", icon: "mdi-home-outline", active: false, size: "large" },
    { id: "skills", title: "ความสามารถ", icon: "mdi-puzzle-star-outline", active: false, size: "large" },
    { id: "timeline", title: "ไทม์ไลน์", icon: "mdi-timeline-text-outline", active: false, size: "large" },
    { id: "contacts", title: "ติดต่อ", icon: "mdi-phone-outline", active: false, size: "large" },
])
</script>
<template>
    <v-navigation-drawer color="transparent" location="end" name="drawer" permanent width="auto" border="none"
        :expand-on-hover="true">
        <div class="d-flex flex-column justify-center align-center h-100 ga-1">
            <template v-for="item in btnlist" :key="item.id">
                <v-tooltip :text="item.title">
                    <template v-slot:activator="{ props }">
                        <v-btn rounded="0" v-bind="props" :active="item.active" variant="text" :size="item.size"
                            :icon="item.icon"></v-btn>
                    </template>
                </v-tooltip>
            </template>
        </div>
    </v-navigation-drawer>
</template>