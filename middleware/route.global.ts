export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== from.path && import.meta.browser) {
    window.scrollTo(0, 0);
  }
});
