<script setup lang="ts">
import ScrollReveal from "scrollreveal"
import { useI18n } from "vue-i18n"
import HeadingTitle from "../assets/HeadingTitle.vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCircle, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import TimelineBox from "@/components/timeline/TimelineBox.vue"
import TimelineCard from "@/components/timeline/TimelineCard.vue"
import { onMounted, ref } from "vue"
const { t } = useI18n()
library.add(faCircle, faAngleDown, faAngleUp)

const timeline = ref()

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

onMounted(() => {
  initReveal()
})

const initReveal = () => {
  const defaultOptions = { interval: 80, deley: 50, duration: 400 }
  ScrollReveal().reveal(timeline.value, defaultOptions)
}
</script>

<template>
  <div class="container d-flex flex-column gap-5 px-3">
    <heading-title>
      {{ t("about_title.experience") }}
    </heading-title>
    <timeline-box>
      <template v-for="item in TimelineExp" :key="item">
        <div ref="timeline">
          <TimelineCard v-bind="item" />
        </div>
      </template>
    </timeline-box>
  </div>
</template>
