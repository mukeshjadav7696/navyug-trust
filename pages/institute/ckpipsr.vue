<template>
  <div>
    <section class="page-banner-section">
      <div class="container">
        <h1>
          C. K. Pithawalla Inst. of Pharmaceutical Science &amp;
          Research
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
            <h4 class="title pb-4">
              Institute Profile
            </h4>
            <p>
              C.K Pithawalla Institute Of Pharmaceutical Science &amp; Research
              is being managed by the Navyug Vidyabhavan Trust which was founded
              in February, 1965.Within a short span of its operation, the
              college has provided all the necessary facilities to help the
              students which includes a well eastablished library containing a
              large number of books, reference books, technical &amp; general
              magazines.Mr. C.K. Pithawalla has been the driving force for the
              setting up of this college named after him and is continually
              drawing inspiration from him. This institute of learning in
              particular, like many others, owes a great deal to his vision,
              understanding and missionary zeal right from its inception to its
              bloassoming.
            </p>
            <figure class="image">
              <img src="/img/institutes/pharmacy.jpg" />
            </figure>
            <div class="section">
              <div class="divider subtitle is-size-4">Vision and Mission</div>
              <div class="section notification">
                Committed to promote high quality education, training and
                research in pharmacy to meet the needs of tomorrow’s healthy
                society.
              </div>
              <div class="divider"></div>
            </div>
            <h4 class="title">Objectives</h4>
            <ul>
              <li>
                Surat is the most industrialized city in the state of Gujarat
                today. It is well known all over the world for its diamonds,
                jari and manmade textiles. Situated on the banks of the river
                Tapi, it is the fastest growing industrial city in the country.
                Besides this, it is also fast emerging as the source of dyes,
                chemicals and intermediates, textile machinery, plastic
                technology as well as agro-based industries. This attract
                skilled, semiskilled and unskilled workmen from all over the
                country.
              </li>
              <li>
                The pace of growth of the city accelerated during the past 60
                years and Surat became a dominant center of commercial activity
                in South Gujarat. This in its wake brought some problemsalso,
                mainly in the field of higher education.
              </li>
              <li>
                The demand for facilities of higher education grew rapidly. It
                was primarily to correct the imbalance between demand and supply
                that Navayug Vidyabhavan Trust was founded in February, 1965.
                The aims and objectives of the Trust are to provide facilities
                for higher education to students without consideration of caste,
                community, sex or religion and to undertake research in the
                exact and social science.
              </li>
              <li>
                The trust was registered as Public Education Trust under the
                Bombay Public Trust ACT, 1950 and allotted registration No.
                1268. The truth also received exemption under section 80(G) of
                the Income-Tax Act for donations to it.
              </li>
              <li>
                After Independence our Government has tried to host up technical
                education in the country. Gujarat State has witnessed tremendous
                development and is now the fastest growing state in India. The
                land-marks of Gujarat's Industrial progress are GNFC-World's
                largest single Stream Ammonia and Urea Plant, GSFC, Reliance ,
                IFFCO, KRIBHCO, ONGC, IPCL, NTPC, ESSAR, number of petrochemical
                and Ancillary Industries, Country's biggest Manmade Textile
                Industrial Units. Also a few more refineries and Power Plants in
                the disciplines of Chemical Engineering, Instrumentation and
                control, Electronics, Computer and Textile Technology is in
                demand in large number. Gujarat also has Asia's largest Chemical
                Industrial Estate at Ankleshwar where all prominent companies
                have set up their units. Vapi Industrial Sector as also the ATUL
                Complex in Balsar district are also growing at a rapid pace.
              </li>
              <li>
                Electronics, Communication and Computerization are new links in
                the chain of industrial development are also being built up at a
                fast rate. Special steps are being taken up to make for lost
                time by the Government. Consumer Electronics, Industrial
                electronics, Communication, Technology, Microprocessors and
                Computer are main pillars of development. Space application
                Center, ISRO-based at Ahmedabad, Physical Research Laboratory
                are also other organisations absorbing these engineers. The
                electronics Industrial Estate at Gandhinagar has also tremendous
                potential for absorbing trained personnel.
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
      website: sharedData.websites.pharmacy,
    };
  },
};
</script>
