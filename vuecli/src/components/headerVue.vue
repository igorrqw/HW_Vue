<template>
    <header class="header center">
      <div class="header__logo">
        <img :src="require('../assets/img/Logo.jpg')" alt="logo"/>
        <p class="logo__text">Interno</p>
      </div>
      <div class="header__menu">
        <a class="header__link" href="#">Home</a>
        <a class="header__link" href="#">Project</a>
        <a class="header__link" href="blog.vue">Blog</a>
      </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.center {
  padding-left: calc(50% - 1200px / 2);
  padding-right: calc(50% - 1200px / 2);
}
.header {
  margin-top: 53px;
  margin-bottom: 57px;
  font-family: DM Serif Display;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &__logo {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  &__logo img {
    width: 34px;
    height: 34px;
  }
  &__logo p {
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    color: #292f36;
  }
  &__menu {
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    display: flex;
    gap: 48px;
  }
  &__link {
    color: #292f36;
  }
}

</style>