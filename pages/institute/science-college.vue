<template>
  <div>
    <section class="page-banner-section">
      <div class="container">
        <h1>Navyug Science College</h1>
      </div>
    </section>
    <section class="introduction">
      <div class="container">
        <div class="section">
          <div class="content is-medium has-text-justified">
            <a
              v-if="website"
              :href="website"
              class="button is-pulled-right is-info is-outlined"
              target="_blank"
            >
              Website
            </a>
            <h4 class="subtitle pb-4">Institute Profile</h4>
            <p>
              Navyug Vidyabhavan Trust came into existence in the year 1965 as a
              brain child of Late Prin. Dr. D. G. Vashi, an eminent educationist
              and visionary.
            </p>
            <p>
              In those days, the institutes of higher education in various
              disciplines managed by the Sarvajanik Education Society were
              pocketed on the eastern bank of the river Tapti and the areas on
              the opposite side of the river were not fully developed. The
              students of this area and those residing in the nearby villages
              found it difficult to commute everyday to reach their respective
              colleges as the means of trasport were scant.
            </p>
            <p>
              Late Prin. Dr. D. G. Vashi, then a professor of Statistics at
              Bilimora College, foresaw the need of an institute of the higher
              education in this area. He was neither rich nor influential,
              politically or otherwise, but had a strong sense of
              self-conviction. He succeeded in materializing his dream into
              reality and started Arts and Science College in this campus
              situated on Rander Road, surat. in the year 1966 with a meagre
              strength of 300 students.
            </p>
            <p>
              The Navyug Vidyabhavan Trust was registered under Bombay Public
              Trust Act 1950 as a Public Eduction Trust on 21 February 1965. Two
              separate buildings for arts and science faculties were built on
              approximetely 20000sq. ft. land area. As South Gujarat University
              ( now Veer Narmad South Gujarat University) was non-existent at
              that time, the college was affiliated to the Gujarat University,
              Ahmedabad. Even though the Trust did not have adequate funds for
              the smooth running of the college, the Local Inquiry Committee of
              Late Chimanbhai Patel and Dr. Y. G. Naik recommended for
              affiliation to the Gujarat University looking at the noble cause
              of the Trust.
            </p>
            <p>
              The strength of students increased rapidly and the Trustees
              foresaw the need to open a separate faculty because of the growing
              requirement of the people of this area. After four years of its
              inception. Science College was bifurcated from Arts and became an
              independent unit and Dr. D. G. Vashi became the first Principal of
              Navyug Science College in 1970. At that time, the college was
              offering Graduation in Chemistry, Statitics and Post graduation in
              Statistics as well. In the year 1979, Shri. P. J. Sukharamwala
              took over as the Principal of the college. Due to financial
              crisis, the whole institution was handed over to eminent
              businessman and social worker, Shri. C. K. Pithawala in 1982.
              Since then the colleges of this campus have been managed by Shri.
              C. K. Pithawala and his associate trustees. In 1991. college got
              affiliation for starting Physics as the Principal Subject. In the
              year 1992, Dr. M. D. Ankhiwala took over the charge as the
              Principal of the college. During his tenure, the institution
              started a PG centre for Organic Chemistry in the year 1998. Dr. A.
              S. Patel became the Principal in the year 2004. Under his dynamic
              leadership, the college has grown from strength to strength and
              has carved out a niche for itself in the field of education.
            </p>
            <figure class="image">
              <img src="/img/institutes/science.jpg" />
            </figure>
            <div class="section">
              <div class="divider subtitle is-size-4">Vision and Mission</div>
              <div class="columns is-multiline">
                <div class="column is-4">
                  <p class="title is-4">Vision</p>
                  <p class="subtitle is-4 is-italic has-text-primary mt-3">
                    Science is Life
                  </p>
                </div>
                <div class="column is-8">
                  <p class="title is-4">Mission</p>
                  <blockquote class="is-italic">
                    Our mission is to nurture an individual with scientific
                    tenner and attitude, imbibed with the spirit of nationalism
                    and responsible citizenship through value based education.
                    To this end, management and faculty commit themselves to the
                    pursuit of excellnce in science through discovery, knowledge
                    acquision, dissemination and extension of frontiers of
                    knowledge in the interest of society a large.
                  </blockquote>
                </div>
              </div>
              <div class="divider"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
import headerMenu from "~/plugins/router-list";
import sharedData from "~/plugins/data/shared-data.json";


export default {
  name: "ArtsCollege",
  components: {
    Sidebar,
  },
  mounted() {
    headerMenu.close()
  },
  data() {
    return {
      sidebarLinks: headerMenu.sidebar,
      website: sharedData.websites.science,
    };
  },
};
</script>
