<template>
  <div class="hamburger">
    <div class="sauce"></div>
    <div class="cheese"></div>
    <div class="meat"></div>
  </div>
</template>
<style scoped lang="scss">
.hamburger {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  transition: all .25s;
  .sauce,
  .cheese,
  .meat {
    scale: 1;
    border-radius: 30px;
    width: 36px;
    height: 4px;
    background-color: var(--bs-body-color);
  }

  .sauce {
    transition: transform 0.25s linear;
  }
  .cheese {
    transition:
      opacity 0.25s ease-in,
      scale 0.25s ease-in;
  }
  .meat {
    transition: transform 0.25s linear;
  }
}

.toggle {
  .hamburger {
    .sauce {
      transform: translate(0px, 14px) rotate(45deg);
    }
    .cheese {
      opacity: 0;
      scale: 0;
      transition:
        opacity 0.25s ease-out,
        scale 0.25s linear;
    }
    .meat {
      transform: translate(0px, -10px) rotate(-45deg);
    }
  }
}

</style>
