<script lang="ts" setup>
import { useI18n } from "vue-i18n"
import { useInformationeStore } from "@/stores/information"
import { ref } from "vue"
import { useExperienceStore } from "@/stores/experience"

const { t } = useI18n()
const { Information, SkillList } = useInformationeStore()
const { TimelineEducate } = useExperienceStore()
const info = ref(Information)
</script>
<template>
  <div class="text-format">
    <div>
      <span class="h4">{{ t("personal.fullname") }} ({{ t("personal.nickname") }})</span>
    </div>
    <div>
      <span> Front End, Fullstack Web Developer</span>
    </div>
    <hr class="break" />
    <!-- Info -->
    <div>
      <div class="d-flex gap-3">
        <div>
          <span class="me-2 fs-6">{{ info.birthdate.label }}:</span>
          <span>{{ info.birthdate.value }}</span>
        </div>
        <div>
          <span class="me-2 fs-6">{{ info.exp_year.label }}:</span>
          <span>{{ info.exp_year.value }}</span>
        </div>
      </div>
      <div class="d-flex gap-3">
        <div>
          <span class="me-2 fs-6">{{ info.phone.label }}:</span>
          <span>{{ info.phone.value }}</span>
        </div>
        <div>
          <span class="me-2 fs-6">{{ info.email.label }}:</span>
          <span>{{ info.email.value }}</span>
        </div>
        <div>
          <span class="me-2 fs-6">Line:</span>
          <span>{{ info.line.value }}</span>
        </div>
      </div>
    </div>
    <!-- Intro -->
    <div class="f-sarabun">
      <p class="preset">{{ t("aboutme.present") }}</p>
    </div>
    <!-- Hightlight -->
    <div>
      <p class="h-custom">{{ t("about_title.skill_other") }}</p>
    </div>
    <!-- Skill -->
    <div class="d-flex flex-column gap-2">
      <p class="h-custom">{{ t("about_title.skill") }}</p>
      <div class="d-flex flex-wrap gap-1 f-sarabun">
        <div class="fs-6">Frontend:</div>
        <template v-for="(skill, index) in SkillList" :key="index">
          <div v-if="skill.type === 'front'">
            <span class="me-1">{{ skill.title }}</span>
            <span class="fw-500"> {{ skill.level }} {{ t("year_unit", skill.level) }} </span>
          </div>
        </template>
      </div>
      <div class="d-flex flex-wrap gap-2 f-sarabun">
        <div class="fs-6">Backend:</div>
        <template v-for="(skill, index) in SkillList" :key="index">
          <div v-if="skill.type === 'back'">
            <span class="me-1">{{ skill.title }}</span>
            <span class="fw-500"> {{ skill.level }} {{ t("year_unit", skill.level) }}</span>
          </div>
        </template>
      </div>
      <div class="d-flex flex-wrap gap-2 f-sarabun">
        <div class="fs-6">Other:</div>
        <template v-for="(skill, index) in SkillList" :key="index">
          <div v-if="skill.type === 'other'">
            <span class="me-1">{{ skill.title }}</span>
            <span class="fw-500"> {{ t("learning") }} </span>
          </div>
        </template>
      </div>
    </div>
    <!-- experience -->
    <div>
      <p class="h-custom">{{ t("about_title.experience") }}</p>
    </div>
    <!-- education -->
    <div>
      <p class="h-custom">{{ t("about_title.education") }}</p>
      <div class="f-sarabun" v-for="(educate, index) in TimelineEducate" :key="index">
        <span class="fw-600">{{ educate.title }}, </span>
        <span> {{ educate.sub_title }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
p {
  margin-bottom: 0px;
}
.text-format {
  font-size: 15px;
  line-height: 28px;
}
.f-sarabun {
  font-family: "Sarabun", sans-serif;
}
.h-custom {
  font-size: 1.2em;
  font-weight: 500;
}
.break {
  border: 1px solid;
  opacity: 1;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
.preset {
  text-indent: 30px;
  white-space: pretty;
}
</style>
