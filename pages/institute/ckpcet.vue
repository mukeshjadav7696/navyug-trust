<template>
  <div>
    <section class="page-banner-section">
      <div class="container">
        <h1>
          C. K. Pithawalla College of Engineering &amp; Technology
        </h1>
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
            <h4 class="subtitle pb-4">
              Institute Profile
            </h4>
            <p>
              C. K. Pithawalla College of Engineering and Technology is a self
              financed Institute which started its functioning in December, 1998
              affiliated initally with Veer Narmad South Gujarat University,
              Surat and now with Gujrat Technological University, Ahmedabad. C.
              K. Pithawalla College of Engineering And Technology is being
              managed by the Navyug Vidyabhavan Trust which was founded in
              February, 1965. Within a short span of its operation, the college
              has provided all the necessary facilities to help the students.
            </p>
            <figure class="image">
              <img src="/img/institutes/engineering.jpg" />
            </figure>
            <div class="section">
              <div class="divider subtitle is-size-4">Vision and Mission</div>
              <div class="columns is-multiline">
                <div class="column is-4">
                  <p class="title is-4">Vision</p>
                  <p class="subtitle is-4 is-italic has-text-primary mt-3">
                    To prepare engineering graduates with sound fundamental
                    knowledge and professional competence to meet the
                    requirement of engineering profession locally as well as
                    globally.
                  </p>
                </div>
                <div class="column is-8">
                  <p class="title is-4">Mission</p>
                  <blockquote class="is-italic">
                    To provide state of the art teaching learning process.
                  </blockquote>
                  <blockquote class="is-italic">
                    To provide conducive environment and necessary
                    infrastructure to students and staff for academic and
                    research.
                  </blockquote>
                  <blockquote class="is-italic">
                    To create effective interaction with industries, other
                    institutes and government organizations for mutual benefits
                    and promoting research activities.
                  </blockquote>
                  <blockquote class="is-italic">
                    To enhance the co-curricular skill of students for
                    developing professional competence and thereby enhancing
                    employability and promoting entrepreneurship.
                  </blockquote>
                  <blockquote class="is-italic">
                    To enhance teaching skill and technical knowledge of
                    faculties.
                  </blockquote>
                </div>
              </div>
              <div class="divider"></div>
            </div>
            <h4 class="subtitle">The Institute</h4>
            <ul>
              <li>
                The prevailing intake capacity in Engineering Colleges in
                Gujarat State is very much inadequate to cater to these demands.
                hence, the rejection rate of students seeking admission in the
                state colleges is very high. As a result of this, number of
                students have to seek admission in colleges in the state of
                Maharashtra, Karnataka and other states.
              </li>
              <li>
                Looking to the above facts the trustees and especially SHRI C.
                K. Pithawalla are very keen to establish a technical institute
                under the aegis of the trust to partly take upon itself the
                responsibility of providing technical education. (C.K.Pithawalla
                College of Engineering and Technology is a self financed
                Institute which has start functioning from the academic
                year:1998-99.)
              </li>
              <li>
                The management has vowed to run the institute with the
                professional attention to each student to develop their overall
                personality and thereby making them more compatible to the
                Industrial standards.
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
    headerMenu.close()
  },
  data() {
    return {
      sidebarLinks: headerMenu.sidebar,
      website: sharedData.websites.engineering,
    };
  },
};
</script>
