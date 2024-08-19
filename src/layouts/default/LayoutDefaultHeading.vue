<script lang="ts" setup>
import SwitchLanguage from "@/components/input/SwitchLanguage.vue"
import SwitchTheme from "@/components/input/SwitchTheme.vue"
</script>
<template>
  <div>
    <nav class="navbar pt-3 pb-0 ps-3 pe-1">
      <div class="container-fluid px-0">
        <div>
          <a href="/" class="link-underline link-underline-opacity-0">
            <h4 class="fw-bold">
              <span class="text-body">I</span> AM <span class="text-warning">BEAM</span>
            </h4>
          </a>
        </div>
        <div class="d-flex ms-auto">
          <SwitchLanguage />
          <SwitchTheme />
        </div>
      </div>
    </nav>
  </div>
</template>
