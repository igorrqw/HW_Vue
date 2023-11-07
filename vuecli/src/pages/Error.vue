<template>
    <headerVue/>
    <error404/>
</template>

<script>
import error404 from '@/components/error404.vue';
import headerVue from '@/components/headerVue.vue'

export default {
    name: "404",
    components: { headerVue, error404 },
    data() {
        return {

        };
    },
};
</script>
<style scoped lang="scss"></style>