<template>
  <div>
    <section class="page-banner-section">
      <div class="container">
        <h1>Contact @ Navyug Vidyabhavan Trust</h1>
      </div>
    </section>
    <section class="">
      <div class="container is-fluid">
        <div class="section">
          <div class="columns">
            <div class="column has-text-centered is-3">
              <div class="notification">
                <span class="icon">
                  <i class="fas fa-briefcase"></i>
                </span>
                <p class="heading">ADDRESS</p>
                <p class="content is-medium">
                  Opposite Surat Airport, <br />
                  Behind DPS School, <br />
                  Near Malvan Mandir, <br />
                  Dumas Road, <br />
                  Surat - 395007.
                </p>
              </div>
              <div class="notification">
                <span class="icon">
                  <i class="fas fa-phone-alt"></i>
                </span>
                <p class="heading">CALL US</p>
                <p class="content is-medium">
                  +91 63550 55839,<br />+91 63550 62275
                </p>
              </div>
              <div class="notification">
                <span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <p class="heading">SEND AN EMAIL</p>
                <p class="content is-medium">
                  ckpcet@yahoo.co.in <br />contact@ckpcet.ac.in
                </p>
              </div>
              <div class="notification">
                <span class="icon">
                  <i class="fas fa-calendar-week"></i>
                </span>
                <p class="heading">TIMINGS</p>
                <p class="content is-medium">8:30 AM to 4:10 PM</p>
              </div>
            </div>
            <div class="column">
              <div id="map">
                <h6 class="title">Suggested Routes</h6>
                <figure class="image">
                  <img src="/img/routes.png" />
                </figure>
                <a
                  class="button is-info mt-4"
                  href="https://goo.gl/maps/tbJVinE8joDNvqbZ6"
                  target="blank"
                >
                  <h6 class="">Google Directions</h6>
                </a>
              </div>
            </div>
            <div class="column">
              <h6 class="title">Map</h6>
              <div id="gmap">
                <iframe
                  width="100%"
                  height="400"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=c.+k.+pithawalla+college+of+engineering+and+technology&amp;ie=UTF8&amp;hq=c.+k.+pithawalla+college+of+engineering+and+technology&amp;hnear=&amp;t=m&amp;cid=63648453459975488&amp;ll=21.151596,72.718678&amp;spn=0.064039,0.102825&amp;z=13&amp;iwloc=A&amp;output=embed"
                >
                </iframe>
                <a
                  class="button is-info is-pulled-right"
                  href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=c.+k.+pithawalla+college+of+engineering+and+technology&amp;ie=UTF8&amp;hq=c.+k.+pithawalla+college+of+engineering+and+technology&amp;hnear=&amp;t=m&amp;cid=63648453459975488&amp;ll=21.151596,72.718678&amp;spn=0.064039,0.102825&amp;z=13&amp;iwloc=A"
                  target="_blank"
                  >View Larger Map</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import headerMenu from "~/plugins/router-list";
export default {
  name: "Contactus",
  mounted() {
    headerMenu.close();
  },
};
</script>
