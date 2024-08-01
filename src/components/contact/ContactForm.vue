<script setup lang="ts">
import { useForm, configure } from "vee-validate"
import veeSetting from "@/plugins/vee-validate/options"

configure({
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: true
})

const veeOptions = veeSetting()
const { errors, handleSubmit, defineField } = useForm(veeOptions)
const [fullname, fullnameAttrs] = defineField("fullname")

const onSuccess = (values: any) => {
  console.log(values)
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
        <h1>ติดต่อ</h1>
        {{ errors }}
      </div>
      <div class="col">
        <div>
          <input
            type="text"
            class="form-control"
            id="fullname"
            v-model="fullname"
            v-bind="fullnameAttrs"
            placeholder="Fullname"
          />
        </div>
      </div>
      <div class="col">
        <div>
          <input type="email" class="form-control" id="email" placeholder="Email" />
        </div>
      </div>
      <div class="col">
        <div>
          <input type="text" class="form-control" id="line" placeholder="Line" />
        </div>
      </div>
      <div class="col">
        <div>
          <textarea class="form-control" id="detail" placeholder="Detail" rows="3"></textarea>
        </div>
      </div>
      <div>
        <button class="btn btn-warning">Submit</button>
      </div>
    </form>
  </div>
</template>
