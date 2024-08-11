<script setup lang="ts">
import HomeContent from '~/components/home-content.vue';
</script>

<template>
  <div class="home-layout">
    <Navigation />

    <section
      id="content"
      data-bs-spy="scroll"
      data-bs-target="#navigation"
      data-bs-offset="56"
    >
      <div class="container">
        <HomeContent />
        <Footer />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/scss/breakpoints';

@media (min-width: breakpoints.$sm) {
  #content {
    padding-top: 3.5rem;
  }
}

@media (min-width: breakpoints.$xl) {
  .home-layout {
    display: flex;
  }

  #content {
    width: calc(100vw - 300px);
    margin-left: 300px;
  }
}
</style>
