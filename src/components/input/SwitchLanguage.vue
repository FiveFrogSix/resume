<script lang="ts" setup>
import { onBeforeMount, ref } from "vue"
import { useI18n } from "vue-i18n"
import { useNavigatorLanguage } from "@vueuse/core"

const { locale } = useI18n({ useScope: "global" })
const { language } = useNavigatorLanguage()
const lang = ref("th-TH")

onBeforeMount(() => {
  detectLang()
})

const detectLang = () => {
  const local_lang: string | null = localStorage.getItem("_lang")
  const browser = language.value
  if (local_lang) {
    locale.value = local_lang
  } else if (browser) {
    locale.value = browser
  }
  lang.value = locale.value
}
const changeLang = () => {
  locale.value = lang.value
  localStorage.setItem("_lang", lang.value)
}
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
    <input
      value="th-TH"
      type="radio"
      class="btn-check"
      name="lang"
      v-model="lang"
      id="th_lang"
      autocomplete="off"
      @change="changeLang"
    />
    <label class="btn btn-outline-primary btn-sm" for="th_lang">TH</label>
    <input
      value="en-US"
      type="radio"
      class="btn-check"
      name="lang"
      v-model="lang"
      id="en_lang"
      autocomplete="off"
      @change="changeLang"
    />
    <label class="btn btn-outline-primary btn-sm" for="en_lang">EN</label>
  </div>
</template>
