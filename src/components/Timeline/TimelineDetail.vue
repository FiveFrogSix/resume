<script setup>
import { ref } from 'vue';

const card = ref()

defineProps({
    detail: {
        default: null,
        type: [Array, Object],
    },
})
const btn_text = ref("ดูเพิ่มเติม")
const btn_class = ref("")
const seeMore = () => {
    if (btn_text.value === "ดูเพิ่มเติม") {
        btn_class.value = "expand"
        btn_text.value = "ซ่อน"
    } else {
        btn_class.value = ""
        btn_text.value = "ดูเพิ่มเติม"
    }
}
</script>
<template>
    <div ref="card" class="transiton pb-5" :class="btn_class">
        <div class="text-h6"> {{ detail.company_name }}</div>
        <div class="text-subtitle-1">ต.ค. 2020 - ธ.ค. 2021 (1 ปี 3 เดือน)</div>
        <template v-for="(item, index) in detail.descriptions" :key="index">
            <p>
                {{ index + 1 }}.{{ item.title }}
            </p>
            <ul>
                <li v-for="sub in item.subs" :key="sub">{{ sub }}</li>
            </ul>
        </template>
    </div>
    <button @click="seeMore" type="button" class="btn btn-more w-100 position-absolute start-0">{{ btn_text }}</button>
</template>
<style lang="scss" scoped>
.btn-more {
    left: 0%;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 1px -5px 15px 10px rgba(0, 0, 0, 0.6);
}

.transiton {
    overflow: hidden;
    height: 150px;
    transition: height 0.7s ease-in;


    &.expand {
        height: auto;
        transition: height 0.7s ease-out;
    }
}
</style>