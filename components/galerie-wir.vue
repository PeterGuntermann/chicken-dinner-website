<script setup lang="ts">
const namen = ['Engin', 'Julia', 'Peter', 'Philipp', 'Sven', 'Timo'];
</script>

<template>
  <div>
    <NuxtImg
      v-for="name of namen"
      :src="`/images/wir/einzeln/${name}-1000px.JPG`"
      :alt="name"
      loading="lazy"
    />
  </div>
</template>

<style scoped></style>
