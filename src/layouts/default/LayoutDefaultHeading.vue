<script lang="ts" setup>
import SwitchLanguage from "@/components/input/SwitchLanguage.vue"
import SwitchTheme from "@/components/input/SwitchTheme.vue"
</script>
<template>
  <div>
    <nav class="navbar pt-3 pb-0 px-3">
      <div class="container-fluid px-0">
        <div>
          <SwitchTheme />
        </div>
        <div class="d-flex ms-auto">
          <div>
            <SwitchLanguage />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
