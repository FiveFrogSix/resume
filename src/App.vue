<script lang="ts" setup>
import { ref } from "vue"
import { RouterView } from "vue-router"
const msg = ref<string>("hello world")
</script>
<template>
  <div>
    <button class="btn btn-danger">TEST</button>
    {{ msg }}
    <router-view></router-view>
  </div>
</template>
