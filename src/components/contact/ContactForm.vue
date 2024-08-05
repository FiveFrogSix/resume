<script setup lang="ts">
import { useForm, configure } from "vee-validate"
import veeSetting from "@/plugins/vee-validate/options"
import InputText from "@/components/input/InputText.vue"
import InputTextarea from "@/components/input/InputTextarea.vue"
import { PostLineNotify } from "@/api/notify"
import type { LineNotify } from "@/types/line"

configure({
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: true
})

const veeOptions = veeSetting()
const { errors, handleSubmit, defineField } = useForm(veeOptions)
const [fullname, fullnameAttrs] = defineField("fullname")
const [emailline, emaillineAttrs] = defineField("emailline")
const [detail, detailAttrs] = defineField("detail")

const onSuccess = async (values: any) => {
  const payload = {
    message: values.detail
  } as LineNotify
  const res = await PostLineNotify(payload)
  console.log(res)
}

const onInvalidSubmit = ({ values, errors, results }: any) => {
  console.log(values)
  console.log(results)
  console.error(errors)
}

const onSubmit = handleSubmit(onSuccess, onInvalidSubmit)
</script>
<template>
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
          id="line"
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
        <button class="btn btn-warning">{{ $t("form.submit") }}</button>
      </div>
    </form>
  </div>
</template>
