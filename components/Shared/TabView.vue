<template>
  <div>
    <div class="tabs is-toggle is-fullwidth" id="tabs">
      <ul class="m-0">
        <li 
        v-for="(tabDetail, index) in tabList" :key="'tabHead_' + index"
        :data-tab="index + 1" v-on:click="tabActive = (index + 1)" :class="tabActive == (index + 1) ? 'is-active': ''">
          <a>
            <span>
              {{ tabDetail.title }}
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div id="tab-content">
      <div 
      v-for="(tabDetail, index) in tabList" :key="'tabContent_' + index"
      :class="tabActive == (index + 1) ? 'is-active tab-content': 'tab-content'" :data-content="(index + 1)">
        <blockquote>
            {{ tabDetail.heading }}
        </blockquote>
        <div class="columns set is-multiline">
          <div
            class="column is-half is-bordered"
            v-for="(contentDetail, index) in tabDetail.contentList"
            :key="'contentDetail_' + index"
          >
            {{contentDetail.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "TabView",
  props: {
    tabList: {
      type: Array,
      required: true,
      default: []
    }
  },
  data() {
    return {
      tabActive: 1
    };
  },
  async fetch() {
  },
  // call fetch only on client-side
  fetchOnServer: false
};
</script>
