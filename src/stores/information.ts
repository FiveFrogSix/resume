import { ref, reactive } from "vue"
import { defineStore } from "pinia"
import { useI18n } from "vue-i18n"

export const useInformationeStore = defineStore("information", () => {
  const { t } = useI18n()
  const Information = ref({
    fullname: `${t("personal.fullname")} (${t("personal.nickname")})`,
    phone: {
      label: t("phone"),
      value: "0802399635"
    },
    email: {
      label: t("email"),
      value: "tirawat.saijai@gmail.com"
    },
    website: {
      label: t("website"),
      value: "resume.fivefrogsix.com"
    },
    line: {
      label: "Line",
      value: "0802399635"
    },
    birthdate: {
      label: t("birthdate"),
      value: "1995-11-22"
    },
    exp_year: {
      label: t("ัexp_year"),
      value: "2020-01-23"
    }
  })

  const SkillList = reactive([
    { title: "HTML", level: 5, type: "front" },
    { title: "Css", level: 5, type: "front" },
    { title: "Scss", level: 4, type: "front" },
    { title: "Css framework or lib", level: 4, type: "front" },
    { title: "Javascript", level: 5, type: "front" },
    { title: "Javascript Library", level: 4, type: "front" },
    { title: "Vuejs", level: 3.5, type: "front" },
    { title: "Nuxtjs", level: 2.5, type: "front" },
    { title: "PHP", level: 3, type: "back" },
    { title: "Laravel", level: 1, type: "back" },
    { title: "Codeigniter 3", level: 1, type: "back" },
    { title: "Golang (GIN)", level: 2, type: "back" },
    { title: "MsSQL", level: 1, type: "back" },
    { title: "MySQL", level: 4.5, type: "back" },
    { title: "Typescript", level: 1, type: "front" },
    { title: ".Net Core", level: 1, type: "back" },
    { title: "React", level: 1, type: "front" },
    { title: "Next", level: 0.5, type: "front" },
    { title: "Nodejs", level: 1, type: "back" },
  ])

  const HighlightList = ref([
    "Responsive",
    "Dark theme",
    "Multilanguage",
    "Version Control/Git",
    "Read document",
    "Componnet Style",
    "Node package",
    "Like good practice",
    "Problem Solving",
    "CSR/SSR",
    "Pagination/Infinity Scroll SSR",
    "Experience with web views (True Money)",
    "Experience in insurance industry",
    "Experience developing e-commerce",
    "Dependency injection",
    "Experience with email platform",
    "Experience with sms platform",
  ])

  return { Information, SkillList, HighlightList }
})
