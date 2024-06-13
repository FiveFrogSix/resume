<script setup>
import { ref } from "vue";
const menus = ref([
    { id: "home", title: "หน้าแรก", icon: "mdi-home-outline", size: "large", route: { name: "Home" } },
    { id: "skills", title: "ความสามารถ", icon: "mdi-puzzle-star-outline", size: "large", route: { name: "Skills" } },
    { id: "career", title: "ประวัติการทำงาน", icon: "mdi-timeline-text-outline", size: "large", route: { name: "CareerPath" } },
    { id: "contacts", title: "ติดต่อ", icon: "mdi-phone-outline", size: "large", route: { name: "Contacts" } },
])
</script>
<template>
    <v-navigation-drawer color="transparent" location="end" name="drawer" permanent width="auto" border="none"
        :expand-on-hover="true">
        <div class="d-flex flex-column justify-center align-center h-100 ga-1">
            <template v-for="menu in menus" :key="menu.id">
                <v-tooltip :text="menu.title">
                    <template v-slot:activator="{ props }">
                        <v-btn rounded="0" v-bind="props" variant="text" :size="menu.size" :icon="menu.icon"
                            :to="menu.route"></v-btn>
                    </template>
                </v-tooltip>
            </template>
        </div>
    </v-navigation-drawer>
</template>