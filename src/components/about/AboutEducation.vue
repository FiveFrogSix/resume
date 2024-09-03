<script setup lang="ts">
import { useI18n } from "vue-i18n"
import ScrollReveal from "scrollreveal"
import HeadingTitle from "../assets/HeadingTitle.vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCircle, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import TimelineBox from "@/components/timeline/TimelineBox.vue"
import TimelineCard from "@/components/timeline/TimelineCard.vue"
import { onMounted, ref } from "vue"
const { t } = useI18n()
library.add(faCircle, faAngleDown, faAngleUp)

const timeline = ref()
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
    sub_title:  t("education.hi_vocat_place"),
    detail: {
      title: "",
      list: []
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
  <div class="container d-flex flex-column gap-5">
    <heading-title>
      {{ t("about_title.education") }}
    </heading-title>
    <timeline-box>
      <template v-for="item in TimelineEducate" :key="item">
        <div ref="timeline">
          <TimelineCard v-bind="item" />
        </div>
      </template>
    </timeline-box>
  </div>
</template>
