import 'express-async-errors'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import connectDB from './db/connect.js'

import authRouter from './routes/authRoutes.js'

declare var process : {
    env: {
      MONGO_URL: string,
      NODE_ENV: string
    }
}

dotenv.config()
const app = express()

app.get('/api/v1', (req, res) => {
    res.status(200).json({msg: "Hello"})
})

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}
app.use(express.json())

app.use('/api/v1/auth', authRouter)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`app listening at http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()