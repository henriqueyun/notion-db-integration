import app from './app'

const server = app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listening at ${process.env.PORT || 8080}`)
})