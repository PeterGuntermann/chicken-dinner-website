<script setup lang="ts">
import { HomeSections } from '~/constants';
</script>

<template>
  <nav>
    <ul>
      <li><a :href="`#${HomeSections.willkommen}`">Willkommen</a></li>
      <li><a :href="`#${HomeSections.unsereMusik}`">Unsere Musik</a></li>
      <li><a :href="`#${HomeSections.dasSindWir}`">Das sind wir</a></li>
      <li><a :href="`#${HomeSections.inAktion}`">Action!</a></li>
      <li><a :href="`#${HomeSections.kontakt}`">Schreib uns</a></li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

li:not(:first-child) {
  margin-left: 2rem;
}

a {
  align-content: center;
  color: rgba(255, 255, 255, 0.35);
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
    background: #975b02;
  }

  &::after {
    background-image: linear-gradient(to right, #f59402, #f5d402);
    max-width: 0;
    transition: max-width 0.2s ease-in-out;
  }

  &.active::after {
    max-width: 100%;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.55);
  }
}
</style>
