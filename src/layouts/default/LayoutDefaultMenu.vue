<script lang="ts" setup>
import { RouterLink } from "vue-router"
</script>
<template>
  <div class="position-fixed top-50 end-0">
    <div class="d-flex flex-column gap-2 text-end">
      <div>
        <router-link
          :to="{ name: `Home` }"
          class="btn btn-primary btn-menu btn-sm"
          activeClass="btn-menu-active"
          exact
        >
          <font-awesome-icon icon="fa-solid fa-house" />
          <span class="ms-1"> หน้าแรก</span>
        </router-link>
      </div>
      <div>
        <router-link
          :to="{ name: `Skills` }"
          class="btn btn-primary btn-menu btn-sm"
          activeClass="btn-menu-active"
        >
          <font-awesome-icon icon="fa-solid fa-house" />
          <span class="ms-1"> ความสามารถ</span>
        </router-link>
      </div>
      <div>
        <router-link
          :to="{ name: `Talens` }"
          class="btn btn-primary btn-menu btn-sm"
          activeClass="btn-menu-active"
        >
          <font-awesome-icon icon="fa-solid fa-house" />
          <span class="ms-1"> ความสามารถพิเศษ</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
