<script setup lang="ts">
const namen = ['Engin', 'Julia', 'Peter', 'Philipp', 'Sven', 'Timo'];
</script>

<template>
  <div class="row">
    <div v-for="name of namen" class="col-6 col-md-4 mb-4">
      <NuxtImg
        class="img-fluid"
        :src="`/images/wir/einzeln/${name}-1000px.JPG`"
        :alt="name"
        sizes="300 xl:450"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped></style>
