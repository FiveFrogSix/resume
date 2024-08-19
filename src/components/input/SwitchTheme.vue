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
  <div class="form-switch my-auto">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      v-model="color"
      true-value="dark"
      false-value="light"
      @change="changeColorMode"
    />
  </div>
</template>

<style lang="scss" scoped>
.form-switch {
  padding-left: 0px;
  height: 21px;
  width: 21px;
  .form-check-input {
    border: none;
    margin-top: 0px;
    margin-left: auto;
    height: 21px;
    width: 21px;
    background-image: url("@/assets/icon/sunny.png");
    &:checked {
      background-image: url("@/assets/icon/night.png");
    }
    &:focus {
      box-shadow: none;
    }
  }
}
</style>
