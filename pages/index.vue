<template>
	<v-app>
		<v-col>
			<v-row justify="center">
				Hi
				<v-icon dark right > mdi-cancel </v-icon>
			</v-row>
			<v-row justify="center">
				<v-carousel v-model="model">
					<v-carousel-item
					v-for="(color, i) in colors"
					:key="color"
					>
					<v-sheet
						:color="color"
						height="100%"
						tile
					>
						<v-row
						class="fill-height"
						align="center"
						justify="center"
						>
						<div class="display-3">
							Slide {{ i + 1 }}
						</div>
						</v-row>
					</v-sheet>
					</v-carousel-item>
				</v-carousel>
			</v-row>
			<v-row>
				<form @submit.prevent="onSubmit">
					<input autocomplete="true" placeholder="Email" type="email" v-model="email">
					<input autocomplete="current-password" placeholder="Password" type="password" v-model="password">
					<recaptcha />
					<button type="submit">Sign In</button>
				</form>
			</v-row>
		</v-col>
	</v-app>
</template>

<script>
export default {
  data() {
    return {
		email: '',
		password: '',
		dialog: false,
		model: 0,
		colors: [
			'primary',
			'secondary',
			'yellow darken-2',
			'red',
			'orange',
		],
    }
  },
  head: {
        title: '>Bebbia.com ❱ Conoce el Servicio de Purificación de Agua',
        meta: [
            { property: 'og:locale', content: 'es_MX' },
            { property: 'og:title', content: 'Bebbia.com ❱ Conoce el Servicio de Purificación de Agua' },
            { name: 'description', content: 'Tener agua purificada en casa nunca fue tan sencillo. Conoce el servicio de purificación de agua de Bebbia.com. Incluye Purificador de agua y Mantenimiento.' },
            // Google / Search Engine Tags
            { itemprop: 'name', content: 'Bebbia.com ❱ Conoce el Servicio de Purificación de Agua' },
            { itemprop: 'description', content: 'Tener agua purificada en casa nunca fue tan sencillo. Conoce el servicio de purificación de agua de Bebbia.com. Incluye Purificador de agua y Mantenimiento.' },
            { itemprop: 'image', content: 'http://bebbia.com/wp-content/uploads/2020/03/open-graph-facebook-bebbia.jpg' },
            // Facebook Meta Tags
            { property: 'og:title', content: 'Bebbia.com ❱ Conoce el Servicio de Purificación de Agua' },
            { property: 'og:description', content: 'Tener agua purificada en casa nunca fue tan sencillo. Conoce el servicio de purificación de agua de Bebbia.com. Incluye Purificador de agua y Mantenimiento.' },
            { property: 'og:image', content: 'https://bebbia.com/wp-content/uploads/2020/03/open-graph-facebook-bebbia.jpg' },
            // Twitter Meta Tags
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Bebbia.com ❱ Conoce el Servicio de Purificación de Agua' },
            { name: 'twitter:description', content: 'Tener agua purificada en casa nunca fue tan sencillo. Conoce el servicio de purificación de agua de Bebbia.com. Incluye Purificador de agua y Mantenimiento.' },
            { name: 'twitter:image', content: 'https://bebbia.com/wp-content/uploads/2020/03/open-graph-facebook-bebbia.jpg' },
        ]
    },
  methods: {
	  async onSubmit() {
		try {
			const token = await this.$recaptcha.getResponse()
			console.log('ReCaptcha token:', token)

			// send token to server alongside your form data

			// at the end you need to reset recaptcha
			await this.$recaptcha.reset()
			this.$router.push('/users/');
		} catch (error) {
			console.log('Login error:', error)
		}
	},
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
