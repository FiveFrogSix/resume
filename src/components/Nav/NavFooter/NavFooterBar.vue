<template>
  <div class="footer py-2 py-md-1 px-2 px-md-3 me-auto mx-md-auto">
    <div class="d-flex flex-column flex-md-row row-cols gap-1 gap-md-3">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: fit-content;
  border-radius: 20px;
  background-color: var(--bs-primary);
  opacity: 0;
  transform: translateY(35px);
  animation-name: slider;
  animation-duration: 0.25s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-fill-mode: forwards;
}

@media (max-width: 768px) {
  .footer {
    transform: translateX(-35x);
    animation-name: slidersmall;
  }
}

@keyframes slider {
  0% {
    transform: translateY(35px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slidersmall {
  0% {
    transform: translateX(-35px);
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
