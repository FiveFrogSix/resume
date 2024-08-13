<script lang="ts" setup>
import { useI18n } from "vue-i18n"
const { t } = useI18n()
</script>
<template>
  <div class="container-fluid">
    <div class="col-12 mx-auto d-flex flex-column gap-4">
      <h2 class="text-center">About me</h2>
      <div>
        {{ t("aboutme.present") }}
        <ul class="fw-300 mt-2">
          <li>{{ t("aboutme.list1") }}</li>
          <li>{{ t("aboutme.list2") }}</li>
          <li>{{ t("aboutme.list3") }}</li>
          <li>{{ t("aboutme.list4") }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
