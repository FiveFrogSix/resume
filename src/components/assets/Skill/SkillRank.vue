<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import { Tooltip } from "bootstrap"

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
              :data-bs-title="scaleText(star)"
            >
              <font-awesome-icon v-if="level < star" icon="fa-regular fa-star" />
              <font-awesome-icon v-else icon="fa-solid fa-star" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
