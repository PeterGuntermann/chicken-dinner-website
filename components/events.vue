<script setup lang="ts">
const events = await queryContent('/events').findOne();
const heute = new Date();
console.log('events', events, heute);
</script>

<template>
  <h2>Events</h2>

  <h3>Demnächst</h3>

  <h3>Zuletzt</h3>

  <ul>
    <li v-for="event in events.body">
      {{ event }}
    </li>
  </ul>
</template>

<style scoped></style>
