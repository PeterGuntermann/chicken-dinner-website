<script setup lang="ts">
import HomeContent from '~/components/home-content.vue';
</script>

<template>
  <Navigation />

  <div class="container">
    <section
      id="content"
      data-bs-spy="scroll"
      data-bs-target="#navigation"
      data-bs-offset="56"
    >
      <HomeContent />
      <Footer />
    </section>
  </div>
</template>

<style scoped>
#content {
  padding-top: 3.5rem;
}
</style>
