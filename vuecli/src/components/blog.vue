<template>
    <section class="banner center">
        <div class="banner__intro">
            <h1 class="banner__intro-title">Articles & News</h1>
            <p class="banner__intro-text">Home / Blog</p>
        </div>
    </section>
    <section class="latest-post center">
        <h2 class="latest-post__title">Latest Post</h2>
        <div class="latest-post__wrap">
            <img class="latest-post__img" :src="require('../assets/img/latest.jpg')" alt="latest-post-img" />
            <div class="latest-post__content">
                <h3 class="latest-post__content-title">
                    Low Cost Latest Invented Interior Designing Ideas
                </h3>
                <p class="latest-post__content-text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                    dignissim maximus.posuere in.Contrary to popular belief.
                </p>
                <p class="latest-post__content-text">
                    Lorem Ipsum is not simply random text. It has roots in a piece of
                    classica.
                </p>
                <div class="latest-post__content-wrap">
                    <p class="latest-post__content-data">26 December, 2022</p>
                    <img :src="require('../assets/img/row_left__blog.svg')" alt="row_left_blog" />
                </div>
            </div>
        </div>
    </section>
    <section class="blog center">
        <h2 class="blog__title-left">Articles & News</h2>
        <div class="blog__items">
            <div v-for="article in articles" class="blog__item">
                <div class="blog__item-image">
                    <img :src="article.image" :alt="article.image" />
                    <p class="blog__img-text">{{ article.imgText }}</p>
                </div>
                <h2 class="blog__item-title">{{ article.itemTitle }}</h2>
                <div class="blog__wrap-text">
                    <p class="blog__item-text">{{ article.itemData }}</p>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                            <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="count__page">
            <div class="count__page-wrap">
                <a href="#" class="count__page-number">
                    <p class="count__page-number-text">01</p>
                </a>
                <a href="#" class="count__page-number">
                    <p class="count__page-number-text">02</p>
                </a>
                <a href="#" class="count__page-number">
                    <p class="count__page-number-text">03</p>
                </a>
                <a href="#">
                    <svg class="count__page-svg" xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                        viewBox="0 0 53 52" fill="none">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                {
                    image: require("../assets/img/blog1.jpg"),
                    imgText: "Kitchan Design",
                    itemTitle: "Let’s Get Solution For Building Construction Work",
                    itemData: "26 December,2022",
                },
                {
                    image: require("../assets/img/blog2.jpg"),
                    imgText: "Living Design",
                    itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
                    itemData: "22 December,2022",
                },
                {
                    image: require("../assets/img/blog3.jpg"),
                    imgText: "Interior Design",
                    itemTitle: "Best For Any Office & Business Interior Solution",
                    itemData: "25 December,2022",
                },
                {
                    image: require("../assets/img/blog4.jpg"),
                    imgText: "Kitchan Design",
                    itemTitle: "Let’s Get Solution For Building Construction Work",
                    itemData: "26 December,2022",
                },
                {
                    image: require("../assets/img/blog5.jpg"),
                    imgText: "Living Design",
                    itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
                    itemData: "22 December,2022",
                },
                {
                    image: require("../assets/img/blog6.jpg"),
                    imgText: "Interior Design",
                    itemTitle: "Best For Any Office & Business Interior Solution",
                    itemData: "25 December,2022",
                },
            ],

        }
    }
}
</script>

<style lang="scss" scoped>
.blog {
  &__items {
    display: grid;
    grid-template-columns: repeat(3, 382px);
    gap: 27px;
  }
  &__wrap-text {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
}
.banner {
  background-image: url("../assets/img/baner.jpg");
  height: 356px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  &__intro {
    text-align: center;
    background: #fff;
    padding: 41px 78px;
    border-top-left-radius: 37px;
    border-top-right-radius: 37px;
    &-title {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 50px;
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
    }
  }
}

.latest-post {
  &__title {
    margin-top: 200px;
    margin-bottom: 27px;
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }
  &__wrap {
    border: 1px solid #e7e7e7;
    display: flex;
    gap: 62px;
    padding: 22px;
    border-radius: 62px;
    align-items: center;
  }
  &__img {
    border-radius: 50px;
  }
  &__content {
    width: 489px;
    &-title {
      margin-bottom: 22px;
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
    }
    &-text {
      margin-bottom: 41px;
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
    }
    &-data {
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
}

.count__page {
  margin-top: 51px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  &-wrap {
    display: flex;
    gap: 20px;
  }
  &-number {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 1px #cda274 solid;
    width: 52px;
    height: 52px;
    border-radius: 52px;
    &-text {
      color: #292f36;
      font-family: familyText;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      text-transform: capitalize;
    }
    &:hover {
      background: #f4f0ec;
      border: none;
      width: 54px;
      height: 54px;
    }
  }
  &-svg:hover {
    fill: #f4f0ec;
    & circle {
      stroke: none;
    }
  }
}

</style>