<template>
    <div>
        <section class="baner center">
      <div class="baner__wrap">
        <div class="baner__wrap-content">
          <h1 class="baner__title">Let Your Home Be Unique</h1>
          <p class="baner__text">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
          <a href="#" class="baner__button">
            <div class="baner__button-text">
              <p>Get Started</p>
              <img :src="require('../assets/img/Vector.svg')" alt="row_left"/>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="project center">
      <h2 class="project__title">Follow Our Projects</h2>
      <p class="project__text">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
      <div class="project__item-wrap">
        <div class="project__item">
          <img  class="project__item-img-1"  :src="require('../assets/img/image_item__1.jpg')" alt="image 1"/>
          <div class="project__item-content">
            <div class="project__text-wrap">
              <h2 class="project__item-title">Modern Kitchan</h2>
              <p class="project__item-text">Decor / Artchitecture</p>
            </div>
            <img :src="require('../assets/img/row_left__item.svg')" alt="row_left__item"/>
          </div>
        </div>
        <div class="project__item">
          <img class="project__item-img-2" :src="require('../assets/img/image_item__2.jpg')" alt="image 2" />

          <div class="project__item-content">
            <div class="project__text-wrap">
              <h2 class="project__item-title">Modern Kitchan</h2>
              <p class="project__item-text">Decor / Artchitecture</p>
            </div>
            <img :src="require('../assets/img/row_left__item.svg')" alt="row_left__item"/>
          </div>
        </div>
        <div class="project__item">
          <img class="project__item-img-3" :src="require('../assets/img/image_item__3.jpg')" alt="image 3"/>   
          <div class="project__item-content">
            <div class="project__text-wrap">
              <h2 class="project__item-title">Modern Kitchan</h2>
              <p class="project__item-text">Decor / Artchitecture</p>
            </div>
            <img :src="require('../assets/img/row_left__item.svg')" alt="row_left__item"/>
          </div>
        </div>
        <div class="project__item">
          <img :src="require('../assets/img/image_item__4.jpg')"
            alt="image 4"
            class="project__item-img-4"
          />
          <div class="project__item-content">
            <div class="project__text-wrap">
              <h2 class="project__item-title">Modern Kitchan</h2>
              <p class="project__item-text">Decor / Artchitecture</p>
            </div>
            <img :src="require('../assets/img/row_left__item.svg')" alt="row_left__item" />
          </div>
        </div>
      </div>
    </section>
    <section class="counter center">
      <div class="counter__wrap">
        <div class="counter__item">
          <h2 class="counter__item-title">12</h2>
          <p class="counter__item-text">Years Of Experiance</p>
        </div>
        <div class="counter__item">
          <h2 class="counter__item-title">85</h2>
          <p class="counter__item-text">Success Project</p>
        </div>
        <div class="counter__item">
          <h2 class="counter__item-title">15</h2>
          <p class="counter__item-text">Active Project</p>
        </div>
        <div class="counter__item">
          <h2 class="counter__item-title">95</h2>
          <p class="counter__item-text">Happy CUstomers</p>
        </div>
      </div>
    </section>
    <section class="blog center">
      <h2 class="blog__title">Articles & News</h2>
      <p class="blog__text">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <div class="blog__items">
        <div class="blog__item">
          <div class="blog__item-image">
            <img :src="require('../assets/img/blog1.jpg')" alt="blog-image-1" />
            <p class="blog__img-text">Kitchan Design</p>
          </div>
          <h2 class="blog__item-title">
            Let’s Get Solution For Building Construction Work
          </h2>
          <div class="blog__wrap-text">
            <p class="blog__item-text">26 December,2022</p>
            <img :src="require('../assets/img/row_left__blog.svg')" alt="row_left_blog" />
          </div>
        </div>

        <div class="blog__item blog__item-select">
          <div class="blog__item-image">
            <img :src="require('../assets/img/blog2.jpg')" alt="blog-image-2" />
            <p class="blog__img-text">Living Design</p>
          </div>
          <h2 class="blog__item-title">
            Low Cost Latest Invented Interior Designing Ideas.
          </h2>
          <div class="blog__wrap-text">
            <p class="blog__item-text">22 December,2022</p>
            <img :src="require('../assets/img/row_left__blog2.svg')" alt="row_left_blog" />
          </div>
        </div>

        <div class="blog__item">
          <div class="blog__item-image">
            <img :src="require('../assets/img/blog3.jpg')" alt="blog-image-3" />
            <p class="blog__img-text">Interior Design</p>
          </div>
          <h2 class="blog__item-title">
            Best For Any Office & Business Interior Solution
          </h2>
          <div class="blog__wrap-text">
            <p class="blog__item-text">25 December,2022</p>
            <img :src="require('../assets/img/row_left__blog.svg')" alt="row_left_blog" />
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

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

