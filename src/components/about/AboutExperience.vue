<script setup lang="ts">
import { useExperienceStore } from "@/stores/experience"
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

const experienceStore = useExperienceStore()
const timeline = ref()

const TimelineExp = experienceStore.TimelineExp

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
