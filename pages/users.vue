<template>
    <div class="container-users" >
        <Header />
        <nuxt-child style="flex-grow: 1;" />
        <div style="width: 100%; height: 200px; background-color: cadetblue; align-item: center; justify-content: center">
            Footer
        </div>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Users',
        meta: [
            { hid: 'description', name: 'description', content: 'Hey! im Users description' }
        ],
    },
}
</script>

<style scoped>
    .container-users { 
        height: 100vh;
        display: -webkit-flex; ;
        flex-flow: column;
        flex-direction: column;
    }
</style>