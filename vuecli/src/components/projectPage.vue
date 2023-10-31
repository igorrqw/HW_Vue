<template>
    <section class="art-news">
        <div class="bakgraungPhoto">
        </div>
        <div class="banner">
            <div class="banner__intro">
                <h1 class="banner__intro-title">Articles & News</h1>
                <p class="banner__intro-text">Home / Blog</p>
            </div>
        </div>
    </section>
    <!-- ________________________buttoms -->
    <section>
        <div class="buttons_project center">
            <button class="buttonCards" @click="changeArticle(item.id)" v-for="item in buttoms" :key="item.id">{{
                item.name_button }}</button>

        </div>
    </section>
    <section id="app" class="project-cards center">
        <div class="project-card" v-for="item in currentArticle" :key="item.id">
            <img class="cards-photo" :src="item.cards_photo" alt="">
            <div class="for-star">
                <svg class="cards-star" @click="clickstarlike" xmlns="http://www.w3.org/2000/svg" width="36" height="35"
                    viewBox="0 0 36 35" fill="none">
                    <g filter="url(#filter0_d_993_156)">
                        <path
                            d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                            fill="#ffff" />
                    </g>
                    <defs>
                        <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="/">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div class="text-writing">
                <p class="title-description">{{ item.title_description }}</p>
                <p class="title-decor">{{ item.title_decor }}</p>
                <svg class="card-buttom" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                    fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    </section>
    <div class="pages-links center">
        <a class="link-circles" href="">01</a>
        <a class="link-circles" href="">02</a>
        <a class="link-circles" href="">03</a>
        <a class="link-circles" href=""><svg width="53" height="52" viewBox="0 0 53 52" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg></a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            articles: [
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo2.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo3.jpg'), title_description: 'Classic Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo4.jpg'), title_description: 'Minimal Bedroom table', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo5.jpg'), title_description: 'Modern Medroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo6.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo7.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo9.jpg'), title_description: 'System Table', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo8.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },

                { id: 'BedRoom', cards_photo: require('../assets/img/project/Photo4.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'BedRoom', cards_photo: require('../assets/img/project/Photo3.jpg'), title_description: 'Classic Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'BedRoom', cards_photo: require('../assets/img/project/Photo2.jpg'), title_description: 'Minimal Bedroom table', title_decor: 'Decor / Artchitecture' },
                { id: 'BedRoom', cards_photo: require('../assets/img/project/Photo5.jpg'), title_description: 'Modern Medroom', title_decor: 'Decor / Artchitecture' },
                { id: 'BedRoom', cards_photo: require('../assets/img/project/Photo7.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'BedRoom', cards_photo: require('../assets/img/project/Photo6.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'BedRoom', cards_photo: require('../assets/img/project/Photo9.jpg'), title_description: 'System Table', title_decor: 'Decor / Artchitecture' },
                { id: 'BedRoom', cards_photo: require('../assets/img/project/Photo8.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },

                { id: 'Kitchan', cards_photo: require('../assets/img/project/Photo7.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Kitchan', cards_photo: require('../assets/img/project/Photo8.jpg'), title_description: 'Classic Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Kitchan', cards_photo: require('../assets/img/project/Photo4.jpg'), title_description: 'Minimal Bedroom table', title_decor: 'Decor / Artchitecture' },
                { id: 'Kitchan', cards_photo: require('../assets/img/project/Photo5.jpg'), title_description: 'Modern Medroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Kitchan', cards_photo: require('../assets/img/project/Photo6.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Kitchan', cards_photo: require('../assets/img/project/Photo2.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Kitchan', cards_photo: require('../assets/img/project/Photo9.jpg'), title_description: 'System Table', title_decor: 'Decor / Artchitecture' },
                { id: 'Kitchan', cards_photo: require('../assets/img/project/Photo3.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },


                { id: 'LivingArea', cards_photo: require('../assets/img/project/Photo4.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'LivingArea', cards_photo: require('../assets/img/project/Photo2.jpg'), title_description: 'Classic Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'LivingArea', cards_photo: require('../assets/img/project/Photo3.jpg'), title_description: 'Minimal Bedroom table', title_decor: 'Decor / Artchitecture' },
                { id: 'LivingArea', cards_photo: require('../assets/img/project/Photo5.jpg'), title_description: 'Modern Medroom', title_decor: 'Decor / Artchitecture' },
                { id: 'LivingArea', cards_photo: require('../assets/img/project/Photo6.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'LivingArea', cards_photo: require('../assets/img/project/Photo7.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'LivingArea', cards_photo: require('../assets/img/project/Photo8.jpg'), title_description: 'System Table', title_decor: 'Decor / Artchitecture' },
                { id: 'LivingArea', cards_photo: require('../assets/img/project/Photo9.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },

            ],

            currentArticle: [
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo7.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo5.jpg'), title_description: 'Classic Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo4.jpg'), title_description: 'Minimal Bedroom table', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo3.jpg'), title_description: 'Modern Medroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo6.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo2.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo9.jpg'), title_description: 'System Table', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom', cards_photo: require('../assets/img/project/Photo8.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },
            ],

            buttoms: [
                { id: 'Bathroom', name_button: 'Bathroom' },
                { id: 'BedRoom', name_button: 'Bed Room' },
                { id: 'Kitchan', name_button: 'Kitchan' },
                { id: 'LivingArea', name_button: 'Living Area' },
            ],

            clicked: false

        };
    },
    methods: {
        changeArticle(id) {
            this.currentArticle = this.articles.filter((el) => el.id === id);
        },
        clickstarlike(event) {
            event.target.style.fill = "#FFA928"
        },
    },
}
</script>

<style lang="scss" scoped>
.center {
    padding-left: calc(50% - 1200px / 2);
    padding-right: calc(50% - 1200px / 2);
}

.banner {
    background-image: url("../assets/img/project/Baner1.jpg");
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

.buttonCards {
    cursor: pointer;
    padding: 26px 66px;
    margin-left: -66px;
    margin-right: -66px;

    color: #292F36;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    line-height: 125%;
    letter-spacing: 0.36px;

    &:hover {
        color: #FFF;
        border-radius: 18px;
        background: #CDA274;
    }

    .active {
        color: #FFF;
        border-radius: 18px;
        background: #CDA274;
    }
}

.buttons_project {
    display: flex;
    justify-content: center;
    gap: 133px;
    border-radius: 18px;
    align-items: center;

    margin-top: 200px;
    margin-bottom: 61px;



    &-button {
        cursor: pointer;
        padding: 26px 66px;
        margin-left: -66px;
        margin-right: -66px;

        color: #292F36;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        line-height: 125%;
        letter-spacing: 0.36px;

        &:hover {
            color: #FFF;
            border-radius: 18px;
            background: #CDA274;
        }
    }

    .active {
        color: #FFF;
        border-radius: 18px;
        background: #CDA274;
    }
}

.project-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.title-description {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
}

.link-circles {
    width: 65px;
    height: 65px;
    display: flex;
    border-radius: 50%;
    border: 1px solid #CDA274;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}

.project-card {
    position: relative;
}

.for-star {
    position: absolute;
    top: 0px;
    right: 0px;
}

.pages-links {
    display: flex;
    justify-content: center;
    margin-top: 61px;
    gap: 10px;
}
</style>