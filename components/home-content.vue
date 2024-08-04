<script setup lang="ts">
import Events from '~/components/events.vue';
import GalerieWir from '~/components/galerie-wir.vue';
import InstagramLink from '~/components/instagram-link.vue';
import WillkommenGruppenbild from '~/components/willkommen-gruppenbild.vue';
</script>

<template>
  <NuxtImg
    src="/images/sidebar/logo-white-800px.png"
    alt="Chicken Dinner Logo"
    loading="lazy"
  />

  <section id="willkommen">
    <LazyScriptYouTubePlayer video-id="g6yRB9wX2hw" />
    <br />
    <WillkommenGruppenbild />
  </section>

  <section id="unsere-musik">
    Die Band für deinen Hühnerstall
    <br />
    <GalerieWir />
  </section>

  <section id="action">
    Galerie 2024
    <br />
    <LazyScriptYouTubePlayer video-id="ELhGopMPJC4" />
    <br />
    <InstagramLink />
    <br />
    <Events />
  </section>

  <section id="kontakt">Schreib uns</section>

  <section id="huehnchen-slider">Hühnchen-Slider</section>
</template>

<style scoped></style>
