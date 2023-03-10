<template>
  <header class="header-part">
    <div class="header-top-part">
      <div class="container">
        <div class="columns is-align-items-center">
          <div class="column">
            <p
              class="
                subtitle
                heading
                is-size-5 is-size-6-mobile
                has-text-weight-bold
              "
            >
              Navyug Vidyabhavan Trust
            </p>
          </div>
          <div class="column">
            <div class="logo">
              <nuxt-link to="/" v-on:click.native="removeMenuSelection()">
                <img
                  :src="'/img/icons/' + siteConfig.logo"
                  alt=""
                  width="130"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="column">
            <div class="right-contact">
              <a
                :href="
                  'tel:(' +
                  siteConfig.contact.phone.countryCode +
                  ') ' +
                  siteConfig.contact.phone.number
                "
                ><img src="/img/icons/phone.svg" alt="" width="17" />{{
                  siteConfig.contact.phone.countryCode
                }}
                {{ siteConfig.contact.phone.number }}</a
              >
              <a :href="'mailto:' + siteConfig.contact.email"
                ><img src="/img/icons/email.svg" alt="" width="20" />{{
                  siteConfig.contact.email
                }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-navbar">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="menu-mobile-bar">
            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
            <div class="icon-menu">
              <a href="/contact-us">
                <img src="/img/icons/help.svg" alt="" width="25" />
              </a>
            </div>
          </div>
          <div id="navbarBasicExample" class="navbar-menu">
            <ul>
              <li class="active">
                <nuxt-link to="/"
                  ><img
                    src="/img/icons/home-white.svg"
                    alt=""
                    width="25"
                    class="m-0"
                /></nuxt-link>
              </li>
              <li
                v-on:click="toggleNavMenu"
                v-for="(currentMenu, index) in leftSideMenu"
                :key="'leftmenu_' + index"
              >
                <nuxt-link v-if="!currentMenu.submenu" :to="currentMenu.url">{{
                  currentMenu.title
                }}</nuxt-link>
                <nuxt-link
                  v-if="currentMenu.submenu && currentMenu.submenu.length > 0"
                  :to="currentMenu.url"
                  >{{ currentMenu.title }}</nuxt-link
                >
                <ul
                  class="box"
                  v-if="currentMenu.submenu && currentMenu.submenu.length > 0"
                >
                  <li
                    v-for="(currentSubMenu, subIndex) in currentMenu.submenu"
                    :key="'leftmenu_' + index + '_submenu_' + subIndex"
                  >
                    <nuxt-link :to="currentSubMenu.url">{{
                      currentSubMenu.title
                    }}</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li
                v-for="(currentMenu, index) in rightSideMenu"
                :key="'rightmenu_' + index"
              >
                <nuxt-link v-if="!currentMenu.submenu" :to="currentMenu.url">{{
                  currentMenu.title
                }}</nuxt-link>
                <nuxt-link
                  v-if="currentMenu.submenu && currentMenu.submenu.length > 0"
                  :to="currentMenu.url"
                  >{{ currentMenu.title }}</nuxt-link
                >
                <ul
                  class="box"
                  v-if="currentMenu.submenu && currentMenu.submenu.length > 0"
                >
                  <li
                    v-for="(currentSubMenu, subIndex) in currentMenu.submenu"
                    :key="'rightmenu_' + index + '_submenu_' + subIndex"
                  >
                    <nuxt-link :to="currentSubMenu.url">{{
                      currentSubMenu.title
                    }}</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import jquery from "jquery";
import headerMenu from "~/plugins/router-list";
import siteConfig from "~/plugins/data/site-config";

export default {
  name: "Header",
  data() {
    return {
      menuToggle: false,
      quickLinks: headerMenu.quicklinks,
      rightSideMenu: headerMenu.right,
      leftSideMenu: headerMenu.left,
      siteConfig: siteConfig,
    };
  },
  mounted() {
    setTimeout(() => {
      this.initMobileMenu();
    }, 1000);
    this.$nextTick(() => {
      this.addStickyClass();
    });
  },
  methods: {
    toggleNavMenu: (currEle) => {
      if (currEle) {
      }
    },
    initMobileMenu() {
      jquery(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        jquery(".navbar-burger").toggleClass("is-active");
        jquery(".navbar-menu").toggleClass("is-active");
        jquery("body, html").toggleClass("menu-open");
      });

      if (jquery(window).width() <= 1024) {
        jquery(".navbar-menu ul > li").each(function (i) {
          if (jquery(this).has("ul").length) {
            jquery(this).find("ul").addClass("sub-menu");
            jquery(this).find("> a").after('<span class="caret-arrow"></span>');
            jquery(this).find("> .sub-menu").css("display", "none");
          }
        });
        jquery(".navbar-menu ul li .caret-arrow").click(function () {
          var catSubUl = jquery(this).next(".sub-menu");
          var catSubli = jquery(this).closest("li");
          if (catSubUl.is(":hidden")) {
            //$("#window > ul > li .sub-menu").slideUp();
            catSubUl.slideDown();
            //$('.caret').removeClass('active');
            jquery(this).addClass("active");
            catSubli.addClass("active");
          } else {
            catSubUl.slideUp();
            jquery(this).removeClass("active");
            catSubli.removeClass("active");
          }
        });
      }

      jquery(window).scroll(function () {
        if (jquery(this).scrollTop() > 30) {
          jquery(".header-part").addClass("sticky");
        } else {
          jquery(".header-part").removeClass("sticky");
        }
      });
    },
    addStickyClass() {
      jquery(window).scroll(function () {
        if (jquery(this).scrollTop() > 30) {
          jquery(".header-part").addClass("sticky");
        } else {
          jquery(".header-part").removeClass("sticky");
        }
      });
    },
    removeMenuSelection() {
      jquery("#navbarBasicExample").find("li.active").removeClass("active");
      jquery("#navbarBasicExample").find(".sub-menu").css("display", "none");
      jquery("a.navbar-burger").trigger("click");
    },
    openNavMenu() {
      // this.menuToggle = !this.menuToggle;
      // if (this.menuToggle) {
      //   document.body.classList.add("menu-open");
      //   document.documentElement.classList.add("menu-open");
      // } else {
      //   document.body.classList.remove("menu-open");
      //   document.documentElement.classList.remove("menu-open");
      // }
    },
  },
};
</script>
