import 'express-async-errors'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import notFoundMiddleware from './middleware/not-found'
import errorHandlerMiddleware from './middleware/error-handler'
import connectDB from './db/connect'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import xss from 'xss-clean'
import cookieSession from 'cookie-session'

import authRouter from './routes/authRoutes'
import bookingRouter from './routes/bookingRouter'

import authenticateUser from './middleware/auth'
import passport from 'passport'
import './config/passport'
import cors from 'cors'
import bodyParser from 'body-parser'

declare const process : {
    env: {
      MONGO_URL: string,
      NODE_ENV: string,
      JWT_SECRET: string,
    }
}

dotenv.config()
const app = express()



if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}
//app.use(express.json())
app.use(bodyParser.json());
app.use(cookieParser())
app.use(helmet())
app.use(xss())

app.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: [process.env.JWT_SECRET],
    })
  );
// initialize passport
app.use(passport.initialize());
app.use(passport.session());


app.use('/api/v1/auth', cors(), authRouter)
app.use('/api/v1/booking', authenticateUser, bookingRouter)


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