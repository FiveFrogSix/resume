<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar as fasStar, faCheck } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { Tooltip } from "bootstrap"
import HeadingTitle from "../assets/HeadingTitle.vue"
library.add(faStar, fasStar, faCheck)
const { t } = useI18n()
const tooltipList = ref()
const scale_rank = ref("scale_rank")

onMounted(() => {
  initTooltip()
})

onBeforeUnmount(() => {
  removeTooltip()
})

const initTooltip = () => {
  tooltipList.value = [...scale_rank.value].map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl))
}

const removeTooltip = () => {
  for (const element of tooltipList.value) {
    element.dispose()
  }
}
const skill_list = ref([
  { title: "HTML", level: 4 },
  { title: "Css", level: 4 },
  { title: "Sass & Scss", level: 3 },
  { title: "Css framework & other", level: 4 },
  { title: "Javascript", level: 4 },
  { title: "Library Javascript", level: 3 },
  { title: "Vuejs", level: 4 },
  { title: "Nuxtjs", level: 3 },
  { title: "PHP", level: 3 },
  { title: "Laravel", level: 2 },
  { title: "Golang (GIN)", level: 2 },
  { title: "MySQL", level: 3 },
  { title: "Typescript", level: 0 },
  { title: "Nodejs", level: 0 }
])
const other_list = ref([
  "Responsive",
  "Dark theme",
  "Multilanguage",
  "Version Control/Git",
  "Chat-gpt or other ai chat",
  "Read document",
  "Componnet",
  "Node package manager"
])

const scaleText = (level: number) => {
  let text = "Poor"
  if (level === 5) text = "Excellent"
  else if (level === 4) text = "Very good"
  else if (level === 3) text = "Good"
  else if (level === 2) text = "Fair"
  return text
}
</script>
<template>
  <div class="container pt-5 d-flex flex-column gap-3">
    <hr />
    <div class="w-100">
      <heading-title>{{ t("about_title.skill") }}</heading-title>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <template v-for="(item, index) in skill_list" :key="index">
        <div class="col">
          <div class="row g-0">
            <div class="col">{{ item.title }}</div>
            <div class="col">
              <div v-if="item.level === 0">
                <span class="badge rounded-pill text-bg-warning text-dark fw-400">{{ t("learning") }}</span>
              </div>
              <div v-else class="d-flex">
                <template v-for="star in 5" :key="star">
                  <div
                    ref="scale_rank"
                    class="text-warning scale-star"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    :data-bs-title="scaleText(star)"
                  >
                    <font-awesome-icon v-if="item.level < star" icon="fa-regular fa-star" />
                    <font-awesome-icon v-else icon="fa-solid fa-star" />
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="w-100">
      <heading-title>{{ t("about_title.skill_other") }}</heading-title>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <template v-for="(item, index) in other_list" :key="index">
        <div class="col">
          <font-awesome-icon icon="fa-solid fa-check" class="text-success me-1" />
          {{ item }}
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scale-star {
  scale: 1;
  transition: scale 0.2s;
  &:hover {
    scale: 1.2;
  }
}
</style>
