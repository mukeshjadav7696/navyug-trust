<template>
  <main>
    <AboutSection />
    <ServiceSection />
    <MissionSection />
    <InstituteSection />
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
import InstituteSection from "~/components/Homepage/InstituteSection.vue";

export default {
  name: "Homepage",
  components: {
    AboutSection,
    ServiceSection,
    MissionSection,
    InstituteSection,
  },
  mounted() {
    headerMenu.close();
  },
};
</script>
