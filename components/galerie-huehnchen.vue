<script setup lang="ts">
const imgPath = (index: number) => `/images/huehnchen-slider/chicken${index}.jpg`;
</script>

<template>
  <div class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="img-fluid"
          :src="imgPath(1)"
          alt="Ein braunes Huhn sieht direkt in die Kamera"
          loading="lazy"
        />
      </div>

      <div class="carousel-item">
        <img
          class="img-fluid"
          :src="imgPath(2)"
          alt="Drei Hühner stehen im hohen Gras und schauen aus verschiedenen Winkeln in die Kamera"
          loading="lazy"
        />
      </div>

      <div class="carousel-item">
        <img
          class="img-fluid"
          :src="imgPath(3)"
          alt="Close-up-Aufnahme eines krähenden Hahnes"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
