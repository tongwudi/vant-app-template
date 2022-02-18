<template>
  <div id="app">
    <van-nav-bar v-if="$route.meta.navShow" :title="$route.meta.title" />

    <keep-alive>
      <router-view />
    </keep-alive>

    <footer-bar v-show="$route.meta.footShow" @changeBar="changeBar" />
  </div>
</template>

<script>
import footerBar from "components/FooterBar";
export default {
  methods: {
    changeBar(index) {
      console.log(index);
    }
  },
  components: {
    footerBar
  }
};
</script>