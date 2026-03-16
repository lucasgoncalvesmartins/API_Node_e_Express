import express from 'express'
import publicRoutes from './routes/public.js'

const app = express()

app.use(express.json())

app.use('/', publicRoutes)




app.listen(3000, () => {
    console.log('Server rodando')
})


//mongodb+srv://lucas:UjpY8bJL8VQ2SQ8i@users.dja3poh.mongodb.net/?appName=Users

