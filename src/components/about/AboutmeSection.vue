<script lang="ts" setup>
import ScrollReveal from "scrollreveal"
import { onMounted, ref } from "vue"
import AboutInformation from "@/components/about/AboutInformation.vue"
import AboutProfile from "@/components/about/AboutProfile.vue"
import { useI18n } from "vue-i18n"
import AboutIPersonel from "@/components/about/AboutIPersonel.vue"

const { t } = useI18n()
const information = ref()
const contact = ref()

const info_list = ref([
  { title: "วันเกิด", contact: "22 Nov 1995", type: "date" },
  { title: "อายุ", contact: "29", type: "age" },
])

const contact_lsit = ref([
  { title: t("phone"), contact: "0802399635", type: "phone" },
  { title: t("email"), contact: "tirawat.saijai@gmail.com", type: "email" },
  { title: t("website"), contact: "fivefrogsix.com", type: "link" }
])

onMounted(() => {
  initScrollReveal()
})

const initScrollReveal = () => {
  ScrollReveal().reveal(information.value, { duration: 400 })
  ScrollReveal().reveal(contact.value, { interval: 80, duration: 400 })
}
</script>
<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-0 gap-4 gap-md-0 px-2 px-lg-0">
      <div class="col my-auto">
        <div ref="information">
          <AboutInformation />
        </div>
        <hr />
        <div class="row row-cols-1 row-cols-lg-3">
          <div class="col" v-for="(item, index) in info_list" :key="index">
            <div ref="contact">
              <AboutIPersonel :title="item.title" :type="item.type" :value="item.contact" />
            </div>
          </div>
        </div>
        <hr />
        <div class="row row-cols-1 row-cols-lg-3">
          <div class="col" v-for="(item, index) in contact_lsit" :key="index">
            <div ref="contact">
              <AboutIPersonel :title="item.title" :type="item.type" :value="item.contact" />
            </div>
          </div>
        </div>
      </div>
      <div class="col my-auto">
        <AboutProfile />
      </div>
    </div>
  </div>
</template>
