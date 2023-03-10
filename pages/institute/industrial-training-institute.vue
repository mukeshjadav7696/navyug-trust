<template>
  <div>
    <section class="page-banner-section">
      <div class="container">
        <h1>Maniben Pithawalla Industrial Training Institute</h1>
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
              Industrial Training Institutes (ITI) are government –run training
              institutes that offer training in various technical streams. ITI
              were established by Directorate General of Employment &amp;
              Training (DGET) Ministry of Labour &amp; Employment Union
              Government of India. The sole aim behind the establishment of the
              ITI s is to provide technical manpower to the fast emerging
              industrial sector of the developed and the developing economy.
            </p>
            <div class="columns">
              <div class="column">
                <div class="box">
                  <p class="heading">Eligibility</p>
                  <p>
                    Passed 10th class examination under 12th system of education
                    with Science and Mathematics or its equivalent.
                  </p>
                </div>
              </div>
              <div class="column">
                <div class="box">
                  <p class="heading">Level</p>
                  <p>Undergraduate</p>
                </div>
              </div>
            </div>
            <div class="section">
              <div class="divider subtitle is-size-4">Job Opportunities</div>
              <p class="notification">
                One can pursue higher studies like diploma in engineering after
                completing the engineering trading course in ITI. Specialized
                short-term courses for certain trades are also offered in
                Advanced Training Institutes (ATIs) that hone the candidates’
                skill. Many industries/ companies accept ITI graduates only as
                apprentices and they train the candidates for a period of 6
                months to 1-2 years. However, the period of training the
                admission of the candidates may vary from one company to the
                other. These candidates may be considered suitable for
                employment only after the training period. Renowned ITIs and
                ITCs have their own placement cells and candidates after the
                completion of their trades, may be directly recruited by the
                companies.
              </p>
              <p class="notification">
                ITI qualified candidates can apply for jobs in either private or
                public sector depending on the trades they are equipped with.
                Some of the trades that are much in demand are electronics,
                welder, refrigeration and air-conditioner mechanic. It is
                worthwhile to mention that electronics is the basis of almost
                every field. Therefore, it has a very good scope. Electronic
                mechanic trade graduates can find job opportunities in IT
                companies and in manufacturing units of electronics equipment.
              </p>
              <p class="notification">
                Both welders and air-conditioner mechanics have good scope both
                in India and abroad. Job openings of A/C mechanics are available
                in the different sections of the Public Service Commission (PSC)
                and in railways where they will be employed as technicians,
                instructors etc. Job opportunities for fitters are enormous in
                on shore and off shore companies such as oil and gas, factories,
                shipyards etc. Candidates with electrician trade can find
                openings in the electricity board / department for which the
                recruitment is through PSC (Public service Commission) Exams.
              </p>
              <p class="notification">
                Candidates can also find job opportunities in government
                organizations like Indian Army, Indian Navy, Air force,
                Railways, Telecom and paramilitary forces like BSF (Border
                Security Force), CRPF (Central Reserve Police Force) etc. Last
                but not the least, candidates can also be self-employed by
                setting up their own winding shops, garage, fabrication shops
                etc.
              </p>
            </div>
            <div class="divider subtitle is-size-4">Admission Process</div>
            <div class="tile is-ancestor">
              <div class="tile is-vertical">
                <div class="tile is-parent">
                  <div class="tile is-child">
                    <span class="tag is-large">AGE</span>
                    <div class="box mt-3">
                      <p>
                        The candidates of 14 - 40 years of age as on date of
                        start of admission session are eligible for admission in
                        ITI s/ ITCs
                      </p>
                      <p>
                        There is no objection to the state government/union
                        territory administration making necessary relaxation of
                        upper age limit up to 45 years in case of ex-servicemen.
                      </p>
                      <p>
                        Relaxation of upper age limit up to 45 years permissible
                        in case of war widows.
                      </p>
                      <p>
                        Widows/separated women would be allowed to join various
                        training programmers under C.T.S. up to the age of 35
                        years.
                      </p>
                      <p>
                        The upper age limit of physically handicapped candidates
                        has been relaxed by 10 years and kept as 35 years on the
                        date of start of admission session.
                      </p>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <span class="tag is-large">SELECTION</span>
                    <div class="box mt-3">
                      <p>
                        Selection of candidates for admission in Industrial
                        Training Institutes/Centres start well in advance of the
                        commencement of each session. Admission should as far as
                        possible, be completed by the date of starting of the
                        session. Where it may be necessary to continue admission
                        beyond the date of commencement of the session for
                        filling vacant seats, it should not in any case go
                        beyond one month of the date in the case of two-year
                        trades and 15 days in case of one-year trades.
                      </p>
                      <p>
                        Selection of the candidate- As per the recommendation of
                        NCVT admission in ITI s are to be made purely on merit
                        based on the marks secured by the candidate in the
                        public examination of the minimum qualification
                        prescribed for the individual trade. Where ever there is
                        no public examination at the minimum qualification level
                        the merit may be made on the marks obtained by the
                        candidate in the written examination conducted by the
                        State Directorate for the purpose of admission.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="tile is-parent">
                  <div class="tile is-child">
                    <span class="tag is-large"
                      >PROSPECTUS / PROFORMA FOR ADMISSION</span
                    >
                    <div class="box mt-3">
                      <p>
                        Performa for admission may be obtained from the
                        respective State Directorate dealing with Craftsmen
                        Training Scheme or from the Principals of the concerned
                        Industrial Training Institutes/ centers conducting
                        training programme under Craftsmen Training Scheme.
                      </p>
                      <p>
                        Start of Session : Session in ITI s starts from 1st
                        February and 1st August every year.
                      </p>
                    </div>
                  </div>
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
    headerMenu.close();
  },
  data() {
    return {
      sidebarLinks: headerMenu.sidebar,
      website: sharedData.websites.iti,
    };
  },
};
</script>
