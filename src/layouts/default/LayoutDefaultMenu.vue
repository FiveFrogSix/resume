<script lang="ts" setup>
import type { Menu } from "@/types/menu"
import { computed, onBeforeMount, ref, watch } from "vue"
import { RouterLink } from "vue-router"
import { useI18n } from "vue-i18n"
const menu_list = ref<Menu[]>([])
const { t, locale } = useI18n()

onBeforeMount(() => {
  setMenuList()
})

watch(locale, () => {
  setMenuList()
})

const getMenuList = computed(() => {
  return menu_list.value
})

const setMenuList = () => {
  menu_list.value = [
    {
      route: {
        to: { name: "Home" },
        class: "btn btn-primary btn-menu btn-sm",
        activeClass: "btn-menu-active"
      },
      text: t("home"),
      faIcon: {
        icon: "fa-solid fa-house"
      }
    },
    {
      route: {
        to: { name: "About" },
        class: "btn btn-primary btn-menu btn-sm",
        activeClass: "btn-menu-active"
      },
      text: t("about"),
      faIcon: {
        icon: "fa-solid fa-user"
      }
    },
    {
      route: {
        to: { name: "Resume" },
        class: "btn btn-primary btn-menu btn-sm",
        activeClass: "btn-menu-active"
      },
      text: t("resume"),
      faIcon: {
        icon: "fa-solid fa-file"
      }
    },
    {
      route: {
        to: { name: "Contact" },
        class: "btn btn-primary btn-menu btn-sm",
        activeClass: "btn-menu-active"
      },
      text: t("contact"),
      faIcon: {
        icon: "fa-solid fa-envelope"
      }
    }
  ]
}
</script>
<template>
  <div class="position-fixed top-50 end-0 translate-middle-y">
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
