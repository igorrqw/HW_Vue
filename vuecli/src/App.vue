<template>
   <headerVue/>
   <homePage/>
   <!-- <blogDitails/> -->
   <!-- <blog/> -->
   <footerVue/>

</template>

<script>
import headerVue from './components/headerVue.vue';
import homePage from './components/homePage.vue';
import footerVue from './components/footerVue.vue';
import blogDitails from './components/blogDitails.vue';
import blog from './components/blog.vue';
export default {
  components:{headerVue, homePage, footerVue, blogDitails, blog}
};
</script>

<style lang="scss">

</style>
