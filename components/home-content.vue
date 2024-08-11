<script setup lang="ts">
import Events from '~/components/events.vue';
import GalerieHuehnchen from '~/components/galerie-huehnchen.vue';
import GalerieWir from '~/components/galerie-wir.vue';
import InstagramLink from '~/components/instagram-link.vue';
import SchreibUns from '~/components/schreib-uns.vue';
import WillkommenGruppenbild from '~/components/willkommen-gruppenbild.vue';
import { HomeSections } from '~/constants';
</script>

<template>
  <div class="d-flex d-xl-none justify-content-center my-5">
    <NuxtImg
      src="/images/sidebar/logo-white-800px.png"
      alt="Chicken Dinner Logo"
      loading="lazy"
      width="250"
    />
  </div>

  <section :id="HomeSections.willkommen">
    <div class="d-flex justify-content-center mb-5">
      <ScriptYouTubePlayer video-id="g6yRB9wX2hw" trigger="immediate" />
    </div>

    <h1>Die Band für deinen Hühnerstall!</h1>

    <WillkommenGruppenbild />
  </section>

  <section :id="HomeSections.unsereMusik">
    <DerMixMachts />
  </section>

  <section :id="HomeSections.dasSindWir">
    <GalerieWir />
  </section>

  <section :id="HomeSections.inAktion">
    <h2>So sieht's in Aktion aus</h2>
    <Galerie2024Teaser />

    <div class="d-flex justify-content-center mb-5">
      <LazyScriptYouTubePlayer video-id="ELhGopMPJC4" trigger="immediate" />
    </div>

    <InstagramLink />
  </section>

  <section :id="HomeSections.events">
    <Events />
  </section>

  <section :id="HomeSections.kontakt">
    <SchreibUns />
  </section>

  <section :id="HomeSections.huehnchenSlider">
    <GalerieHuehnchen />
  </section>
</template>

<style scoped>
:target::before {
  content: '';
  display: block;
  height: 5rem;
  margin: -5rem 0 0;
}

section {
  margin-bottom: 5rem;
}
</style>
