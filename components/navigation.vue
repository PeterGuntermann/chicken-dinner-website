<script setup lang="ts">
import { HomeSections } from '~/constants';
</script>

<template>
  <nav>
    <ul>
      <li><a :href="`#${HomeSections.willkommen}`">Willkommen</a></li>
      <li><a :href="`#${HomeSections.unsereMusik}`">Unsere Musik</a></li>
      <li><a :href="`#${HomeSections.dasSindWir}`">Das sind wir</a></li>
      <li><a :href="`#${HomeSections.inAktion}`">Action!</a></li>
      <li><a :href="`#${HomeSections.kontakt}`">Schreib uns</a></li>
    </ul>
  </nav>
</template>

<style scoped></style>
