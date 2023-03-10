<template>
  <footer class="footer-part">
    <div class="footer-bottom">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="footer-help">
              <h6>
                <a href="javascript:;"
                  ><img src="/img/icons/help.svg" alt="" width="25" /> Need
                  Help?</a
                >
              </h6>
              <p>
                <a href="javascript:;">Privacy Policy</a>
                <span
                  >© Navyug Vidyabhavan Trust. <br />
                  All rights reserved.</span
                >
              </p>
            </div>
          </div>
          <div class="column is-6">
            <div class="footer-about has-text-justified">
              <p>
                The Navayug Vidyabhavan Trust was founded in February, 1965. The
                aims and objectives of the Trust are to provide facilities for
                higher education to students without consideration of caste,
                community, sex or religion and to undertake research in the
                exact and social science. The trust was registered as Public
                Education Trust under the Bombay Public Trust ACT, 1950 and
                allotted registration No. 1268.
              </p>
            </div>
          </div>
          <div class="column">
            <div class="footer-contact">
              <p>
                <a :href="'mailto:' + siteConfig.contact.email"
                  ><img src="/img/icons/email-white.svg" alt="" width="22" />
                  {{ siteConfig.contact.email }}</a
                >
              </p>
              <p>
                <a
                  :href="
                    'tel:(' +
                    siteConfig.contact.phone.countryCode +
                    ') ' +
                    siteConfig.contact.phone.number
                  "
                  ><img src="/img/icons/phone-white.svg" alt="" width="21" />{{
                    siteConfig.contact.phone.countryCode
                  }}
                  {{ siteConfig.contact.phone.number }}</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import siteConfig from "~/plugins/data/site-config";

export default {
  name: "Footer",
  data() {
    return {
      siteConfig: siteConfig,
    };
  },
};
</script>