<script setup lang="ts">
import { DurationDate, FormatDate } from "@/composables/useDate"
import { FormatPhone } from "@/composables/useFormat"
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const props = defineProps({
  title: {
    default: "",
    type: String
  },
  type: {
    default: "",
    type: String
  },
  value: {
    default: "",
    type: [String]
  }
})

const { t } = useI18n()

const getContact = computed(() => {
  const type = props.type
  const value = props.value
  let result = "" as any
  let target = ""
  let title = value
  if (type === "phone") {
    result = "tel:" + value
    title = FormatPhone(value)
  } else if (type === "email") {
    result = "mailto:" + value
  } else if (type === "link") {
    result = "https://" + value
    target = "_blank"
  } else if (type === "date") {
    const date = FormatDate(value)
    const { years } = DurationDate(value)
    result = null
    title = `${date["ddMMMyyyy"]} (${years})`
  } else if (type === "age") {
    const { years } = DurationDate(value)
    result = null
    title = String(years)
  } else if (type === "fullage") {
    const { years, months } = DurationDate(value)
    let y: number = years ? years : 0
    let m: number = months ? months : 0
    result = null
    title = `${years} ${t("year_unit", y)} ${months} ${t("month_unit", m)}`
  } else {
    result = null
    title = value
  }
  return { result, target, title }
})
</script>
<template>
  <div class="">
    <div class="fw-500">{{ title }}</div>
    <div class="fw-300">
      <a
        class="text-decoration-none text-body"
        :target="getContact.target"
        :href="getContact.result"
      >
        {{ getContact.title }}</a
      >
    </div>
  </div>
</template>
