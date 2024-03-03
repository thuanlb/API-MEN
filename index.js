import express from 'express'
import mongoose from 'mongoose'
import productRoute from './routes/product.route.js'

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//routes
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
  res.send('Hello from Node API server update')
})


mongoose.connect('mongodb+srv://thuanlb:oNWBBS6me4JfBSHn@backenddb.trtmzrg.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to database !')
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch(() => {
    console.log('Connected failed !')
  })