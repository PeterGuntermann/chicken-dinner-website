<script setup lang="ts">
type Event = {
  datum: string;
  titel: string;
  link?: string;
};

const content = await queryContent('/events').findOne();
const events = content.body as unknown as Event[];
const heute = new Date().getTime();
const datum = (event: Event) => Date.parse(event.datum);
const zuletzt = events.filter((event) => datum(event) < heute);
const demnaechst = events.filter((event) => datum(event) > heute);
</script>

<template>
  <h2>Events</h2>

  <h3>Demnächst</h3>

  <ul>
    <li v-for="event in demnaechst">
      <NuxtTime
        :datetime="new Date(event.datum)"
        weekday="short"
        year="numeric"
        month="short"
        day="numeric"
      />
      –
      <a v-if="event.link" :href="event.link" target="_blank"> {{ event.titel }} </a>
      <span v-else> {{ event.titel }} </span>
    </li>
  </ul>

  <h3>Zuletzt</h3>

  <ul>
    <li v-for="event in zuletzt">
      <NuxtTime :datetime="new Date(event.datum)" year="numeric" month="short" />
      –
      <a v-if="event.link" :href="event.link" target="_blank"> {{ event.titel }} </a>
      <span v-else> {{ event.titel }} </span>
    </li>
  </ul>
</template>

<style scoped></style>
