<template>
  <NuxtPage page-key="static" />
</template>

<script setup>
const title = 'Die Band für deinen Hühnerstall - Chicken Dinner';
const description =
  'Die Band "Chicken Dinner" aus Karlsruhe spielt Coversongs in einer bunten Mischung ' +
  'aus dem Bereich Rock, Pop und Soul. ' +
  'Es sind Songs, die man feiert, die man kennt und die man einfach genießt. ' +
  'Wenn du ein Fest planst, dann kann Chicken Dinner den Geschmack deines Publikums treffen ' +
  'und für die passende Stimmung sorgen.';

useHead({
  title: title,
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon-warnschild-64.ico' }],
  htmlAttrs: {
    lang: 'de',
  },
});
useSeoMeta({
  title: title,
  ogTitle: 'Die Band für deinen Hühnerstall',
  ogUrl: 'https://chickendinnerband.de',
  ogDescription: description,
  description: description,
  ogType: 'website',
  robots: 'index, follow',
});

const { $bs } = useNuxtApp();

onMounted(() => {
  try {
    const collapse = new $bs.Collapse('#navbarSupportedContent');
    collapse.show();
  } catch (e) {
    console.log('Bootstrap error: ', e);
  }
});
</script>
