<script setup lang="ts">
import ContactMap from "@/components/contact/ContactMap.vue"
import ContactForm from "@/components/contact/ContactForm.vue"
</script>
<template>
  <div class="box-custom align-content-center pt-5 p-md-3">
    <div class="row row-cols-1 row-cols-md-2 g-3 g-md-0 align-items-center">
      <div class="col">
        <ContactForm />
      </div>
      <div class="col">
        <ContactMap />
      </div>
    </div>
  </div>
</template>
