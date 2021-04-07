<template>
    <header class="test-header">
        <h2>Home</h2>
        <h2>{{$store.state.user.name}}</h2>
        <h2>Users</h2>
    </header>
</template>

<style scoped>
    .test-header {
        display: flex;
        justify-content: space-around;
        align-items: center;

        height: 100px;
        width: 100%;
        background-color:chocolate;
        color: white;
    }
</style>