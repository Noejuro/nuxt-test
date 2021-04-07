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
