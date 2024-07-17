import { type I18nOptions } from "vue-i18n"
import enEN from "./locales/en-EN.json"
import thTH from "./locales/th-TH.json"

const options: I18nOptions = {
  legacy: false,
  locale: "th-TH",
  fallbackLocale: "en-US",
  messages: {
    "th-TH": thTH,
    "en-US": enEN
  }
}
export default options
