<script setup lang="ts"></script>

<template>
  <h1>index page</h1>

  <NuxtLink to="/datenschutz">datenschutz</NuxtLink>
  <NuxtLink to="/impressum">impressum</NuxtLink>

  <NuxtImg
    src="/images/sidebar/warning-sign.png"
    sizes="100vw sm:50vw md:400px"
    loading="lazy"
    alt="Discover Nuxt 3"
  />
</template>

<style scoped></style>
