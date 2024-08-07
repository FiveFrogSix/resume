<script setup lang="ts">
import { useForm, configure } from "vee-validate"
import veeSetting from "@/plugins/vee-validate/options"
import InputText from "@/components/input/InputText.vue"
import InputTextarea from "@/components/input/InputTextarea.vue"
import { PostLineNotify } from "@/api/notify"
import type { LineNotify } from "@/types/line"
import LoadingSpinner from "../assets/LoadingSpinner.vue"
import { inject, onBeforeUnmount, onMounted } from "vue"

configure({
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: true
})

onMounted(() => {
  initgRecaptBanner()
})

onBeforeUnmount(() => {
  removegRecaptBanner()
})

const Swal: any = inject("$swal")
const veeOptions = veeSetting()
const { errors, handleSubmit, defineField, resetForm, isSubmitting } = useForm(veeOptions)
const [fullname, fullnameAttrs] = defineField("fullname")
const [emailline, emaillineAttrs] = defineField("emailline")
const [detail, detailAttrs] = defineField("detail")

const initgRecaptBanner = () => {
  document.body.classList.add("grecaptcha-active")
}

const removegRecaptBanner = () => {
  document.body.classList.remove("grecaptcha-active")
}

const onSuccess = async (values: any) => {
  try {
    grecaptcha.ready(function () {
      grecaptcha
        .execute(import.meta.env.VITE_RECAPTCHA_KEY_ID, { action: "submit" })
        .then(async function (token: string) {
          const format_msg = `มีอะไรใหม่!\nชื่อ: ${values.fullname}\nช่องทางติดต่อ: ${values.emailline}\nรายละเอียด: ${values.detail}`
          const payload = {
            message: format_msg,
            stickerPackageId: 6359,
            stickerId: 11069861,
            gtkn: token
          } as LineNotify
          const { status, data } = await PostLineNotify(payload)
          if (status !== 200) throw data
          Swal.fire().then(() => {
            resetForm()
          })
        })
        .catch(() => {
          Swal.fire({
            title: "เกิดข้อผิดพลาด",
            icon: "error",
            text: "คุณไม่ใช่มนุษย์"
          })
        })
    })
  } catch (error) {
    console.error(error)
  }
}
const onSubmit = handleSubmit(onSuccess)
</script>
<template>
  <div id="RecaptchaID"></div>
  <div class="col-10 mx-auto">
    <form class="row row-cols-1 gy-4 mx-auto" @submit.prevent="onSubmit" novalidate>
      <div class="col">
        <h1>{{ $t("contact") }}</h1>
      </div>
      <div class="col">
        <InputText
          id="fullname"
          :placeholder="$t(`fullname`)"
          v-model="fullname"
          v-bind="fullnameAttrs"
          :validate="errors.fullname"
        />
      </div>
      <div class="col">
        <InputText
          id="email"
          name="email"
          :placeholder="$t(`emailline`)"
          v-model="emailline"
          v-bind="emaillineAttrs"
          :validate="errors.emailline"
        />
      </div>
      <div class="col">
        <InputTextarea
          id="detail"
          :placeholder="$t(`write_something`)"
          rows="3"
          v-model="detail"
          v-bind="detailAttrs"
          :validate="errors.detail"
        />
      </div>
      <div>
        <button :disabled="isSubmitting" class="btn btn-warning">
          <loading-spinner :loading="isSubmitting">
            {{ $t("form.submit") }}
          </loading-spinner>
        </button>
      </div>
    </form>
  </div>
</template>
