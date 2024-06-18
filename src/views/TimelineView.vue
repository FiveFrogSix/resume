<script setup>
import { List } from '@/datas/static/career-path-static';
import TimelineDetail from "@/components/Timeline/TimelineDetail.vue"
import { computed, onBeforeMount, ref } from 'vue';

const list = ref([])

const getList = computed(() => {
    return list.value
})
onBeforeMount(() => {
    sortList()
})
const sortList = () => {
    const past = List.filter((item) => item.end)
    const now = List.find((item) => !item.end)
    const sorted = past.sort((a, b) => new Date(b.start) - new Date(a.start))
    sorted.unshift(now)
    list.value = sorted
}
</script>
<template>
    <v-lazy :options="{ 'threshold': 0.5 }" transition="fade-transition">
        <v-timeline>
            <template v-for="(item, index) in getList" :key="index">
                <v-timeline-item>
                    <template v-slot:icon>
                        <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
                    </template>
                    <template v-slot:opposite>
                        <span>{{ new Date(item.start).getFullYear() }}</span>
                    </template>
                    <v-card class="elevation-2">
                        <v-card-title class="text-h5">
                            {{ item.poisition_name }}
                        </v-card-title>
                        <v-card-text>
                            <timeline-detail :detail="item"></timeline-detail>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </template>
        </v-timeline>
    </v-lazy>
</template>
