import { ref } from "vue"
import { defineStore } from "pinia"
import { useI18n } from "vue-i18n"

export const useExperienceStore = defineStore("experience", () => {
  const { t } = useI18n()

  const TimelineExp = ref([
    {
      start_date: "2022-03-15",
      end_date: null,
      end_date_type: "exp",
      sub_date_text: "Full Stack Developer",
      title: t("experience.go.name"),
      sub_title: "",
      detail: {
        title: t("experience.go.detail"),
        list: [
          {
            title: t("experience.go.list1"),
            list: [t("experience.go.list1_1"), t("experience.go.list1_2")]
          },
          {
            title: t("experience.go.list2"),
            list: [t("experience.go.list2_1")]
          },
          {
            title: t("experience.go.list3"),
            list: [t("experience.go.list3_1")]
          }
        ]
      }
    },
    {
      start_date: "2023-01-01",
      end_date: "2024-12-01",
      end_date_type: "",
      sub_date_text: "Full Stack Developer",
      title: t("experience.freelance.name"),
      sub_title: "",
      detail: {
        title: "",
        list: [
          {
            title: t("experience.freelance.list1"),
            list: [
              t("experience.freelance.list1_1"),
              t("experience.freelance.list1_2"),
              t("experience.freelance.list1_3"),
              t("experience.freelance.list1_4"),
              t("experience.freelance.list1_5"),
              t("experience.freelance.list1_6"),
              t("experience.freelance.list1_7")
            ]
          },
          {
            title: t("experience.freelance.list2"),
            list: [t("experience.freelance.list2_1")]
          },
          {
            title: t("experience.freelance.list3"),
            list: [t("experience.freelance.list3_1")]
          },
          {
            title: t("experience.freelance.list4"),
            list: [
              t("experience.freelance.list4_1"),
              t("experience.freelance.list4_2"),
              t("experience.freelance.list4_3"),
              t("experience.freelance.list4_4")
            ]
          },
          {
            title: t("experience.freelance.list5"),
            list: [t("experience.freelance.list5_1"), t("experience.freelance.list5_2")]
          }
        ]
      }
    },
    {
      start_date: "2020-10-01",
      end_date: "2021-01-01",
      end_date_type: "",
      sub_date_text: "Programmer",
      title: t("experience.bbp.name"),
      sub_title: "",
      detail: {
        title: "",
        list: [
          {
            title: t("experience.bbp.list1"),
            list: [
              t("experience.bbp.list1_1"),
              t("experience.bbp.list1_2"),
              t("experience.bbp.list1_3"),
              t("experience.bbp.list1_4"),
              t("experience.bbp.list1_5")
            ]
          },
          {
            title: t("experience.bbp.list2"),
            list: []
          },
          {
            title: t("experience.bbp.list3"),
            list: []
          },
          {
            title: t("experience.bbp.list4"),
            list: [
              t("experience.bbp.list4_1"),
              t("experience.bbp.list4_2"),
              t("experience.bbp.list4_3"),
              t("experience.bbp.list4_4"),
              t("experience.bbp.list4_5")
            ]
          }
        ]
      }
    }
  ])

  const TimelineEducate = ref([
    {
      start_date: "2022-03-15",
      end_date: "2022-03-15",
      end_date_type: "educate",
      sub_date_text: "",
      title: `${t("education.be_degree")} ${t("education.be_degree_branch")}`,
      sub_title: t("education.be_degree_place"),
      detail: {
        title: "",
        list: []
      }
    },
    {
      start_date: "2023-01-01",
      end_date: "2024-01-01",
      end_date_type: "educate",
      sub_date_text: "",
      title: `${t("education.hi_vocat")} ${t("education.hi_vocat_brach")}`,
      sub_title: t("education.hi_vocat_place"),
      detail: {
        title: "",
        list: []
      }
    }
  ])

  return { TimelineExp, TimelineEducate }
})
