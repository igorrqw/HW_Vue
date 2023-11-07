<!-- <template>
    <section class="baner">
        <div class="banner_ditail"></div>
    </section>
    <div class="project-details__intro">
        <div class="project-details__intro-content"></div>
    </div>
    <div class="project-details center">
        <div v-for="info in getProjectInfo" class="project-details__content">
            <h2 class="project-details__heading">{{ info.heading }}</h2>
            <div class="project-details__text-box">
                <p class="project-details__text">{{ info.firstparagraph }}</p>
                <p class="project-details__text">{{ info.secondparagraph }}</p>
            </div>
        </div>
    </div>

    <swiper :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <img class="img-permission" :src="require('../assets/img/SliderPhoto.png')" alt="logo" />
        </swiper-slide>
        <swiper-slide>
            <img class="img-permission" :src="require('../assets/img/latest.jpg')" alt="logo" />
        </swiper-slide>
        <swiper-slide>
            <img class="img-permission" :src="require('../assets/img/Header_photo.jpg')" alt="logo" />
        </swiper-slide>
    </swiper>
</template>

<script>

import { mapGetters } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export default {
    computed: mapGetters(['getProjectInfo']),

    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
}

</script> -->

<template>
    <headerVue/>
    <Slider/>
    <footerVue/>
</template>

<script>
import headerVue from '@/components/headerVue.vue'
import Slider from '@/components/Slider.vue';
import footerVue from '@/components/footerVue.vue';


export default {
    name: "ProjectDitails",
    components: { headerVue, Slider, footerVue },
    data() {
        return {

        };
    },
};
</script>
<style scoped lang="scss"></style>

<style lang="scss" scoped>
.center {
    padding-left: calc(50% - 1200px / 2);
    padding-right: calc(50% - 1200px / 2);
}

.banner_ditail {
    background-image: url("../assets/img/baner3.jpg");
    height: 356px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.project-details {
    display: flex;
    justify-content: center;

}

.project-details__content {
    width: 450px;
}

body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 1285px;
    height: 910px;
    object-fit: cover;
    border-radius: 10%;
}
</style>