<script lang="ts" setup>
import { ColorMode } from "@/composables/useHelper"
import { onBeforeMount, ref } from "vue"

const color = ref("light")

onBeforeMount(() => {
  detectColorMode()
})

const detectColorMode = () => {
  const color_mode: string | null = localStorage.getItem("_color")
  if (color_mode) {
    color.value = color_mode
    ColorMode(color.value)
  }
}

const changeColorMode = () => {
  ColorMode(color.value)
}
</script>
<template>
  <div class="form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="ColorMode"
      v-model="color"
      true-value="dark"
      no-value="light"
      @change="changeColorMode"
    />
  </div>
</template>
