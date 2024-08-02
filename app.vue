<template>
  <NuxtPage page-key="static" />
</template>

<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon-warnschild-64.ico' }],
  htmlAttrs: {
    lang: 'en',
  },
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
