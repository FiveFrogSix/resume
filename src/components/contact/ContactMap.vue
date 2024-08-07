<template>
  <div class="map-frame m-auto col-12 col-md-10 shadow-sm">
    <iframe
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1629.742560990737!2d100.33670571298478!3d13.706157853850929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e295f08d01e30b%3A0x5ae2b97db178b8ca!2z4LiL4Lit4Lii4LmA4Lie4LiK4Lij4LmA4LiB4Lip4LihIDExNg!5e0!3m2!1sth!2sth!4v1722530484871!5m2!1sth!2sth"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
<style lang="scss" scoped>
.map-frame {
  overflow: hidden;
  border-radius: 20px;
  height: 60vh;
  .map {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 768px) {
  .map-frame {
    overflow: hidden;
    border-radius: 0px;
    height: 60vh;
    .map {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
