<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { t } = useI18n()

defineProps({
  company: {
    type: String,
    default: ""
  },
  position: {
    type: String,
    default: ""
  },
  detail: {
    type: String,
    default: ""
  },
  tools: {
    type: String,
    default: ""
  }
})
</script>
<template>
  <div>
    <p class="text-heading">{{ position }}, {{ company }}</p>
    <p class="text-detail f-sarabun ">{{ detail }}</p>
    <p class="text-tool">
      <span class="text-tool-sub">{{ t("tool") }}</span>: {{ tools }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
.text-heading {
  font-size: 16px;
  font-weight: 500;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.text-detail {
  text-indent: 30px;
}
.text-tool-sub{
    font-weight: 500;
}
</style>
