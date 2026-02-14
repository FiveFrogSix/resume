<script lang="ts" setup>
import PdfCareer from "./PdfCareer.vue"
import { useI18n } from "vue-i18n"
import { useInformationeStore } from "@/stores/information"
import { ref } from "vue"
import { useExperienceStore } from "@/stores/experience"

const { t } = useI18n()
const { Information, SkillList, HighlightList } = useInformationeStore()
const { TimelineEducate } = useExperienceStore()
const info = ref(Information)

const highlight_lsit = ref([...HighlightList])
</script>
<template>
  <div class="text-format">
    <div class="header-format">
      <div>
        <span class="h4">{{ t("personal.fullname") }} ({{ t("personal.nickname") }})</span>
      </div>
      <div>
        <span> Fullstack Web Developer</span>
      </div>
    </div>
    <hr class="break" />
    <!-- Info -->
    <div class="info-content">
      <div class="d-flex gap-3">
        <div>
          <span class="me-2 fs-6">{{ info.birthdate.label }}:</span>
          <span>22/11/1995</span>
        </div>
        <div>
          <span class="me-2 fs-6">{{ info.phone.label }}:</span>
          <span>{{ info.phone.value }}</span>
        </div>
        <div>
          <span class="me-2 fs-6">{{ info.email.label }}:</span>
          <span>{{ info.email.value }}</span>
        </div>
      </div>
      <div class="d-flex gap-3">
        <div>
          <span class="me-2 fs-6">Line:</span>
          <span>{{ info.line.value }}</span>
        </div>
        <div>
          <span class="me-2 fs-6">Github:</span>
          <span>github.com/fivefrogsix</span>
        </div>
      </div>
    </div>
    <!-- Intro -->
    <div class="f-sarabun mt-2">
      <p class="preset">{{ t("aboutme.present") }}</p>
    </div>
    <!-- Hightlight -->
    <div>
      <p class="h-custom">{{ t("about_title.skill_other") }}</p>
      <ul class="list row g-0 row-cols-4">
        <template v-for="(item, index) in highlight_lsit" :key="index">
          <li class="col">{{ item }}</li>
        </template>
      </ul>
    </div>
    <!-- Skill -->
    <div class="d-flex flex-column gap-2">
      <p class="h-custom">{{ t("about_title.skill") }}</p>
      <div class="d-flex flex-wrap gap-1 f-sarabun skill-format">
        <div class="fs-6">Frontend:</div>
        <template v-for="(skill, index) in SkillList" :key="index">
          <div v-if="skill.type === 'front'">
            <span class="me-1">{{ skill.title }}:</span>
            <span class="fw-600 fs-6"> {{ skill.level }} {{ t("year_unit", skill.level) }} </span>
          </div>
        </template>
      </div>
      <div class="d-flex flex-wrap gap-1 f-sarabun skill-format">
        <div class="fs-6">Backend:</div>
        <template v-for="(skill, index) in SkillList" :key="index">
          <div v-if="skill.type === 'back'">
            <span class="me-1">{{ skill.title }}:</span>
            <span class="fw-600 fs-6"> {{ skill.level }} {{ t("year_unit", skill.level) }}</span>
          </div>
        </template>
      </div>
      <div
        v-if="SkillList.every((item) => item.type === 'other')"
        class="d-flex flex-wrap gap-1 f-sarabun skill-format"
      >
        <div class="fs-6">Other:</div>
        <template v-for="(skill, index) in SkillList" :key="index">
          <div v-if="skill.type === 'other'">
            <span class="me-1">{{ skill.title }}:</span>
            <span class="fw-600 fs-6"> {{ t("learning") }} </span>
          </div>
        </template>
      </div>
      <p class="text-sub f-sarabun">* {{ t("lib_tip") }}</p>
    </div>
    <!-- experience -->
    <div>
      <p class="h-custom">{{ t("about_title.experience") }}</p>
      <!-- Ants -->
      <PdfCareer
        position="Programmer"
        :company="t('experience.ants.name')"
        :detail="t('experience.ants.detail_short')"
        tools="Scss, Javascript, Bootstrap, Tailwind, React, Next, Golang (GIN), .Net Core, Azure, Jenkins, ArgoCd(Kubernetes), RabbitMq, Redis, MSSQL"
        :start="`${t('month.mar')} 2025`"
        :end="`${t('present')}`"
      />
      <!-- GO -->
      <PdfCareer
        position="Fullstack Developer"
        :company="t('experience.go.name')"
        :detail="t('experience.go.detail_short')"
        tools="HTML, CSS, Scss, PHP, Javascript, jQuery, Bootstrap, Vue, Golang (GIN), GIT"
        :start="`${t('month.mar')} 2022`"
        :end="`${t('month.mar')} 2025`"
      />
      <PdfCareer
        position="Fullstack Developer"
        :company="t('experience.freelance.name')"
        :detail="t('experience.freelance.detail_short')"
        tools="HTML, CSS, Scss, Tailwind, PHP, Lumen, Javascript, Typescript, Vue, Bootstrap, Nuxt, Ubuntu, Golang (GIN), GIT, Docker"
        :start="`${t('month.jan')} 2023`"
        :end="`${t('month.dec')} 2023`"
      />
      <PdfCareer
        position="Programmer"
        :company="t('experience.bbp.name')"
        tools="HTML, CSS, PHP, jQuery, Bootstrap, Codeigniter 3, Ubuntu"
        :start="`${t('month.oct')} 2020`"
        :end="`${t('month.dec')} 2021`"
      />
      <!-- Freelance -->
      <!-- Bic Ben -->
    </div>
    <!-- education -->
    <div class="education-format">
      <p class="h-custom">{{ t("about_title.education") }}</p>
      <div class="f-sarabun" v-for="(educate, index) in TimelineEducate" :key="index">
        <span class="fw-600">{{ educate.title }}, </span>
        <span> {{ educate.sub_title }}</span>
      </div>
    </div>
    <div class="row g-0">
      <div class="col text-end position-relative">
        <div class="position-profile avatar">
          <img src="@/assets/imgs/beam-face.png" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
p {
  margin-bottom: 0px;
}
.text-format {
  font-size: 14px;
  line-height: 28px;
}

.h-custom {
  font-size: 1.4em;
  font-weight: 500;
  margin-top: 0.2rem;
  margin-bottom: 0.25rem;
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
  line-height: 20px;
}
.text-sub {
  font-size: 14px;
}
.list {
  list-style-position: inside;
  padding-left: 0rem;
  line-height: 20px;
}
.position-profile {
  position: absolute;
  right: 10px;
  bottom: -5px;
}
.avatar {
  width: 100px;
}
.skill-format {
  line-height: 18px;
}
.education-format {
  line-height: 20px;
}
.info-content {
  line-height: 20px;
}
.header-format{
  line-height: 18px;
}
</style>
