import app from './app'


const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml')
const fs = require("fs")
const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const server = app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listening at ${process.env.PORT || 8080}`)
})