<script setup lang="ts">
import { useI18n } from "vue-i18n"
import HeadingTitle from "../assets/HeadingTitle.vue"
const { t } = useI18n()
</script>

<template>
  <div class="container">
    <hr />
    <div>
        <heading-title>
            {{ t("about_title.experience") }}
        </heading-title>
    </div>
  </div>
</template>
