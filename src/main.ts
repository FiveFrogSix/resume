import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import { createPinia } from "pinia"
import App from "@/App.vue"
import router from "@/router"

import optionsI18nPlugin from "@/plugins/i18n/options"
import "@scss/bootstrap-custom.scss"
import "@scss/style.scss"
import "bootstrap"

import VueSweetalert2 from "vue-sweetalert2"
import "@/plugins/swal/scss/swal.plugin.scss"
import SwalOptions from "@/plugins/swal/options"

// Font Awsome
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, far, fab)

const swalOptions = SwalOptions()
const i18n = createI18n(optionsI18nPlugin)
const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(VueSweetalert2, swalOptions)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app")

window.Swal = app.config.globalProperties.$swal
