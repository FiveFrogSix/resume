import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import { createPinia } from "pinia"
import App from "@/App.vue"
import router from "@/router"

import optionsI18nPlugin from "@/plugins/i18n/options"
import "@scss/bootstrap-custom.scss"
import "@scss/style.scss"
import "bootstrap"

// Swal
import VueSweetalert2 from "vue-sweetalert2"
import "@/plugins/swal/scss/swal.plugin.scss"
import SwalOptions from "@/plugins/swal/options"
// Font Awsome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
// Config
const swalOptions = SwalOptions()
const i18n = createI18n(optionsI18nPlugin)
const app = createApp(App)
// Use
app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(VueSweetalert2, swalOptions)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app")
