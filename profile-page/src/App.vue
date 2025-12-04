<template>
  <div class="">
    <router-view></router-view>
     <!-- <main-view></main-view> -->
  </div>
</template>

<script>
//import MainView from '../src/views/MainView.vue';
export default {
  components: {
  //  MainView,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.isMobile = window.innerWidth < 768;
  },
};
</script>

<style scoped></style>
