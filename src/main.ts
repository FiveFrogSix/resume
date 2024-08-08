import App from "@/App.vue"
import { createApp } from "vue"
import { registerPlugins } from "./plugins"
import { registerComponents } from "./components"
import "@scss/bootstrap-custom.scss"
import "@scss/style.scss"
import "bootstrap"
import "@/plugins/swal/scss/swal.plugin.scss"
const app = createApp(App)
registerPlugins(app)
registerComponents(app)
app.mount("#app")
