<script lang="ts" setup>
import { onBeforeMount, ref } from "vue"
import { useI18n } from "vue-i18n"
import { useNavigatorLanguage } from "@vueuse/core"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons"

defineProps({
  dropMenuClass: {
    default: "dropdown-menu-start",
    type: String
  }
})
library.add(faEarthAsia)

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
const changeLang = (e: Event) => {
  const elem = e.target as HTMLButtonElement
  lang.value = elem.value
  localStorage.setItem("_lang", lang.value)
  window.location.reload()
}
</script>

<template>
  <div class="dropdown">
    <button class="btn p-0 fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <font-awesome-icon icon="fa-solid fa-earth-asia" />
    </button>
    <ul class="dropdown-menu dropdown-menu-custom" :class="dropMenuClass">
      <li>
        <button
          value="th-TH"
          class="dropdown-item"
          :class="lang === 'th-TH' ? `active` : ``"
          @click="changeLang"
        >
          {{ $t("th_lang") }}
        </button>
      </li>
      <li>
        <button
          value="en-US"
          class="dropdown-item mt-1"
          :class="lang === 'en-US' ? `active` : ``"
          @click="changeLang"
        >
          {{ $t("en_lang") }}
        </button>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.dropdown-menu-custom {
  padding: 0.5rem;
}
.dropdown-item {
  border-radius: var(--bs-border-radius);
}
.btn:active,
.btn.show {
  border-color: transparent !important;
}
</style>
