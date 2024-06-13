<script setup>
import DefaultNav from './NavigatorLayout.vue'
import DefaultTop from './TopLayout.vue'
import DefaultView from './ViewLayout.vue'
import DefaultFooter from './FooterLayout.vue'
</script>
<template>
  <v-layout ref="app" class="rounded rounded-md">
    <default-nav />
    <default-top />
    <default-view />
    <default-footer />
  </v-layout>
</template>
