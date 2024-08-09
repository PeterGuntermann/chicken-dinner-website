<script setup lang="ts">
type Song = { title: string; artist?: string };
const content = await queryContent('/repertoire').findOne();
const repertoire: Song[] = content.body as unknown as Song[];
</script>

<template>
  <h2>Der Mix macht's!</h2>
  <p class="mb-4">
    <em> Eine ausgewogene Mischung aus Rock, Pop und Soul.</em>
  </p>

  <p class="mb-4">Songs, die man <em class="color-yellow">feiert</em></p>
  <p class="mb-4">Songs, die man <em class="color-yellow">kennt</em></p>
  <p class="mb-5">Songs, die man einfach <em class="color-yellow">genießt</em></p>

  <p class="mb-4">zum Beispiel diese hier...</p>

  <div class="repertoire mb-5">
    <p v-for="song of repertoire">
      {{ song.title }} <em v-if="song.artist">– {{ song.artist }}</em>
    </p>
  </div>
</template>

<style scoped>
* {
  text-align: center;
}

p {
  color: var(--color-gray-light);
}

.repertoire {
  column-count: 2;

  em {
    color: var(--color-gray-dark);
    font-size: 0.875rem;
  }
}
</style>
