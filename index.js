import express from 'express'
import mongoose from 'mongoose'
import productRoute from './routes/product.route.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const URI = process.env.DB_HOST
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//routes
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
  res.send('Hello from Node API server update')
})


mongoose.connect(URI)
  .then(() => {
    console.log('Connected to database !')
    app.listen(3000, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  })
  .catch(() => {
    console.log('Connected failed !')
  })