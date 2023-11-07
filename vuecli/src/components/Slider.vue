<template>
    <section class="baner">
        <div class="banner_slider"></div>
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

</script>