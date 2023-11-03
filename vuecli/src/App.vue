<template>
  <headerVue />
  <!-- <homePage/>
   <blogDitails/>
   <blog/> -->
  <projectDitails />
  <!-- <projectPage /> -->
  <footerVue />
  <!-- <productDetails/> -->
</template>

<script>
import headerVue from './components/headerVue.vue';
import homePage from './components/homePage.vue';
import footerVue from './components/footerVue.vue';
import blogDitails from './components/blogDitails.vue';
import blog from './components/blog.vue';
import productDetails from './components/productDetails.vue';
import projectPage from './components/projectPage.vue';
import projectDitails from './components/projectDitails.vue';
export default {
  components: {
    headerVue, homePage, footerVue, blogDitails, blog, productDetails, projectPage, projectDitails
  }
};
</script>

<style lang="scss"></style>
