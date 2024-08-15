<script setup lang="ts">
import { useI18n } from "vue-i18n"
import HeadingTitle from "../assets/HeadingTitle.vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCircle, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import TimelineBox from "@/components/timeline/TimelineBox.vue"
import TimelineCard from "@/components/timeline/TimelineCard.vue"
import { TimelineEducate } from "@/mockup/data"
const { t } = useI18n()
library.add(faCircle, faAngleDown, faAngleUp)
</script>

<template>
  <div class="container d-flex flex-column gap-5">
    <heading-title>
      {{ t("about_title.education") }}
    </heading-title>
    <timeline-box>
      <template v-for="item in TimelineEducate" :key="item">
        <TimelineCard v-bind="item" />
      </template>
    </timeline-box>
  </div>
</template>
