<script setup lang="ts">
import Events from '~/components/events.vue';
import Galerie2024 from '~/components/galerie-2024.vue';
import GalerieHuehnchen from '~/components/galerie-huehnchen.vue';
import GalerieWir from '~/components/galerie-wir.vue';
import InstagramLink from '~/components/instagram-link.vue';
import SchreibUns from '~/components/schreib-uns.vue';
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
    <h1>Die Band für deinen Hühnerstall</h1>

    <DerMixMachts />
  </section>

  <section id="das-sind-wir">
    <GalerieWir />
  </section>

  <section id="action">
    <h2>So sieht's in Aktion aus</h2>
    <Galerie2024 />
    <br />
    <LazyScriptYouTubePlayer video-id="ELhGopMPJC4" />
    <br />
    <InstagramLink />
    <br />
    <Events />
  </section>

  <section id="kontakt">
    <SchreibUns />
  </section>

  <section id="huehnchen-slider">
    <GalerieHuehnchen />
  </section>
</template>

<style scoped></style>
