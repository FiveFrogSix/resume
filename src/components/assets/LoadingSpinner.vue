<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    default: true
  }
})
</script>
<template>
  <div v-if="loading">
    <font-awesome-icon icon="fa-solid fa-spinner" class="fa-spin" />
  </div>
  <div v-else >
    <slot></slot>
  </div>
</template>
