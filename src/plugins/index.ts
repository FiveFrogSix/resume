import type { App } from "vue"
import { createI18n } from "vue-i18n"
import { createPinia } from "pinia"
import router from "@/router"
import optionsI18nPlugin from "@/plugins/i18n/options"
import VueSweetalert2 from "vue-sweetalert2"
import "@/plugins/swal/scss/swal.plugin.scss"
import SwalOptions from "@/plugins/swal/options"
const swalOptions = SwalOptions()
const i18n = createI18n(optionsI18nPlugin)
export function registerPlugins(app: App<Element>) {
  app.use(createPinia())
  app.use(i18n)
  app.use(router)
  app.use(VueSweetalert2, swalOptions)
}
