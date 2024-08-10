<script setup lang="ts">
type Event = {
  datum: string;
  titel: string;
  link?: string;
  details?: string;
};

const content = await queryContent('/events').findOne();
const events = content.body as unknown as Event[];
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
      <div class="col-4 offset-4" v-for="event in demnaechst">
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
      <div class="col-3" v-for="event in zuletzt">
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

<style scoped></style>
