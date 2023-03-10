<template>
  <div>
    <section class="page-banner-section">
      <div class="container">
        <h1>C. K. Pithawalla English School</h1>
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
              Our statement
              <span class="tag is-large">"વિદ્યાવિનયતેશોભતે"</span> reflects our
              understanding and beliefs. we aim to ensure that the children at
              our school are provided with high-quality learning experiences
              based on a broad and balanced curriculum .
            </p>
            <figure class="image">
              <img src="/img/institutes/school.jpg" />
            </figure>
            <p>
              The curriculum is all about the planned activities that we
              organize in order to promote learning, personal growth and
              development . It includes not only formal requirements of the
              National/State curriculum , but also the range of extra -
              curriculum activities that the school organizes in order to enrich
              the experience of the children. It also includes the 'hidden
              curriculum' or what the children how to grow children as apositive
              and responsible citizen, who can work and co-operate with others
              while developing knowledge and skills , so that they achieve their
              true potential
            </p>
            <div class="section">
              <div class="divider subtitle is-size-4">Vision and Mission</div>
              <p>
                Our vision is to empower students to acquire, demonstrate,
                articulate, and value knowledge and skills that will support
                them, as life- long learners, to participate in and contribute
                to the global world and practice the core values of the school:
                Respect Tolerance Inclusion Excellence.
              </p>
              <div class="divider"></div>
            </div>
            <span class="tag is-info is-large"> Message From The Head </span>
            <div class="notification mt-4">
              <p>
                I am very humbled and honoured to introduce myself as the
                Principal of CK Pithawalla English School and to join this
                excellent school community. I can assure you that I will share
                all my learnings and experiences which I have gained over past
                11 years in the field of education, to our school with full
                dedication. My all team members will be caring and humbled while
                providing our students with a meaningful learning environment.
              </p>
              <p>
                I firmly believe that every child can exceed and that the
                cooperation between home and school builds trust and self-esteem
                in students. So our students can use their highest potential to
                shape their future, consequently, the future of our community
                and our nation. With my goal of advancing the culture of
                excellence here at C K Pithawalla English school, I am devoted
                to continually exploring new ideas to meet the needs of all
                students and to interact with parents and community members more
                efficiently. To conclude ,please remember that my door is always
                open to you. I sincerely welcome your conversation and inputs.
                Let us keep our students the primary focus of our work.
              </p>
              <p>Sincerely,</p>
              <p>Ms. Archana Sharma</p>
            </div>
            <div class="divider subtitle is-size-4">QUICK FACTS</div>
            <div class="section has-text-centered">
              <div class="columns is-multiline">
                <div class="column is-4-desktop is-6-mobile">
                  <div class="notification">......Sq METER CAMPUS</div>
                </div>
                <div class="column is-4-desktop is-6-mobile">
                  <div class="notification">
                    Jagruti trust logo : Founded in 1964
                  </div>
                </div>
                <div class="column is-4-desktop is-6-mobile">
                  <div class="notification">K-12 Co-educational School</div>
                </div>
                <div class="column is-4-desktop is-6-mobile">
                  <div class="notification">NCERT CURRICULUM</div>
                </div>
                <div class="column is-4-desktop is-6-mobile">
                  <div class="notification">
                    ENVIRONMENT FRIENDLY AND WOODED CAMPUS
                  </div>
                </div>
                <div class="column is-4-desktop is-6-mobile">
                  <div class="notification">
                    CLASS SIZE<br />
                    PRE-PRIMARY : 20<br />
                    PRIMARY : 32
                  </div>
                </div>
                <div class="column is-4-desktop is-6-mobile">
                  <div class="notification">
                    FACILATED WITH PITHAWALLA SPORT’S CLUB
                  </div>
                </div>
                <div class="column is-4-desktop is-6-mobile">
                  <div class="notification">AFFORDABLE FEE STRUCTURE</div>
                </div>
              </div>
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
      website: sharedData.websites.school,
    };
  },
};
</script>
