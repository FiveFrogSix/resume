<script setup lang="ts">
import { FormatPhone } from "@/composables/useFormat"
import { computed } from "vue"

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

const getContact = computed(() => {
  const type = props.type
  const value = props.value
  let result = ""
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
