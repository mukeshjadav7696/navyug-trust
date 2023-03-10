<template>
  <section>
    <section class="service-section mobile-hide">
      <div class="container is-max-widescreen">
        <div class="columns">
          <div
            class="column"
            v-for="(service, index) in services"
            :key="'service_' + index"
          >
            <div class="service-box">
              <div class="service-icon">
                <template v-if="service.is_icon_image">
                  <img :src="service.image" alt="" width="30" />
                </template>
                <template v-else>
                  <icon></icon>
                </template>
              </div>
              <div class="service-info">
                <h4>
                  <template v-if="service.is_router">
                    <nuxt-link :to="service.url" />
                  </template>
                  <template v-else>
                    <a :href="service.url">{{ service.title }}</a>
                  </template>
                </h4>
                <p>{{ service.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-small is-hidden-desktop is-light">
      <div class="hero-body">
        <div id="service-slider" class="swiper-container box">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide is-align-self-center"
              v-for="(service, index) in services"
              :key="'service_' + index"
            >
              <div class="service-box p-3 is-align-items-center">
                <div class="service-icon">
                  <template v-if="service.is_icon_image">
                    <img :src="service.image" alt="" width="30" />
                  </template>
                  <template v-else>
                    <icon></icon>
                  </template>
                </div>
                <div class="service-info">
                  <h4>
                    <template v-if="service.is_router">
                      <nuxt-link :to="service.url" />
                    </template>
                    <template v-else>
                      <a :href="service.url">{{ service.title }}</a>
                    </template>
                  </h4>
                  <p>{{ service.subtitle }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import sharedData from "~/plugins/data/shared-data.json";
import Swiper from "~/plugins/swiper";

export default {
  name: "HeroSection",
  data() {
    return {
      webAnnoucements: [],
      webNotices: [],
      services: sharedData.services,
    };
  },
  mounted() {
    this.serviceSwiperSection();
  },
  methods: {
    serviceSwiperSection() {
      setTimeout(() => {
        var swiper = new Swiper("#service-slider", {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          centeredSlides: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
        });
      }, 300);
    },
  },
};
</script>
