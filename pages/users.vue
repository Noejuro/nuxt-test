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
        title: 'Conoce nuestro servicio de agua purificada en casa ❱ Bebbia.com',
        meta: [
            { property: 'og:locale', content: 'es_MX' },
            { property: 'og:title', content: 'Conoce nuestro servicio de agua purificada en casa ❱ Bebbia.com' },
            { name: 'description', content: 'Conoce cómo con tan solo $299 al mes puedes obtener agua purificada en casa. Olvídate de las botellas convencionales. Contrata el servicio de purificación.' },
            // Google / Search Engine Tags
            { itemprop: 'name', content: 'Conoce nuestro servicio de agua purificada en casa ❱ Bebbia.com' },
            { itemprop: 'description', content: 'Conoce cómo con tan solo $299 al mes puedes obtener agua purificada en casa. Olvídate de las botellas convencionales. Contrata el servicio de purificación.' },
            { itemprop: 'image', content: 'http://bebbia.com/wp-content/uploads/2020/03/open-graph-facebook-bebbia.jpg' },
            // Facebook Meta Tags
            { property: 'og:url', content: 'https://bebbia.com/agua-purificada-en-casa-01' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'Conoce nuestro servicio de agua purificada en casa ❱ Bebbia.com' },
            { property: 'og:description', content: 'Conoce cómo con tan solo $299 al mes puedes obtener agua purificada en casa. Olvídate de las botellas convencionales. Contrata el servicio de purificación.' },
            { property: 'og:image', content: 'https://bebbia.com/wp-content/uploads/2020/03/open-graph-facebook-bebbia.jpg' },
            { property: 'article:modified_time', content: '2021-01-11T19:36:20+00:00' },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            // Twitter Meta Tags
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Conoce nuestro servicio de agua purificada en casa ❱ Bebbia.com' },
            { name: 'twitter:description', content: 'Tener agua purificada en casa nunca fue tan sencillo. Conoce el servicio de purificación de agua de Bebbia.com. Incluye Purificador de agua y Mantenimiento.' },
            { name: 'twitter:image', content: 'https://bebbia.com/wp-content/uploads/2020/03/open-graph-facebook-bebbia.jpg' },
        ]
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