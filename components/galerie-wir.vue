<script setup lang="ts">
const namen = ['EnginPeter', 'Marie', 'MarieEngin', 'Philipp', 'SvenPeter', 'Timo'];
</script>

<template>
  <div class="row">
    <div v-for="name of namen" class="col-6 col-md-4 mb-4">
      <NuxtImg
        class="img-fluid"
        :src="`/images/wir/2025/${name}-1000px.JPG`"
        :alt="name"
        sizes="300 xl:450"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped></style>
