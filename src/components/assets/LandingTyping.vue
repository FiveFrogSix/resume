<script lang="ts" setup>
import Typewriter from "typewriter-effect/dist/core"
import { onBeforeUnmount, onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
const { t } = useI18n()
const fullname_typing = ref()

onMounted(() => {
  initTypewriter()
})

onBeforeUnmount(() => {
  fullname_typing.value.stop()
})

const initTypewriter = () => {
  fullname_typing.value = new Typewriter("#typewriter", {
    loop: true,
    cursorClassName: "typing-cursor"
  })
    .typeString("Front En")
    .pauseFor(100)
    .deleteAll()
    .typeString("Back End D")
    .pauseFor(100)
    .deleteAll()
    .typeString("Fullstca")
    .pauseFor(120)
    .deleteAll()
    .typeString("Full Stack Developer")
    .callFunction(() => {
      document.querySelector(".typing-cursor")?.classList.add("typing-cursor-wip")
    })
    .pauseFor(1500)
    .callFunction(() => {
      document.querySelector(".typing-cursor")?.classList.remove("typing-cursor-wip")
    })
    .typeString(`<br><span class="fs-6 fw-light">but i prefer front-end 💜</span>`)
    .callFunction(() => {
      document.querySelector(".typing-cursor")?.classList.add("typing-cursor-wip")
    })
    .pauseFor(6000)
    .callFunction(() => {
      document.querySelector(".typing-cursor")?.classList.remove("typing-cursor-wip")
    })
    .start()
}
</script>
<template>
  <div>
    <h1>{{ t("personal.fullname") }} ({{ t("personal.nickname") }})</h1>
  </div>
  <div style="height: 80px">
    <h3 id="typewriter"></h3>
  </div>
</template>
