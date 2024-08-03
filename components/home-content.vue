<script setup lang="ts">
import Events from '~/components/events.vue';
</script>

<template>
  <NuxtImg
    src="/images/sidebar/logo-white-800px.png"
    alt="Chicken Dinner Logo"
    loading="lazy"
  />

  <section id="willkommen">
    Teaser Video
    <br />
    Wir-Bild
  </section>

  <section id="unsere-musik">
    Die Band für deinen Hühnerstall
    <br />
    Wir-Galerie
  </section>

  <section id="action">
    Galerie 2024
    <br />
    Teaser-Video
    <br />
    Instagram
    <br />
    <Events />
  </section>

  <section id="kontakt">Schreib uns</section>

  <section id="huehnchen-slider">Hühnchen-Slider</section>
</template>

<style scoped></style>
