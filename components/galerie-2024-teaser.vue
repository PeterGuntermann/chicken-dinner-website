<script setup lang="ts">
const images = [3, 5, 10, 15].map((i) => (i < 10 ? `0${i}` : `${i}`));
</script>

<template>
  <div class="row">
    <div v-for="image of images" class="col-3 mb-4">
      <img
        class="img-fluid"
        :src="`/images/galerie-2024/${image}.JPG`"
        :alt="image"
        loading="lazy"
      />
    </div>
  </div>

  <div class="d-flex justify-content-center mb-5">
    <NuxtLink class="action-button" to="/galerie-2024-full">
      Zeig' mir noch mehr Bilder und in groß! &nbsp;&nbsp;&nbsp; →
    </NuxtLink>
  </div>
</template>

<style scoped></style>
