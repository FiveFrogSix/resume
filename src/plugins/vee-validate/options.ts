import { useI18n } from "vue-i18n"
import * as yup from "yup"

const setting = () => {
  const { t } = useI18n()

  const config = {
    fullname: yup.string().required(t("validate.fullname"))
  }

  const options = {
    validationSchema: yup.object(config)
  }
  return options
}

export default setting
