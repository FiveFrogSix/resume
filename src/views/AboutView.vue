<script lang="ts" setup>
import ScrollReveal from "scrollreveal"
import AboutMeSection from "@/components/about/AboutMeSection.vue"
import AboutSkillSection from "@/components/about/AboutSkillSection.vue"
import AboutExperience from "@/components/about/AboutExperience.vue"
import AboutEducation from "@/components/about/AboutEducation.vue"
import { onBeforeUnmount } from "vue"
onBeforeUnmount(() => {
  ScrollReveal().destroy()
})
</script>
<template>
  <div class="d-flex flex-column gap-5">
    <AboutMeSection />
    <AboutSkillSection />
    <AboutExperience />
    <AboutEducation />
  </div>
</template>
