import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import { createPinia } from "pinia"
import App from "@/App.vue"
import router from "@/router"
import optionsI18nPlugin from "@/plugins/i18n/options"
import "@scss/bootstrap-custom.scss"
import "bootstrap"
// Font Awsome
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fas)

const i18n = createI18n(optionsI18nPlugin)
const app = createApp(App)
app.use(createPinia())
app.use(i18n)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app")
