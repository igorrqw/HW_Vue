<template>
    <div>
        <headerVue />
        <BlogDitails />
        <footerVue />
    </div>
</template>

<script>
import headerVue from '@/components/headerVue.vue'
import BlogDitails from '@/components/BlogDitails.vue'
import footerVue from '@/components/footerVue.vue'
export default {
    name: 'blogpage',
    components: { headerVue, BlogDitails, footerVue }
}
</script>

<style lang="scss" scoped></style>
<style lang="scss" scoped>
</style>