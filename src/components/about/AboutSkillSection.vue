<script setup lang="ts">
import ScrollReveal from "scrollreveal"
import { onBeforeMount, onMounted, reactive, ref } from "vue"
import { useI18n } from "vue-i18n"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons"
import HeadingTitle from "../assets/HeadingTitle.vue"
import SkillLabel from "../assets/Skill/SkillLabel.vue"
import SkillRank from "../assets/Skill/SkillRank.vue"
import type { SkillRank as TypeSkillRank } from "@/types/array"
library.add(faCheck, fasStar)

const { t } = useI18n()
const skill_list = reactive([
  { title: "HTML", level: 4, type: "front" },
  { title: "Css", level: 4, type: "front" },
  { title: "Sass & Scss", level: 3, type: "front" },
  { title: "Css framework & other", level: 3, type: "front" },
  { title: "Javascript", level: 4, type: "front" },
  { title: "Library Javascript", level: 3, type: "front" },
  { title: "Vuejs", level: 2, type: "front" },
  { title: "Nuxtjs", level: 1, type: "front" },
  { title: "PHP", level: 3, type: "back" },
  { title: "Laravel", level: 1, type: "back" },
  { title: "Codeigniter 3", level: 1, type: "back" },
  { title: "Golang (GIN)", level: 1, type: "back" },
  { title: "MySQL", level: 4, type: "back" },
  { title: "Typescript", level: 0, type: "other" },
  { title: "Nodejs", level: 0, type: "other" },
  { title: "Unit test", level: 0, type: "other" }
])

const skill_front = ref<TypeSkillRank[]>([])
const skill_back = ref<TypeSkillRank[]>([])
const skill_other = ref<TypeSkillRank[]>([])

const skillReavel = ref()
const otherReavel = ref()
const frontLabelReveal = ref()
const backLabelReveal = ref()
const otherLabelReveal = ref()

const other_list = ref([
  "Responsive",
  "Dark theme",
  "Multilanguage",
  "Version Control/Git",
  "Chat-gpt or other ai chat",
  "Read document",
  "Componnet Style",
  "Node package",
  "Like good practice",
  "Problem Solving",
  "CSR/SSR",
  "Pagination/Infinity Scroll SSR",
  "Experience with web views (True Money)",
  "Experience in insurance industry",
  "Experience developing e-commerce"
])

onBeforeMount(() => {
  filterRank()
})
onMounted(() => {
  initReveal()
})

const filterRank = () => {
  skill_front.value = skill_list.filter((item) => {
    return item.type === "front"
  })
  skill_back.value = skill_list.filter((item) => {
    return item.type === "back"
  })
  skill_other.value = skill_list.filter((item) => {
    return item.type === "other"
  })
}

const initReveal = () => {
  const defaultOptions = { interval: 80, deley: 50, duration: 400 }
  ScrollReveal().reveal(frontLabelReveal.value)
  ScrollReveal().reveal(backLabelReveal.value)
  ScrollReveal().reveal(otherLabelReveal.value)
  ScrollReveal().reveal(skillReavel.value, defaultOptions)
  ScrollReveal().reveal(otherReavel.value, defaultOptions)
}
</script>
<template>
  <div class="container pt-5 px-4 d-flex flex-column gap-5">
    <div>
      <heading-title>{{ t("about_title.skill") }}</heading-title>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div class="w-100 text-center text-warning">
        <font-awesome-icon icon="fa-solid fa-star" />
        <span class="text-body"> = 1 {{ t("year_unit") }}</span>
      </div>
      <div class="w-100" ref="frontLabelReveal">
        <skill-label> Front End </skill-label>
      </div>
      <template v-for="(front, index) in skill_front" :key="index">
        <div ref="skillReavel">
          <SkillRank v-bind="front" />
        </div>
      </template>
      <div class="w-100" ref="backLabelReveal">
        <skill-label> Back End </skill-label>
      </div>
      <template v-for="(back, index) in skill_back" :key="index">
        <div ref="skillReavel">
          <SkillRank v-bind="back" />
        </div>
      </template>
      <div class="w-100" ref="otherLabelReveal">
        <skill-label> Other </skill-label>
      </div>
      <template v-for="(other, index) in skill_other" :key="index">
        <div ref="skillReavel">
          <SkillRank v-bind="other" />
        </div>
      </template>
    </div>

    <div class="w-100">
      <heading-title>{{ t("about_title.skill_other") }}</heading-title>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <template v-for="(item, index) in other_list" :key="index">
        <div ref="otherReavel" class="col">
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
