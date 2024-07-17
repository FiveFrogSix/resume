<script lang="ts" setup>
import SwitchLanguage from "@/components/input/SwitchLanguage.vue"
import SwitchTheme from "@/components/input/SwitchTheme.vue"
</script>
<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="d-flex ms-auto">
          <div>
            <SwitchLanguage />
          </div>
          <div class="my-auto">
            <SwitchTheme />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
