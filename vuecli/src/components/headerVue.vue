<template>
    <header class="header center">
      <div class="header__logo">
        <img :src="require('../assets/img/Logo.jpg')" alt="logo"/>
        <p class="logo__text">Interno</p>
      </div>
      <div class="header_nav">
                <router-link to="/">Home</router-link>
                <router-link to="/Project">Project</router-link>
                <router-link to="/Blog">Blog</router-link>
      </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
</style>