<script lang="ts" setup>
import type { Menu } from "@/types/menu"
import SwitchLanguage from "@/components/input/SwitchLanguage.vue"
import SwitchTheme from "@/components/input/SwitchTheme.vue"
import { computed, onBeforeMount, onBeforeUnmount, onMounted, ref, watch } from "vue"
import { RouterLink } from "vue-router"
import { useI18n } from "vue-i18n"
import IconHamBurger from "@/components/assets/IconHamBurger.vue"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faHouse, faUser, faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons"

library.add(faHouse, faUser, faFile, faEnvelope)

const menu_element = ref()
const menu_list = ref<Menu[]>([])
const { t, locale } = useI18n()

watch(locale, () => {
  setMenuList()
})

const getMenuList = computed(() => {
  return menu_list.value
})

onBeforeMount(() => {
  setMenuList()
})

onMounted(() => {
  menu_element.value = document.querySelector(".menu-sm") as HTMLElement
})

onBeforeUnmount(() => {
  menu_element.value.classList.remove("show")
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

const toggleMenu = (e: Event) => {
  const elem = e.currentTarget as HTMLElement
  const check = menu_element.value.classList.contains("show") as Boolean
  if (check) {
    menu_element.value.classList.remove("show")
    elem.classList.remove("toggle")
  } else {
    elem.classList.add("toggle")
    menu_element.value.classList.add("show")
  }
}

const toggleMenuSmall = () => {
  setTimeout(() => {
    const elem = document.querySelector("#hamburger") as HTMLElement
    const check = menu_element.value.classList.contains("show") as Boolean
    if (check) {
      menu_element.value.classList.remove("show")
      elem.classList.remove("toggle")
    } else {
      elem.classList.add("toggle")
      menu_element.value.classList.add("show")
    }
  }, 100)
}
</script>

<template>
  <!-- MD -->

  <!-- bg-body-tertiary -->
  <nav ref="navbar" class="navbar navbar-expand d-none d-md-block anime-fade z-3">
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto">
          <template v-for="(item, index) in getMenuList" :key="index">
            <li class="nav-item">
              <router-link
                :to="item.route.to"
                class="nav-link"
                activeClass="active"
                :title="item.text"
              >
                {{ item.text }}
              </router-link>
            </li>
          </template>
        </ul>
        <div>
          <div class="d-flex flex-row gap-1">
            <SwitchLanguage drop-menu-class="dropdown-menu-end" />
            <SwitchTheme />
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="position-fixed top-50 end-0 translate-middle-y d-none d-md-block anime-fade">
    <div class="d-flex flex-column gap-2 text-end right-menu">
      <div v-for="(item, index) in getMenuList" :key="index">
        <router-link v-bind="item.route" :title="item.text">
          <font-awesome-icon v-bind="item.faIcon" class="fa-fw" />
          <span class="ms-1"> {{ item.text }}</span>
        </router-link>
      </div>
    </div>
  </div>

  <!-- SM -->
  <div class="layer position-fixed top-0 start-0 translate-middle-50 d-block d-md-none anime-fade">
    <button @click="toggleMenu" id="hamburger" class="btn btn-hamburger">
      <IconHamBurger />
    </button>
  </div>
  <div
    class="menu-sm position-fixed top-0 start-0 d-flex d-md-none justify-content-center align-items-center"
  >
    <div class="w-50">
      <template v-for="(item, index) in getMenuList" :key="index">
        <div class="menu-box-item">
          <router-link
            :to="item.route.to"
            :title="item.text"
            @click="toggleMenuSmall"
            class="btn menu-item w-100"
            activeClass="menu-active"
          >
            <span class="menu-text"> {{ item.text }}</span>
            <hr />
          </router-link>
        </div>
      </template>
      <div class="d-flex flex-row justify-content-center gap-2">
        <SwitchLanguage />
        <SwitchTheme />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-hamburger {
  margin-top: 8px;
  border-radius: 30px;
  background-color: rgba(var(--bs-body-bg-rgb), 1);
}
// เมนูด้านขวาจอใหญ่
.right-menu {
  .btn-menu {
    border-radius: 20px 0px 0px 20px;
    transition:
      width 0.25s,
      scale 0.25s,
      text-align 0.25s;
    padding-left: 15px;
    width: 42px;
    text-align: left;
    text-wrap: nowrap;
    span {
      opacity: 0;
      transition: opacity 0.4s;
    }

    &.btn-menu-active {
      width: 105px;
      text-align: center;
      span {
        opacity: 1;
      }
    }
  }
}
.layer {
  z-index: 3001;
}
.menu-box-item {
  &:nth-child(odd) {
    hr {
      margin-right: auto !important;
    }
  }
  &:nth-child(even) {
    hr {
      margin-left: auto !important;
    }
  }
}
.menu-sm {
  z-index: 3000;
  opacity: 0;
  overflow: hidden;
  width: 0%;
  height: 0%;
  background-color: var(--bs-body-bg);
  transition:
    opacity 0.1s linear,
    width 2s,
    height 2s;
  &.show {
    opacity: 1;
    width: 100%;
    height: 100%;
    transition: opacity 0.2s linear;
  }
  .menu-item {
    text-align: center;
    .menu-text {
      transition: font-size 0.3s ease;
    }
    hr {
      opacity: 1;
      border-color: var(--bs-primary);
      width: 0%;
      border-width: 3px;
      margin: 0.4rem 0rem 0rem 0rem;
      transition: width 0.3s linear;
    }

    &.menu-active {
      .menu-text {
        font-weight: 500;
        font-size: 1.8rem;
      }
    }

    &:hover {
      .menu-text {
        font-size: 1.5rem;
        font-weight: 300;
      }
      hr {
        width: 100%;
      }
    }
  }
}

.btn:active,
.btn.show {
  border-color: transparent !important;
}
</style>
