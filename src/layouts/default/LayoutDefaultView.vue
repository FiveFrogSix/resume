<script lang="ts" setup>
import { RouterView } from "vue-router"
</script>
<template>
  <div class="pb-5">
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>
