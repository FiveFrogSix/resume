<script setup lang="ts">
import ContactMap from "@/components/contact/ContactMap.vue"
import ContactForm from "@/components/contact/ContactForm.vue"
</script>
<template>
  <div class="box-custom align-content-center">
    <div class="row g-0 align-items-center">
      <div class="col">
        <ContactForm />
      </div>
      <div class="col">
        <ContactMap />
      </div>
    </div>
  </div>
</template>

