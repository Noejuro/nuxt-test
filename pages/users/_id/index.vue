<template>
    <div>
        <h1>Your ID param is {{$route.params.id}} </h1>
    </div>
</template>

<script>
export default {
    validate(data) {
        console.log(data);
        return data.params.id == 1;
    }
}
</script>