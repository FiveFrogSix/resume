<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCircle, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"

defineProps({
  start_date: {
    type: String,
    default: ""
  },
  end_date: {
    type: [String],
    default: ""
  },
  end_date_type: {
    type: String,
    default: ""
  },
  sub_date_text: {
    type: String
  },
  title: {
    type: String
  },
  sub_title: {
    type: String
  },
  detail: {
    type: Object,
    default() {
      return {}
    }
  }
})

library.add(faCircle, faAngleDown, faAngleUp)
const { t } = useI18n()
const detail_box = ref<HTMLDivElement | null>(null)
const detail_button = ref<HTMLDivElement | null>(null)
const more_btn = ref(t("show_less"))
const btn_detail = ref(false)
const months_name = [
  "month.jan",
  "month.feb",
  "month.mar",
  "month.apr",
  "month.may",
  "month.jun",
  "month.jul",
  "month.aug",
  "month.sep",
  "month.oct",
  "month.nov",
  "month.dec"
]
onMounted(() => {
  initHideDetail()
})

const initHideDetail = () => {
  if (detail_box.value && detail_button.value && detail_box.value.offsetHeight > 120) {
    btn_detail.value = true
    detail_box.value.classList.add("detail-hidden")
    detail_button.value.classList.add("detail-hidden")
    more_btn.value = t("show_more")
  } else if (detail_box.value && detail_button.value && detail_box.value.offsetHeight < 120) {
    btn_detail.value = false
  }
}

const morelessDetail = () => {
  if (
    detail_box.value &&
    detail_button.value &&
    detail_box.value.classList.contains("detail-hidden")
  ) {
    // more
    detail_box.value.classList.remove("detail-hidden")
    detail_button.value.classList.remove("detail-hidden")
    more_btn.value = t("show_less")
  } else if (detail_box.value && detail_button.value) {
    // less
    detail_box.value.classList.add("detail-hidden")
    detail_button.value.classList.add("detail-hidden")
    more_btn.value = t("show_more")
  }
  console.log(more_btn.value)
}

const parseDate = (start_str: string, end_str: string, type = "") => {
  let formatStarDate: string | Date = start_str
  let formatEndDate: string | Date = end_str
  let result = ""
  let start_result = ""
  let end_result = ""
  if (start_str) {
    formatStarDate = new Date(start_str)
    const year = formatStarDate.getFullYear()
    const month = formatStarDate.getMonth()
    start_result = `${t(months_name[month])} ${year}`
  }

  if (end_str) {
    formatEndDate = new Date(end_str)
    const year = formatEndDate.getFullYear()
    const month = formatEndDate.getMonth()
    end_result = `${t(months_name[month])} ${year}`
  }

  if (start_result && end_result) {
    result = `${start_result} - ${end_result}`
  }

  if (type === "exp") {
    if (!end_str) result = `${start_result} - ปัจจุบัน`
  } else if (type === "educate") {
    result = "จบการศึกษา"
  }
  return result
}
</script>

<template>
  <li>
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col text-start text-md-end">
        <div class="pe-5">
          <div class="fs-5 fw-500">
            {{ parseDate(start_date, end_date, end_date_type) }}
          </div>
          <div>{{ sub_date_text }}</div>
        </div>
      </div>
      <div class="col">
        <div class="dot-position d-none d-lg-block">
          <font-awesome-icon icon="fa-solid fa-circle" class="text-warning align-middle" />
        </div>
        <div class="px-0 px-md-3 ps-md-5">
          <div class="fs-5 fw-500">{{ title }}</div>
          <div>{{ sub_title }}</div>
          <div ref="detail_box" class="timeline-detail">
            <div v-html="detail.title"></div>
            <ol class="heading">
              <template v-for="(detaillist, d_index) in detail.list" :key="d_index">
                <li>
                  <div v-html="detaillist.title"></div>
                  <ul class="subheading">
                    <template v-for="(detailsublist, s_index) in detaillist.list" :key="s_index">
                      <li>{{ detailsublist }}</li>
                    </template>
                  </ul>
                </li>
              </template>
            </ol>
          </div>
          <div ref="detail_button" class="timeline-detail-btn" v-show="btn_detail">
            <button @click="morelessDetail" class="btn btn-showmore rounded-0 p-0 text-primary">
              {{ more_btn }}
              <span class="angle d-inline-block">
                <font-awesome-icon icon="fa-solid fa-angle-up" class="align-middle" />
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

ol {
  &.heading,
  &.subheading {
    padding-left: 1rem;
  }
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
    font-size: 15px;
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
  background-color: var(--bs-body-bg);
  height: 26px;
  border-radius: 50%;
  border: none;
}
</style>
