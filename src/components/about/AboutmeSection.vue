<script lang="ts" setup>
import { ref } from "vue"
import AboutInformation from "@/components/about/AboutInformation.vue"
import AboutContact from "@/components/about/AboutContact.vue"
import AboutProfile from "@/components/about/AboutProfile.vue"

const contact_lsit = ref([
  { title: "Phone", contact: "0802399635", type: "phone" },
  { title: "Email", contact: "tirawat.saijai@gmail.com", type: "email" },
  { title: "Website", contact: "fivefrogsix.com", type: "link" }
])
</script>
<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-0 gap-4 gap-md-0 box-custom px-2 px-lg-0">
      <div class="col my-auto">
        <AboutInformation />
        <hr />
        <div class="row row-cols-1 row-cols-lg-3">
          <div class="col" v-for="(item, index) in contact_lsit" :key="index">
            <AboutContact :title="item.title" :type="item.type" :value="item.contact" />
          </div>
        </div>
      </div>
      <div class="col my-auto">
        <AboutProfile />
      </div>
    </div>
  </div>
</template>
