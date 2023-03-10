<template>
  <div>
    <section class="page-banner-section">
      <div class="container">
        <h1>Navyug Arts College</h1>
      </div>
    </section>
    <section class="introduction">
      <div class="container">
        <div class="section">
          <!-- Start: Content -->
          <div class="content is-medium has-text-justified">
            <a
              v-if="website"
              :href="website"
              class="button is-pulled-right is-info is-outlined"
              target="_blank"
            >
              Website
            </a>
            <h4 class="subtitle pb-4">
              Institute Profile
            </h4>
            <p>
              The institution was established in the year 1966 on the other bank
              of river Tapti in the area today known as Rander Road. Those were
              the days when the population of Surat city was increasing by leaps
              and bounds, but there was only one Arts College in the city to
              provide opportunities of higher education in Arts stream.
            </p>
            <figure class="image">
              <img src="/img/institutes/arts.jpg" />
            </figure>
            <div class="section">
              <div class="divider subtitle is-size-4">Vision and Mission</div>
              <p>
                Navyug Arts College came into subsistence with an objective
                mainly to fulfill the need of higher education institution of a
                fast developing city with the following vision and mission:
              </p>
              <div class="section notification">
                <ul>
                  <li>
                    To provide opportunities of higher education in Arts stream
                    to a large section of society.
                  </li>
                  <li>
                    To make no discrimination on the basis of caste, dogma,
                    belief, group or gender and to render easy access to all who
                    aspire for higher studies.
                  </li>
                  <li>
                    To promote an over all development of the students to enable
                    them to face the challenges of the world.
                  </li>
                  <li>
                    To encourage the research work amongst the students as well
                    as the faculties.
                  </li>
                  <li>
                    To not only equip its learners with academic excellence but
                    to inculcate in them human values like love, sympathy,
                    probity, patriotism, love for the nation and fellow human
                    beings, etc and to make them better citizens.
                  </li>
                </ul>
              </div>
              <div class="divider"></div>
            </div>
            <h4 class="subtitle">Objectives</h4>
            <ul>
              <li>
                To develop their creative dexterity by conveying them the
                knowledge of various subjects of Arts stream.
              </li>
              <li>
                To equip them with academic brilliance and required talent to
                make them competitive for present day job-market.
              </li>
              <li>To bring environmental awareness in them.</li>
            </ul>
            <p>
              It has been our humble endeavour to reach our goals and objectives
              through the teaching of the fixed syllabus.
            </p>
            <ul>
              <li>
                We impart the knowledge of various languages like Gujarati,
                English, Hindi which provides different language skills like
                grammar, poetry, prose, composition, comprehensions,
                appreciation, essay writing etc.
              </li>
              <li>
                Students are exposed to vivid local, national and internal
                trends in the field of economics through their study of
                economics as their core subject.
              </li>
              <li>
                We teach environmental studies as an inter-disciplinary subject
                to make our learner aware of problems of environmental issues.
              </li>
              <li>
                Teaching of English at UG levels help the student to develop
                communicative skills and acquire proficiency in the language.
              </li>
            </ul>
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
    headerMenu.close();
  },
  data() {
    return {
      sidebarLinks: headerMenu.sidebar,
      website: sharedData.websites.arts,
    };
  },
};
</script>
