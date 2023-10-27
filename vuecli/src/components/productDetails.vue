<template>
    <div>
        <div v-for="product in products" :key="product.id">
            <p>Название: {{ product.name }}</p>
            <p>Цена: {{ getPrice(product) }}</p>
            <p v-if="product.available">Статус: Available</p>
            <p v-else>Статус: Out of stock</p>
            <br>
        </div>
    </div>
</template>
  
<script>
export default {

    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'iphone',
                    price: '549.99',
                    available: true
                },
                {
                    id: 2,
                    name: 'Samsung',
                    price: '459',
                    available: false
                },
                {
                    id: 3,
                    name: 'Xiaomi',
                    price: '300',
                    available: true
                },
            ]
        };
    },

    methods: {
        getPrice(product) {
            return `$ ${product.price}`
        }
    },

    props: {
        available: Boolean,
    }
}
</script>
  
<style lang="scss" scoped></style>