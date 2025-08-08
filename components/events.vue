<script setup lang="ts">
type Event = {
  datum: string;
  titel: string;
  link?: string;
  details?: string;
};

const { data } = await useAsyncData('events', () => {
  return queryCollection('events').first();
});
const events = data.value?.meta.body as unknown as Event[];
const heute = new Date().getTime();
const datum = (event: Event) => Date.parse(event.datum);
const zuletzt = events.filter((event) => datum(event) < heute).slice(0, 4);
const demnaechst = events.filter((event) => datum(event) > heute);
</script>

<template>
  <h2>Events</h2>

  <div class="mb-5">
    <h3>Demnächst</h3>

    <div class="row mb-5">
      <div
        class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 mb-4"
        v-for="event in demnaechst"
      >
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              <a v-if="event.link" :href="event.link" target="_blank">
                {{ event.titel }}
              </a>
              <span v-else class="color-yellow"> {{ event.titel }} </span>
            </h4>

            <NuxtTime
              :datetime="new Date(event.datum)"
              class="color-gray-dark"
              weekday="short"
              year="numeric"
              month="short"
              day="numeric"
            />

            <p v-if="event.details" class="card-text">
              {{ event.details }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <h3>Zuletzt</h3>

    <div class="row">
      <div class="col-6 col-lg-3 mb-4" v-for="event in zuletzt">
        <div class="card">
          <div class="card-body">
            <p class="card-title">
              <a v-if="event.link" :href="event.link" target="_blank">
                {{ event.titel }}
              </a>
              <span v-else> {{ event.titel }} </span>
            </p>

            <NuxtTime
              :datetime="new Date(event.datum)"
              class="color-gray-dark"
              year="numeric"
              month="short"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/scss/breakpoints';
@media (min-width: breakpoints.$sm) {
  //
}
</style>
