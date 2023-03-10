<template>
  <div>
    <section class="page-banner-section">
      <div class="container">
        <h1>Trustees @ Navyug Vidyabhavan Trust</h1>
      </div>
    </section>
    <section class="introduction">
      <div class="container">
        <div class="section">
          <div class="columns">
            <!--
            <div class="column is-3">
              <sidebar
                v-bind:sidebarLinks="sidebarLinks"
                v-bind:title="'Navyug Vidyabhavan Trust'"
              />
            </div>
            --->
            <div class="column">
              <!-- Start: Content -->
              <div class="columns">
                <div class="column is-3">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-fullwidth">
                        <img
                          :src="trustPresident.profile_pic"
                          :alt="trustPresident.name"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="content is-medium has-text-justified">
                    <p class="title" v-html="trustPresident.name"></p>
                    <p
                      class="subtitle"
                      v-html="trustPresident.designation_description"
                    ></p>
                    <p class="subtitle" v-html="trustPresident.designation"></p>
                  </div>
                  <div class="content is-medium is-italic">
                    <span class="tag is-info is-large">
                      {{ trustPresident.message_title }}
                    </span>
                    <blockquote class="mt-4">
                      {{ trustPresident.message_detail }}
                    </blockquote>
                  </div>
                </div>
              </div>
              <div class="divider">
                <p class="title">Board of Trustees</p>
              </div>
              <div class="columns is-multiline">
                <div
                  class="column is-half is-full-mobile"
                  v-for="(trustee, index) in trusteesData"
                  :key="'trustee_' + index"
                >
                  <div class="card">
                    <div class="card-content">
                      <div class="media mb-0">
                        <div class="media-left">
                          <figure class="image is-128x128 is-clipped">
                            <img
                              :src="trustee.profile_pic"
                              class="staff-profile-pic"
                              :alt="trustee.name"
                            />
                          </figure>
                        </div>
                        <div class="media-content">
                          <div class="content is-medium has-text-justified">
                            <p class="title" v-html="trustee.name"></p>
                            <p
                              class="subtitle"
                              v-html="trustee.designation"
                            ></p>
                          </div>
                        </div>
                      </div>
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
import trusteesDetails from "~/plugins/data/trustees.json";

export default {
  name: "AboutTrustees",
  components: {
    Sidebar,
  },
  data() {
    return {
      sidebarLinks: headerMenu.sidebar,
      trusteesData: {},
      trustPresident: {},
    };
  },
  mounted() {
    this.trustPresident = this.getPresidentOfTrust();
    this.trusteesData = this.getBoardOfTrust();
    headerMenu.close()
  },
  methods: {
    getPresidentOfTrust() {
      return trusteesDetails.trusteelist.find(
        (currentTrustee) => currentTrustee.is_president
      );
    },
    getBoardOfTrust() {
      return trusteesDetails.trusteelist.filter(
        (currentTrustee) => !currentTrustee.is_president
      );
    },
  },
};
</script>
