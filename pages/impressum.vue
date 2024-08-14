<script setup lang="ts">
import Backlink from '~/components/elements/backlink.vue';
</script>

<template>
  <div class="text-center my-5">
    <Backlink />
  </div>

  <div class="container">
    <h1>Impressum</h1>
    <h2>Angaben gemäß § 5 TMG</h2>
    <p>Peter Guntermann<br />Haydnstraße 6<br />76356 Weingarten</p>
    <h2>Kontakt</h2>
    <p>Telefon: +49 (0) 162 9804078<br />E-Mail: info@chickendinnerband.de</p>
    <h2>Redaktionell verantwortlich</h2>
    <p>Peter Guntermann<br />Haydnstraße 6<br />76356 Weingarten</p>
    <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
  </div>

  <div class="text-center mb-5">
    <Backlink />
  </div>
</template>

<style scoped>
h1,
h2,
h3 {
  text-align: left;
}

h2 {
  margin-top: 3rem;
}
</style>
