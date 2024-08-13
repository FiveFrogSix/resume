<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCircle, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"

library.add(faCircle, faAngleDown, faAngleUp)
const { t } = useI18n()
const detail = ref<HTMLDivElement | null>(null)
const detail_button = ref<HTMLDivElement | null>(null)
const more_btn = ref(t("show_less"))
const btn_detail = ref(false)
onMounted(() => {
  initHideDetail()
})

const initHideDetail = () => {
  if (detail.value && detail_button.value && detail.value.offsetHeight > 120) {
    btn_detail.value = true
    detail.value.classList.add("detail-hidden")
    detail_button.value.classList.add("detail-hidden")
    more_btn.value = t("show_more")
  } else if (detail.value && detail_button.value && detail.value.offsetHeight < 120) {
    btn_detail.value = false
  }
}

const morelessDetail = () => {
  if (detail.value && detail_button.value && detail.value.classList.contains("detail-hidden")) {
    // more
    detail.value.classList.remove("detail-hidden")
    detail_button.value.classList.remove("detail-hidden")
  } else if (detail.value && detail_button.value) {
    // less
    detail.value.classList.add("detail-hidden")
    detail_button.value.classList.add("detail-hidden")
  }
}
</script>

<template>
  <li>
    <div class="row">
      <div class="col text-end">
        <div class="pe-5">
          <div class="fs-5 fw-500">2024 - Present</div>
          <div>FullStack</div>
        </div>
      </div>
      <div class="col">
        <div class="dot-position">
          <font-awesome-icon icon="fa-solid fa-circle" class="text-primary align-middle" />
        </div>
        <div class="ps-5">
          <div class="fs-5 fw-500">GO (Thailand)</div>
          <div>Bangplat</div>
          <div ref="detail" class="timeline-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex est accusamus ipsa molestiae
            numquam deleniti dignissimos, obcaecati vitae quibusdam necessitatibus? Dicta quae
            consectetur, deleniti quia temporibus quis accusantium labore rem. Eaque odit aut
            laborum nobis deleniti, ducimus ut doloribus, a quaerat ratione debitis aliquam autem
            sapiente repudiandae accusamus inventore modi voluptas culpa totam iusto earum, et natus
            commodi animi? Molestias sapiente veritatis ex beatae adipisci itaque et aperiam amet
            minus, eos iure dolores asperiores nihil pariatur quam consectetur. Illum pariatur
            veniam, harum nulla dolorum officia numquam maxime suscipit consequuntur corrupti? Quis
            distinctio amet magni maiores dolor sit qui voluptate itaque.
          </div>
          <div ref="detail_button" class="timeline-detail-btn" v-show="btn_detail">
            <button @click="morelessDetail" class="btn btn-showmore rounded-0 p-0 text-primary">
              {{ more_btn }}
              <span class="angle d-inline-block">
                <font-awesome-icon icon="fa-solid fa-angle-up" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.btn-check:checked + .btn,
:not(.btn-check) + .btn:active,
.btn:first-child:active,
.btn.active,
.btn.show {
  border-color: transparent;
}

.timeline-detail {
  position: relative;
  font-weight: 300;
  &.detail-hidden {
    max-height: 120px;
    overflow: hidden;
  }
}

.timeline-detail-btn {
  .btn-showmore {
    .angle {
      transition: transform 0.3s;
    }
  }
  &.detail-hidden {
    .btn-showmore {
      .angle {
        transform: rotate(-180deg);
      }
    }
  }
}

.dot-position {
  transform: translate(-20px);
  position: absolute;
  background-color: white;
  height: 26px;
  border-radius: 50%;
  border: none;
}
</style>
