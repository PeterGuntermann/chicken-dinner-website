<script setup lang="ts">
import { HomeSections } from '~/constants';
</script>

<template>
  <nav id="navigation" class="d-none d-sm-block d-xl-flex">
    <img
      class="img-fluid d-none d-xl-block"
      src="/images/sidebar/logo-white-800px.png"
      alt="Chicken Dinner Logo"
    />

    <ul>
      <li><a :href="`#${HomeSections.willkommen}`">Willkommen</a></li>
      <li><a :href="`#${HomeSections.unsereMusik}`">Unsere Musik</a></li>
      <li><a :href="`#${HomeSections.dasSindWir}`">Das sind wir</a></li>
      <li><a :href="`#${HomeSections.inAktion}`">In Aktion</a></li>
      <li><a :href="`#${HomeSections.events}`">Events</a></li>
      <li><a :href="`#${HomeSections.kontakt}`">Schreib uns</a></li>
    </ul>

    <img
      class="img-fluid d-none d-xl-block"
      src="/images/sidebar/warning-sign.png"
      alt="Chicken Dinner Warnschild"
    />
  </nav>
</template>

<style scoped lang="scss">
@use 'assets/scss/breakpoints';

nav {
  position: fixed;
  background: var(--color-black);
  width: 100%;
  z-index: 1000;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

li:not(:first-child) {
  margin-left: 2rem;
}

a {
  align-content: center;
  color: var(--color-gray-dark);
  display: block;
  font-size: 0.6rem;
  font-weight: bold;
  height: 3.5rem;
  letter-spacing: 0.25em;
  position: relative;
  transition: color 0.2s ease;
  text-decoration: none;
  text-transform: uppercase;

  &::before,
  &::after {
    border-radius: 0.2em;
    bottom: 0;
    content: '';
    height: 0.125rem;
    position: absolute;
    right: 0;
    width: 100%;
  }

  &::before {
    background: var(--color-brown);
  }

  &::after {
    background-image: linear-gradient(to right, var(--color-orange), var(--color-yellow));
    max-width: 0;
    transition: max-width 0.2s ease-in-out;
  }

  &.active {
    color: var(--color-gray-light);
  }

  &.active::after {
    max-width: 100%;
  }

  &:hover {
    color: var(--color-gray-light);
  }
}

@media (min-width: breakpoints.$xl) {
  nav {
    width: 18rem;
    padding: 1rem 2.5rem;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  ul {
    flex-direction: column;
  }
  li:not(:first-child) {
    margin-left: 0;
  }
  a {
    text-align: right;
  }
}
</style>
