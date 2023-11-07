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
</style>