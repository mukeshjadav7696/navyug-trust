<template>
  <main>
    <AboutSection />
    <ServiceSection />
    <MissionSection />
    <InstituteSection />
    <ModalSection />
    <!-- 
    <hero-section />
    <img-with-description />
    -->
  </main>
</template>

<script>
import headerMenu from "~/plugins/router-list";
import AboutSection from "~/components/Homepage/AboutSection.vue";
import ServiceSection from "~/components/Homepage/ServiceSection.vue";
import MissionSection from "~/components/Homepage/MissionSection.vue";
import ModalSection from "~/components/Homepage/ModalSection.vue";
import InstituteSection from "~/components/Homepage/InstituteSection.vue";

export default {
  name: "Homepage",
  components: {
    AboutSection,
    ServiceSection,
    MissionSection,
    InstituteSection,
    ModalSection,
  },
  mounted() {
    headerMenu.close();
  },
};
</script>
