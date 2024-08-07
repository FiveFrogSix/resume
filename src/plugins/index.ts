import type { App } from "vue"
import { createI18n } from "vue-i18n"
import { createPinia } from "pinia"
import router from "@/router"
// style
import "@scss/bootstrap-custom.scss"
import "@scss/style.scss"
import "bootstrap"
// i18n
import optionsI18nPlugin from "@/plugins/i18n/options"
// Swal
import VueSweetalert2 from "vue-sweetalert2"
import "@/plugins/swal/scss/swal.plugin.scss"
import SwalOptions from "@/plugins/swal/options"
// Config
const swalOptions = SwalOptions()
const i18n = createI18n(optionsI18nPlugin)
export function registerPlugins(app: App<Element>) {
  app.use(createPinia()).use(i18n).use(router).use(VueSweetalert2, swalOptions)
}
