<script lang="ts" setup>
import { useI18n } from "vue-i18n"
const { t } = useI18n()
</script>
<template>
  <div class="position-fixed top-50 start-50 translate-middle">
    <h1>{{ t("personal.fullname") }} ({{ t("personal.nickname") }})</h1>
    <h3> Fullstack Developer </h3>
  </div>
</template>
