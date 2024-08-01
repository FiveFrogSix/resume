<script setup lang="ts">
const props = defineProps({
  attr: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>
<template>
  <div>
    <a v-bind="props.attr" target="_blank" class="btn link-social link-light p-0">
      <slot></slot>
    </a>
  </div>
</template>
<style lang="scss" scoped>
.link-social {
  scale: 1;
  transition: scale 0.25s ease;
  &:hover {
    scale: 1.6;
  }
}
</style>
