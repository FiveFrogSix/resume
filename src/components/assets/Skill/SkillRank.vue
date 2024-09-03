<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import { Tooltip } from "bootstrap"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar as fasStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"

library.add(faStar, fasStar, faStarHalfStroke)

const { t } = useI18n()
const scale_rank = ref<HTMLDivElement[] | null>(null)
const tooltipList = ref([]) as any

defineProps({
  title: {
    type: String
  },
  level: {
    type: Number,
    default: 0
  }
})

onMounted(() => {
  initTooltip()
})

onBeforeUnmount(() => {
  removeTooltip()
})

const initTooltip = () => {
  if (scale_rank.value) {
    tooltipList.value = [...scale_rank.value].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    )
  }
}

const removeTooltip = () => {
  if (tooltipList.value) {
    for (const element of tooltipList.value) {
      element.dispose()
    }
  }
}

const scaleText = (star: number, level: number): any => {
  let text: any = `${star} ${t("year_unit", star)}`

  if (star === level) {
    text = `${star} ${t("year_unit", star)}`
  } else if (level < 1) {
    text = t("lessoneyear")
  } else {
    text = null
  }

  return text
}
</script>
<template>
  <div class="col">
    <div class="row g-0">
      <div class="col">{{ title }}</div>
      <div class="col">
        <div v-if="level === 0">
          <span class="badge rounded-pill text-bg-warning text-dark fw-400">{{
            t("learning")
          }}</span>
        </div>
        <div v-else class="d-flex">
          <template v-for="star in 5" :key="star">
            <div
              ref="scale_rank"
              class="text-warning scale-star"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              :data-bs-title="scaleText(star, level)"
            >
              <font-awesome-icon v-if="level < 1 && star < 2" icon="fa-solid fa-star-half-stroke" />
              <font-awesome-icon v-else-if="level < star" icon="fa-regular fa-star" />
              <font-awesome-icon v-else icon="fa-solid fa-star" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
