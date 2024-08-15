<script setup lang="ts">
import { onBeforeMount, reactive, ref } from "vue"
import { useI18n } from "vue-i18n"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar as fasStar, faCheck } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import HeadingTitle from "../assets/HeadingTitle.vue"
import SkillLabel from "../assets/Skill/SkillLabel.vue"
import SkillRank from "../assets/Skill/SkillRank.vue"
import type { SkillRank as TypeSkillRank } from "@/types/array"
library.add(faStar, fasStar, faCheck)

const { t } = useI18n()
const skill_list = reactive([
  { title: "HTML", level: 4, type: "front" },
  { title: "Css", level: 4, type: "front" },
  { title: "Sass & Scss", level: 3, type: "front" },
  { title: "Css framework & other", level: 4, type: "front" },
  { title: "Javascript", level: 4, type: "front" },
  { title: "Library Javascript", level: 3, type: "front" },
  { title: "Vuejs", level: 4, type: "front" },
  { title: "Nuxtjs", level: 3, type: "front" },
  { title: "PHP", level: 3, type: "back" },
  { title: "Laravel", level: 2, type: "back" },
  { title: "Golang (GIN)", level: 2, type: "back" },
  { title: "MySQL", level: 3, type: "back" },
  { title: "Typescript", level: 0, type: "other" },
  { title: "Nodejs", level: 0, type: "other" }
])

const skill_front = ref<TypeSkillRank[]>([]);
const skill_back = ref<TypeSkillRank[]>([]);
const skill_other = ref<TypeSkillRank[]>([]);

const other_list = ref([
  "Responsive",
  "Dark theme",
  "Multilanguage",
  "Version Control/Git",
  "Chat-gpt or other ai chat",
  "Read document",
  "Componnet",
  "Node package manager",
  "Like good practice",
])

onBeforeMount(() => {
  filterRank()
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
</script>
<template>
  <div class="container pt-5 px-4 d-flex flex-column gap-5">
    <div class="w-100">
      <heading-title>{{ t("about_title.skill") }}</heading-title>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <skill-label> Front End </skill-label>
      <template v-for="(front, index) in skill_front" :key="index">
        <SkillRank v-bind="front" />
      </template>
      <skill-label> Back End </skill-label>
      <template v-for="(back, index) in skill_back" :key="index">
        <SkillRank v-bind="back" />
      </template>
      <skill-label> Other </skill-label>
      <template v-for="(other, index) in skill_other" :key="index">
        <SkillRank v-bind="other" />
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
