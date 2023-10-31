<template>
  <headerVue />
  <!-- <homePage/>
   <blogDitails/>
   <blog/> -->
  <projectPage />
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
export default {
  components: {
    headerVue, homePage, footerVue, blogDitails, blog, productDetails, projectPage
  }
};
</script>

<style lang="scss"></style>