.baner {
  &__wrap {
    height: 758px;
    background-image: url("../assets/img/Header_photo.jpg");
    background-repeat: no-repeat;
    border-radius: 75px;
  }
  &__wrap-content {
    padding: 208px 715px 0 52px;
  }
  &__title {
    margin-bottom: 18px;
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
  &__text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
    margin-bottom: 21px;
  }
  &__button-text {
    width: 220px;
    padding: 26px 0;
    background-color: #292f36;
    border-radius: 18px;
    display: flex;
    gap: 10px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    & p {
      color: #fff;
      font-family: Jost;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 125%;
      letter-spacing: 0.36px;
    }
  }
}

.project {
  margin-top: 96px;
  margin-bottom: 96px;
  &__title {
    margin-bottom: 8px;
    color: #292f36;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }
  &__text {
    padding-left: calc((1200px - 737px) / 2);
    padding-right: calc((1200px - 737px) / 2);
    color: #4d5053;
    text-align: center;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
  &__item-wrap {
    margin-top: 93px;
    display: grid;
    column-gap: 100px;
    row-gap: 56px;
    grid-template-columns: repeat(2, 550px);
  }
  &__item-img-1 {
    border-top-right-radius: 75px;
  }
  &__item-img-2 {
    border-top-left-radius: 75px;
  }
  &__item-img-3 {
    border-bottom-right-radius: 75px;
  }
  &__item-img-4 {
    border-bottom-left-radius: 75px;
  }
  &__item-content {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__item-title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
  }
  &__item-text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}

.counter {
  padding-top: 151px;
  padding-bottom: 151px;
  background-color: #f4f0ec;
  &__wrap {
    padding-left: 59px;
    padding-right: 59px;
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__item {
    text-align: center;
    display: flex;
    row-gap: 16px;
    flex-direction: column;
    & {
      display: inline-block;
      border-right: 1px solid #cda274;
      padding-right: 60px;
    }
    &:last-child {
      border-right: none;
    }
  }
  &__item-title {
    color: #cda274;
    font-family: "DM Serif Display";
    font-size: 85px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1.7px;
  }
  &__item-text {
    color: #4d5053;
    font-family: "Jost";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}

.blog {
  margin-top: 96px;
  margin-bottom: 96px;
  &__title {
    margin-bottom: 12px;
    color: #292f36;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }
  &__text {
    padding-left: calc((1200px - 811px) / 2);
    padding-right: calc((1200px - 811px) / 2);
    margin-bottom: 52px;
    color: #4d5053;
    text-align: center;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(3, 382px);
    gap: 27px;
  }
  &__item {
    border: 1px solid #e7e7e7;
    border-radius: 62px;
    padding: 21px;
    &-select {
      background: #f4f0ec;
    }
  }
  &__item-image {
    position: relative;
    & img {
      border-top-left-radius: 62px;
      border-top-right-radius: 62px;
      margin-bottom: 21px;
    }
    & p {
      position: absolute;
      top: 228px;
      left: 20px;
      border-radius: 8px 8px 8px 0px;
      background: #fff;
      padding: 4px 10px 8px 11px;
      color: #4d5053;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }
  &__item-title {
    margin-bottom: 30px;
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
  }
  &__wrap-text {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__item-text {
    color: #4d5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
}

.footer {
  margin-top: 96px;
  padding-bottom: 134px;
  display: flex;
  gap: 101px;
  &__logo {
    width: 393px;
    &-text {
      margin-top: 18px;
      margin-bottom: 31px;
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
    &-icon {
      display: flex;
      gap: 54px;
    }
  }

  &__menu {
    width: 125px;
    display: flex;
    flex-direction: column;
    &-title {
      margin-bottom: 9px;
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }
    &-link {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 300%;
      letter-spacing: 0.22px;
    }
  }
  &__services {
    width: 120px;
  }
  &__contact {
    width: 258px;
    &-title {
      margin-bottom: 26px;
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }
    &-text {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
      &-email {
        color: #4d5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0.22px;
        line-height: 300%;
      }
    }
  }
}

</style>