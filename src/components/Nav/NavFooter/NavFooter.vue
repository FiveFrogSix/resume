<script setup lang="ts">
import NavFooterBar from "./NavFooterBar.vue"
import NavFooterItem from "./NavFooterItem.vue"

const socials = [
  {
    attr: {
      href: "https://github.com/FiveFrogSix",
      title: "github"
    },
    icon: "fa-brands fa-github"
  },
  {
    attr: {
      href: "https://line.me/ti/p/evASws_8Ei",
      title: "line"
    },
    icon: "fa-brands fa-line"
  },
  {
    attr: {
      href: "https://www.facebook.com/beamingz",
      title: "facebook"
    },
    icon: "fa-brands fa-facebook"
  }
]
</script>
<template>
  <div class="position-fixed bottom-0 w-100 overflow-hidden mb-1 ms-1 ms-md-0">
    <nav-footer-bar>
      <template v-for="(item, index) in socials" :key="index">
        <nav-footer-item :attr="item.attr">
          <font-awesome-icon :icon="item.icon" />
        </nav-footer-item>
      </template>
    </nav-footer-bar>
  </div>
</template>
