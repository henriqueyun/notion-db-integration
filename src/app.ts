import express from 'express';
const app = express()
import 'dotenv/config'

app.use('./router')

export default app
