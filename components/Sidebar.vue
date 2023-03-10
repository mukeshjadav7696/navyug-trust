<template>
  <aside class="menu">
    <p class="menu-label">
      {{ title }}
    </p>
    <ul class="menu-list">
      <li v-for="(sidebarLink, index) in sidebarLinks"
          :key="'sidebarLink' + index">
          <a v-if="sidebarLink.outside" :href="sidebarLink.url" target="__blank">{{ sidebarLink.title }}</a>
          <nuxt-link v-else :to="sidebarLink.url">{{ sidebarLink.title }}</nuxt-link>
          </li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: "Sidebar",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    sidebarLinks: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>