<template>
    <div>
        <headerVue />
        <Project />
        <footerVue />
    </div>
</template>

<script>
import headerVue from '@/components/headerVue.vue'
import Project from '@/components/Project.vue'
import footerVue from '@/components/footerVue.vue'
export default {
    name: 'Projectpage',
    components: { headerVue, Project, footerVue }
}
</script>

<style lang="scss" scoped></style>