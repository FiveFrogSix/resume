<template>
  <h2 class="fw-400 text-center mb-0">
    <span class="title">
      <slot></slot>
    </span>
  </h2>
</template>
<style lang="scss" scoped>
.title {
  position: relative;
  &:before,
  &::after {
    content: "";
    width: 0%;
    position: absolute;
    height: 3px;
    transform: translateY(40px);
    animation-name: slideBorder;
    animation-duration: .25s;
    animation-delay: .1s;
    animation-direction: alternate;
    animation-fill-mode: forwards;
  }
  &:before {
    left: 50%;
    background-color: var(--bs-primary);
  }
  &:after {
    right: 50%;
    background-color: var(--bs-warning);
  }
}

@keyframes slideBorder {
  0% {
    width: 0%;
  }
  100%{
    width: 51%;
  }
}
</style>
