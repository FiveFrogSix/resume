<script lang="ts" setup>
import type { Menu } from "@/types/menu"
import { computed, onBeforeMount, ref } from "vue"
import { RouterLink } from "vue-router"
const menu_list = ref<Menu[]>([])
const getMenuList = computed(() => {
  return menu_list.value
})
onBeforeMount(() => {
  setMenuList()
})

const setMenuList = () => {
  // 1
  menu_list.value.push({
    route: {
      to: { name: "Home" },
      class: "btn btn-primary btn-menu btn-sm",
      activeClass: "btn-menu-active"
    },
    text: "หน้าแรก",
    faIcon: {
      icon: "fa-solid fa-house"
    }
  })
  // 2
  menu_list.value.push({
    route: {
      to: { name: "Skills" },
      class: "btn btn-primary btn-menu btn-sm",
      activeClass: "btn-menu-active"
    },
    text: "หน้าที่สองจ้า",
    faIcon: {
      icon: "fa-solid fa-user"
    }
  })
}
</script>
<template>
  <div class="position-fixed top-50 end-0">
    <div class="d-flex flex-column gap-2 text-end">
      <div v-for="(item, index) in getMenuList" :key="index">
        <router-link v-bind="item.route">
          <font-awesome-icon v-bind="item.faIcon" class="fa-fw" />
          <span class="ms-1"> {{ item.text }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
