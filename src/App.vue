<script lang="ts" setup>
import { ref } from "vue"
import { RouterView } from "vue-router"
const msg = ref<string>("hello world")
</script>
<template>
  {{ msg }}
  <router-view></router-view>
</template>
