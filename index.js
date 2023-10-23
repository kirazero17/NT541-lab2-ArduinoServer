require('dotenv').config()
const express = require('express')

const Router_Check = require('./routes/checkconfig')
const Router_Upload = require('./routes/upload')
const cors = require('cors')


const app = express()

app.use(cors({
  origin: "http://localhost:5000"
}))

app.use(express.json())
app.use('/api/check', Router_Check)
app.use('/api/upload', Router_Upload)

app.listen(5000, () => console.log(`server started on port 5000`))