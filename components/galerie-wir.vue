<script setup lang="ts">
const namen = ['Engin', 'Julia', 'Peter', 'Philipp', 'Sven', 'Timo'];
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-center flex-wrap gap-2 mb-5">
      <NuxtImg
        v-for="name of namen"
        :src="`/images/wir/einzeln/${name}-1000px.JPG`"
        :alt="name"
        loading="lazy"
        sizes="40vw sm:33vw md:25vw"
      />
    </div>
  </div>
</template>

<style scoped></style>
