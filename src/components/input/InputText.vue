<script setup lang="ts">
import { computed, onBeforeMount, ref, watch, type Ref } from "vue"

const model = defineModel()
const props = defineProps({
  id: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: "text"
  },
  validate: {
    type: String,
    default: ""
  },
  className: {
    type: String,
    default: ""
  }
})

const addClass = ref({}) as Ref

watch(
  () => props.validate,
  (newValue) => {
    addClass.value["border-danger"] = newValue !== ""
  }
)

const pushClass = computed(() => {
  return addClass.value
})

onBeforeMount(() => {
  addMoreClass()
})

const addMoreClass = () => {}
</script>
<template>
  <div>
    <input
      :type="type"
      class="form-control"
      :class="pushClass"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      v-model="model"
    />
    <p v-if="validate" class="font-validate">{{ validate }}</p>
  </div>
</template>
