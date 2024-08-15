<script setup lang="ts">
import Backlink from '~/components/elements/backlink.vue';

const images = [...Array(27).keys()]
  .map((i) => i + 1)
  .map((i) => (i < 10 ? `0${i}` : `${i}`));
</script>

<template>
  <div class="container-fluid">
    <h1 class="mt-5">Bildergalerie 2024</h1>

    <div class="text-center mb-5">
      <Backlink />
    </div>

    <div class="row">
      <div v-for="image of images" class="col-12 col-sm-6 col-md-4 mb-4">
        <NuxtImg
          class="img-fluid"
          :src="`/images/galerie-2024/${image}.JPG`"
          :alt="image"
          loading="lazy"
          sizes="800"
        />
      </div>
    </div>
  </div>

  <div class="text-center mb-5">
    <Backlink />
  </div>
</template>

<style scoped></style>
