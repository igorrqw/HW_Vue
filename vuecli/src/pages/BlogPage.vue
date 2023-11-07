<template>
    <div>
        <headerVue />
        <Blog />
        <footerVue />
    </div>
</template>

<script>
import headerVue from '@/components/headerVue.vue'
import Blog from '@/components/Blog.vue'
import footerVue from '@/components/footerVue.vue'
export default {
    name: 'blogpage',
    components: { headerVue, Blog, footerVue }
}
</script>

<style lang="scss" scoped></style>