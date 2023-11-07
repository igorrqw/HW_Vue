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
                    content_block_img: require('../assets/img/image_item__1.jpg'),
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: require('../assets/img/Quotes.jpg'),
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/3.jpg'),
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict3: require('../assets/img/3.jpg'),
                    content_block_img2: require('../assets/img/kitchen2.jpg'),
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
             
                {
                    id: 'Bedroom',
                    article_title: 'Let’s Get Solution for Building Bedroom',
                    content_block_img: require('../assets/img/bedroom1.jpg'),
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: require('../assets/img/Quotes.jpg'),
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/3.jpg'),
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict3: require('../assets/img/3.jpg'),
                    content_block_img2: require('../assets/img/bedroom2.jpg'),
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 'Building',
                    article_title: 'Let’s Get Solution for Building home',
                    content_block_img: require('../assets/img/Building1.jpg'),
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: require('../assets/img/Quotes.jpg'),
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/3.jpg'),
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict3: require('../assets/img/3.jpg'),
                    content_block_img2: require('../assets/img/Building2.jpg'),
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 'Architecture',
                    article_title: 'Let’s Get Solution for Architecture',
                    content_block_img: require('../assets/img/Architecture1.jpg'),
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: require('../assets/img/Quotes.jpg'),
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/3.jpg'),
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict3: require('../assets/img/3.jpg'),
                    content_block_img2: require('../assets/img/Architecture2.jpg'),
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 'Kitchen Planning',
                    article_title: 'Let’s Get Solution for Architecture',
                    content_block_img: require('../assets/img/KitchenPlanning1.jpg'),
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: require('../assets/img/Quotes.jpg'),
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/3.jpg'),
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict3: require('../assets/img/3.jpg'),
                    content_block_img2: require('../assets/img/KitchenPlanning2.jpg'),
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 'Bathroom',
                    article_title: 'Let’s Get Solution for Kitchen Planning',
                    content_block_img: require('../assets/img/bathroom1.jpg'),
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: require('../assets/img/Quotes.jpg'),
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/3.jpg'),
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict3: require('../assets/img/3.jpg'),
                    content_block_img2: require('../assets/img/bathroom2.jpg'),
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
            ],
            currentArticle: [
                {
                    id: 'Kitchen',
                    article_title: 'Let’s Get Solution for Building Construction Work',
                    content_block_img: require('../assets/img/kitchen2.jpg'),
                    date_article: '26 December,2022',
                    navigation_home_interior: 'Interior / Home / Decore',
                    article_text1:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum possimus est beatae aliquam quod autem, dolorum cupiditate tenetur reiciendis nulla officiis voluptatem accusamus repudiandae. Sit harum doloribus maiores, suscipit tenetur optio blanditiis aperiam nostrum? Vitae est quisquam aperiam accusamus iure odit illum error a quidem porro nam neque nostrum excepturi similique illo, et cum eaque optio hic dolorem maxime eos. Dolorem nam aliquam voluptatem velit voluptates dolores perferendis corrupti!",
                    article_text:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: require('../assets/img/Quotes.jpg'),
                    article_title2: 'Design sprints are great',
                    article_text2:
                        'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_text1:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
                    sprint_pict1: require('../assets/img/1.jpg'),
                    sprint_text2:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/2.jpg'),
                    sprint_text3:
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    sprint_pict2: require('../assets/img/3.jpg'),
                    content_block_img2: require('../assets/img/photo_ditail1.jpg'),
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