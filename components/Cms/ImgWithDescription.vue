<template>
  <section class="section mission-vision-section">
    <div class="container">
      <div class="columns" style="flex-wrap: wrap">
        <div class="column is-full" v-if="missionSliderData.length > 0">
          <div id="mission-slider" class="box swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(mission, index) of missionSliderData"
                :key="'mission_' + index"
              >
                <div class="slider-image">
                  <img :src="mission.image_url" />
                </div>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import sharedData from "~/plugins/data/shared-data.json";
import Swiper from "~/plugins/swiper";

export default {
  name: "ImgWithDescription",
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
    ImgSrc: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      messages: [
        [
          "right-align",
          "Achieving Excellence Together",
          "Process",
          "green darken-2",
        ],
        [
          "left-align",
          "Creating a Community of Life-Long Learners",
          "Outcome",
          "blue darken-2",
        ],
        [
          "center-align",
          "Empowering the Education",
          "Objective",
          "orange darken-2",
        ],
      ],
      missionSliderData: sharedData.missionSlider,
    };
  },
  mounted() {
    this.missionSliderSwiper();
  },
  methods: {
    missionSliderSwiper() {
      setTimeout(() => {
        const missionSwiper = new Swiper("#mission-slider", {
          slidesPerView: 1,
          loop: true,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
          centeredSlides: true,
          spaceBetween: 30,
          grabCursor: true,
          pagination: {
            el: "#mission-slider .swiper-pagination",
          },
          navigation: {
            nextEl: "#mission-slider .swiper-button-next",
            prevEl: "#mission-slider .swiper-button-prev",
          },
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          },
        });
      }, 300);
    },
    getRandomMessage() {
      const messageIndex = Math.floor(Math.random() * 3);
      return this.messages[messageIndex];
    },
  },
};
</script>
