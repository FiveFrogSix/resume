<script lang="ts" setup>
import ScrollReveal from "scrollreveal"
import { onMounted, ref } from "vue"
import AboutInformation from "@/components/about/AboutInformation.vue"
import AboutProfile from "@/components/about/AboutProfile.vue"
import { useI18n } from "vue-i18n"
import AboutPersonel from "@/components/about/AboutPersonel.vue"
import { useInformationeStore } from "@/stores/information"

const { t } = useI18n()
const informationStore = useInformationeStore()
const information = ref()
const contact = ref()
const info = ref(informationStore.Information)

const info_list = ref([
  {
    title: t("name"),
    contact: `${t("personal.fullname")} (${t("personal.nickname")})`,
    type: "text"
  },
  { title: t("birthdate"), contact: "1995-11-22", type: "date" },
  { title: t("ัexp_year"), contact: "2020-01-23", type: "fullage" }
])

const contact_lsit = ref([
  { title: info.value.phone.label, contact: info.value.phone.value, type: "phone" },
  { title: info.value.email.label, contact: info.value.email.value, type: "email" },
  { title: info.value.website.label, contact: "fivefrogsix.com", type: "link" }
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
              <AboutPersonel :title="item.title" :type="item.type" :value="item.contact" />
            </div>
          </div>
        </div>
        <hr />
        <div class="row row-cols-1 row-cols-lg-3">
          <div class="col" v-for="(item, index) in contact_lsit" :key="index">
            <div ref="contact">
              <AboutPersonel :title="item.title" :type="item.type" :value="item.contact" />
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
