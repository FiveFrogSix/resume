<template>
  <div class="timeline-box">
    <ul class="d-flex flex-column gap-5">
      <slot></slot>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.timeline-box {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    background-color: black;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
  }
  ul {
    padding-left: 0%;
    list-style: none;
  }
}
</style>
