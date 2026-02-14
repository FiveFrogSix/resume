<script setup lang="ts">
import SwitchLanguage from "@/components/input/SwitchLanguage.vue"
import PdfCanvas from "@/components/pdf/PdfCanvas.vue"
</script>
<template>
  <div class="lang"><SwitchLanguage /></div>
  <div class="a4">
    <PdfCanvas />
  </div>
</template>
<style lang="scss" scoped>
.a4 {
  border: 1px solid #000;
  width: 210mm;
  height: 297mm;
  padding: 1rem;
}
@media print {
  .lang {
    display: none;
  }
}
</style>
