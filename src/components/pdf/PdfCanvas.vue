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
      <ul class="list row g-0 row-cols-3">
        <template v-for="(item, index) in highlight_lsit" :key="index">
          <li class="col">{{ item }}</li>
        </template>
      </ul>
    </div>
    <!-- Skill -->
    <div class="d-flex flex-column gap-2">
      <p class="h-custom">{{ t("about_title.skill") }}</p>
      <div class="d-flex flex-wrap gap-2 f-sarabun">
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
      <p class="text-sub f-sarabun">* {{ t("lib_tip") }}</p>
    </div>
    <!-- experience -->
    <div>
      <p class="h-custom">{{ t("about_title.experience") }}</p>
      <!-- GO -->
      <PdfCareer
        position="Fullstack Developer"
        :company="t('experience.go.name')"
        :detail="t('experience.go.detail_short')"
        tools="HTML, CSS, Sass, PHP, Javascript, jQuery, Bootstrap, Vue, Golang (GIN), GIT"
      />
      <PdfCareer
        position="Fullstack Developer"
        :company="t('experience.freelance.name')"
        :detail="t('experience.freelance.detail_short')"
        tools="HTML, CSS, Sass, PHP, Lumen, Javascript, Vue, Bootstrap, Nuxt, Ubuntu, Golang (GIN), GIT"
      />
      <PdfCareer
        position="Programmer"
        :company="t('experience.bbp.name')"
        :detail="t('experience.bbp.detail_short')"
        tools="HTML, CSS, PHP, jQuery, Bootstrap, Codeigniter 3, Ubuntu,"
      />
      <!-- Freelance -->
      <!-- Bic Ben -->
    </div>
    <!-- education -->
    <div>
      <p class="h-custom">{{ t("about_title.education") }}</p>
      <div class="f-sarabun" v-for="(educate, index) in TimelineEducate" :key="index">
        <span class="fw-600">{{ educate.title }}, </span>
        <span> {{ educate.sub_title }}</span>
      </div>
    </div>
    <div class="col-5 text-center mx-auto mt-3">
      <img src="@/assets/imgs/qrcode_resume.png" class="img-fluid" style="width: 40%" />
      <p>Website Resume Tools: Vue3, Vite, typescript, Sass, Pinia</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
p {
  margin-bottom: 0px;
}
.text-format {
  font-size: 15px;
  line-height: 28px;
}

.h-custom {
  font-size: 1.4em;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
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
.text-sub {
  font-size: 14px;
}
.list {
  list-style-position: inside;
  padding-left: 0rem;
}
</style>
