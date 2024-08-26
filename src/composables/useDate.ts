import { intervalToDuration, format } from "date-fns"
import { th, enUS } from "date-fns/locale"
import { useI18n } from "vue-i18n"

const DurationDate = (start_date: string = "", end_date: string = "") => {
  let end_date_default = new Date()
  if (end_date) end_date_default = new Date(end_date)
  const options = {
    start: new Date(start_date),
    end: end_date_default
  }
  const result = intervalToDuration(options)
  return result
}

const FormatDate = (input_date: string = "") => {
  const { locale } = useI18n()
  let lang = enUS

  if (locale.value === "th-TH") {
    lang = th
  }

  let date = new Date()
  if (input_date) date = new Date(input_date)
  return {
    "dd/MM/yyyy": format(date, "dd/MM/yyyy", { locale: lang }),
    ddMMMyyyy: format(date, "dd MMM yyyy", { locale: lang })
  }
}

export { DurationDate, FormatDate }
