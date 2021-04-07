<template>
    <section>
        <input type="text" v-model="id">
        <button @click="goToId()">Click here</button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            id: ''
        }
    },
    methods: {
        goToId() {
            this.$router.push('/users/' + this.id)
        }
    }
}
</script>