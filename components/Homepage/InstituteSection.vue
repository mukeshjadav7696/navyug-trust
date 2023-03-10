<template>
  <section class="hero is-light">
    <div class="hero-body">
      <div class="container">
        <div class="divider">
          <h2 class="title">Institutions</h2>
        </div>
        <div class="columns is-multiline mt-3">
          <div
            class="column is-4"
            v-for="(institute, index) in institutes"
            :key="'gallery_' + index"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="institute.image_url" :alt="institute.title" />
                </figure>
              </div>
              <footer class="card-footer">
                <nuxt-link
                  :to="institute.url"
                  class="card-footer-item is-flex-grow-5"
                >
                  <p
                    class="subtitle is-5 has-text-weight-bold has-text-centered"
                  >
                    {{ institute.title }}
                  </p>
                </nuxt-link>
                <a
                  v-if="institute.website"
                  :href="institute.website"
                  class="card-footer-item"
                  target="_blank"
                >
                  <span class="icon">
                    <i class="fas fa-external-link-alt"></i>
                  </span>
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import sharedData from "~/plugins/data/shared-data.json";

export default {
  name: "InstituteSection",
  data() {
    return {
      institutes: sharedData.institutes,
    };
  },
};
</script>
