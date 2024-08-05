import { useI18n } from "vue-i18n"
import { toTypedSchema } from "@vee-validate/yup"
import * as yup from "yup"

interface Setting {
  validationSchema: object
}

const setting = () => {
  const { t } = useI18n()

  const config = {
    fullname: yup.string().required(t("validate.fullname")),
    emailline: yup.string().required(t("validate.emailline")),
    detail: yup.string().required(t("validate.detail"))
  }

  const schema = toTypedSchema(yup.object().shape(config))

  const options = {
    validationSchema: schema
  } as Setting

  return options
}

export default setting
