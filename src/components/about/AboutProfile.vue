<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFilePdf } from "@fortawesome/free-regular-svg-icons"
library.add(faFilePdf)
</script>
<template>
  <div>
    <div class="text-center px-3 p-md-0">
      <div class="profile-box position-relative mx-auto">
        <img src="@/assets/imgs/beam-sm.png" alt="beam" class="profile shadow-sm" />
        <div class="profile-overlay">
          <a href="#" class="link-body" target="_blank"><font-awesome-icon icon="fa-regular fa-file-pdf"  class="fs-5 align-middle"  /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link-body{
  color: var(--bs-body-bg);
}
.profile-box {
  width: 380px;
  overflow: hidden;
  .profile-overlay {
    padding: 0px;
    position: absolute;
    width: 100%;
    max-height: 0px;
    color: var(--bs-body-bg);
    background-color: var(--bs-body-color);
    bottom: 0;
    transition: max-height 0.25s, padding 0.1s;
  }
  &:hover {
    .profile-overlay {
      padding: 5px;
      height: auto;
      max-height: 50px;
    }
  }
}
.profile {
  width: 380px;
}

@media (max-width: 768px) {
  .profile {
    width: 100%;
  }
}
</style>
