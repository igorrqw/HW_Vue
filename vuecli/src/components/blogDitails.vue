<template>
    <div>
        <section class="baner">
            <div class="banner_ditail"></div>
        </section>

        <div id="app" class="article-block center">
            <div class="wraper">   
	<div>
    	<div class="content-block" v-for="item in currentArticle" :key="item.id">
	            <h2 class="article-title">{{item.article_title}}</h2>
	            <img class="content-block-img" :src="item.content_block_img" alt="">
	            <div class="inline-date">
	                <p class="date-article">{{item.date_article}}</p>
	                <p class="navigation-home-interior">{{item.navigation_home_interior}}</p>
	            </div>
	            <p class="article-text1">{{item.article_text1}}</p>
	            <p class="article-text">{{item.article_text}}</p>
	            <img class="quote" :src="item.quote" alt="">
	            <h2 class="article-title">{{item.article_title2}}</h2>
	            <p class="article-text">{{item.article_text2}}</p>
	            <p class="sprint-text"> <img class="sprint-pict" :src="item.sprint_pict" alt="">{{item.sprint_text}}</p>
	            <p class="sprint-text"> <img class="sprint-pict" :src="item.sprint_pict2" alt="">{{item.sprint_text2}}
	            </p>
	            <p class="sprint-text"> <img class="sprint-pict" :src="item.sprint_pict3" alt="">{{item.sprint_text3}}
	            </p>
	            <img class="content-block-img" :src="item.content_block_img2" alt="">
	            <p class="article-text">{{item.article_text2}}</p>
	    </div>
    </div>
        <div class="content-tags">
            <p class="tag-text">Tags</p>
			<div class="content-buttons">
                <button class="tag-buttom" @click="changeArticle(item.id)" v-for="item in buttons" :key="item.id">{{item.namebutton}}</button>
			</div>
        </div>
</div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                {
                    id: 'Kitchen',
                    article_title: 'Let’s Get Solution for Building Construction Work',
                    content_block_img: 'img/photo_ditail1.jpg',
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: 'img/Quotes.jpg',
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/3.jpg',
                    content_block_img2: 'img/kitchen2.jpg',
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 'Bedroom',
                    article_title: 'Let’s Get Solution for Building Bedroom',
                    content_block_img: 'img/bedroom1.jpg',
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: 'img/Quotes.jpg',
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/3.jpg',
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict3: 'img/3.jpg',
                    content_block_img2: 'img/bedroom2.jpg',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 'Building',
                    article_title: 'Let’s Get Solution for Building home',
                    content_block_img: 'img/Building1.jpg',
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: 'img/Quotes.jpg',
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/3.jpg',
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict3: 'img/3.jpg',
                    content_block_img2: 'img/Building2.jpg',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 'Architecture',
                    article_title: 'Let’s Get Solution for Architecture',
                    content_block_img: 'img/Architecture1.jpg',
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: 'img/Quotes.jpg',
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/3.jpg',
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict3: 'img/3.jpg',
                    content_block_img2: 'img/Architecture2.jpg',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 'Kitchen Planning',
                    article_title: 'Let’s Get Solution for Architecture',
                    content_block_img: 'img/KitchenPlanning1.jpg',
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: 'img/Quotes.jpg',
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/3.jpg',
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict3: 'img/3.jpg',
                    content_block_img2: 'img/KitchenPlanning2.jpg',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 'Bathroom',
                    article_title: 'Let’s Get Solution for Kitchen Planning',
                    content_block_img: 'img/bathroom1.jpg',
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: 'img/Quotes.jpg',
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/3.jpg',
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict3: 'img/3.jpg',
                    content_block_img2: 'img/bathroom2.jpg',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
            ],
            currentArticle: [
                {
                    id: 'Kitchen',
                    article_title: 'Let’s Get Solution for Building Construction Work',
                    content_block_img: 'img/kitchen2.jpg',
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: 'img/Quotes.jpg',
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: 'img/1.jpg',
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/2.jpg',
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: 'img/3.jpg',
                    content_block_img2: 'img/photo_ditail1.jpg',
                },],
            buttons: [
                { id: 'Kitchen', namebutton: 'Kitchen' },
                { id: 'Bedroom', namebutton: 'Bedroom' },
                { id: 'Building', namebutton: 'Building' },
                { id: 'Architecture', namebutton: 'Architecture' },
                { id: 'Kitchen Planning', namebutton: 'Kitchen Planning' },
                { id: 'Bathroom', namebutton: 'Bathroom' },
            ],
        };
    },
    methods: {
        changeArticle(id) {
            this.currentArticle = this.articles.filter((el) => el.id === id);
        },
    },
}
</script>

<style lang="scss" scoped>

.center {
  padding-left: calc(50% - 1200px / 2);
  padding-right: calc(50% - 1200px / 2);
}
.banner_ditail {
    background-image: url("../assets/img/baner_ditail.jpg");
    height: 356px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.article-title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 11px;
}

.wraper {
    display: flex;
    margin-top: 160px;
    gap: 52px;
}

.content-block-img {
    width: 810px;
    height: 606.667px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.inline-date {
    display: flex;
    flex-direction: row;
    margin-bottom: 48px;
}

.tag-text {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}

.date-article {
    margin-right: 480px;
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.navigation-home-interior {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.article-text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    text-align: justify;
    margin-bottom: 35px;
    margin-top: 20px;
}

.article-text1 {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    margin-bottom: 30px;
    text-align: justify;
}

.quote {
    margin-bottom: 27px;
    width: 810px;
}

.sprint-text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.sprint-pict {
    margin-right: 20px;
}

.content-block-img {
    margin-top: 44px;
}

.content-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 24px;
}

.content-tags {
    min-width: 345px;
}

.tag-buttom {
    display: flex;
    border-radius: 10px;
    color: #292F36;

    padding: 9px 30px;


    border: unset;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

.tag-buttom:active {
    color: #ffffff;
    background: #292F36;
}

/* ____________footer */
/* _____________footer */
.footer_content {
    margin-bottom: 134px;
}</style>