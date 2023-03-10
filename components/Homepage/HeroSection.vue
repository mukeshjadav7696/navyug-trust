<template>
  <section class="p-4">
    <div class="container is-fluid px-0">
      <div class="columns">
        <div class="column is-6">
          <div class="hero-slider-container">
            <div id="hero-slider" class="swiper-container">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(sliderDetail, index) in sliderImages"
                  :key="'sliderImage_' + index"
                  :style="
                    'background-image: url(' + sliderDetail.image_url + ')'
                  "
                >
                  <div class="hero-slider-content">
                    <div id="site-label">
                      <p class="has-text-white has-text-weight-bold p-3 box">
                        {{ sliderDetail.title }} {{ sliderDetail.subtitle }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Add Arrows -->
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column">
              <div class="trust_head">
                <h2
                  class="has-text-centered"
                  style="font-size: 22px; padding-bottom: 15px; color: #033b77"
                >
                  Shree C.K. Pithawalla
                </h2>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="trust_img">
                    <img
                      src="/img/trustees/chotudada.jpg"
                      style="
                        height: 170px;
                        width: 132px;
                        display: flex;
                        margin: auto;
                      "
                    />
                    <p class="has-text-centered pb-1" style="font-size: 15px">
                      Ex President (2-5-1990 to 1-3-2015),<br />NAYYUG
                      VIDYABHAVAN TRUST, SURAT.
                    </p>
                    <p class="pb-2">
                      Mr. C.K.Pithawala had been the driving force for the
                      setting up of this college named after and continuously
                      drawing inspiration from him.
                    </p>
                    <p>
                      We proudly take note of his multipronged educational and
                      social services rendered selflessly and in the sprint of
                      education. This institute of learning in particular, like
                      many others, owes a great deal to his vision,
                      understanding and missionary zeal right from its inception
                      to its blossoming. This institute has been the fruition of
                      his marathon efforts and huge financial aid without which
                      this dream would have remained
                    </p>
                  </div>
                </div>
                <div class="column">
                  <p class="pb-2">
                    unrealized His contributions in various spheres of
                    Education, Sports, Relief, Culture, Health and Religion have
                    been significant and praiseworthy.
                  </p>
                  <p class="pb-2">
                    Mr. C.K. Pithawalla’s benevolence, charity and philanthropic
                    nature, simple humanity and unassuming personality can be
                    conspicuously seen in many charita- ble and humanitarion
                    tasks he has carried out, so successfully hugely benefitting
                    the people at large. These would have surely remaind
                    unaccomplished without the exalted use of wealth at his
                    disposal and spirit of selfless service.
                  </p>
                  <p>
                    His doing "Karma "without expecting any return or material
                    reward or seek- ing fame out of generous contributions in
                    the noble and laudable cause of educa- tion is summed up in
                    the message of the "Gita" which he has well imbibed. In a
                    true Gandhian sense he is a "Trustee" or a "Keeper" of
                    possession which he has been using for the benefit of the
                    society. In that he is a true votary of Gandhian ideals and
                    values of life.
                  </p>
                </div>
              </div>
            </div>
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
  name: "HeroSection",
  data() {
    return {
      sliderImages: [
        {
          title: "C. K. Pithawala College",
          subtitle: "of Engineering and Technology",
          image_url: "/img/home-page/slider/si-01.jpg",
        },
        {
          title: "C. K. Pithawala College",
          subtitle: "of Engineering and Technology",
          image_url: "/img/home-page/slider/si-02.jpg",
        },
        {
          title: "C. K. Pithawala College",
          subtitle: "of Engineering and Technology",
          image_url: "/img/home-page/slider/si-03.jpg",
        },
      ],
      services: sharedData.services,
    };
  },
  // call fetch only on client-side
  fetchOnServer: false,
  mounted() {
    this.heroSwiperSection();
  },
  methods: {
    heroSwiperSection() {
      setTimeout(() => {
        var swiper = new Swiper("#hero-slider", {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: "#hero-slider .swiper-button-next",
            prevEl: "#hero-slider .swiper-button-prev",
          },
        });
      }, 300);
    },
  },
};
</script>