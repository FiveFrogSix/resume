import type { App } from "vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
export function registerComponents(app: App<Element>) {
  app.component("font-awesome-icon", FontAwesomeIcon)
}
