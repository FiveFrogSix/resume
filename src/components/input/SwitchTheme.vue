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
  <div class="form-switch ">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      v-model="color"
      true-value="dark"
      no-value="light"
      @change="changeColorMode"
    />
  </div>
</template>

<style lang="scss" scoped>
.form-switch {
  height: 50px;
  .form-check-input {
    margin-top: 0px;
    height: 50px;
    width: 50px;
    background-image: url("@/assets/icon/sunny.png");
    &:checked {
      background-image: url("@/assets/icon/night.png");
    }
    &:focus{
      box-shadow: none;
    }
  }
}
</style>
