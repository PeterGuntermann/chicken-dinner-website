<script setup lang="ts"></script>

<template>
  <div class="d-flex justify-content-center p-5">
    <NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
    <NuxtLink to="/impressum">Impressum</NuxtLink>
  </div>
</template>

<style scoped>
div > * {
  color: var(--color-gray-light);
  margin: 0 1.5rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-yellow);
  }
}
</style>
