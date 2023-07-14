import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({msg: "Hello"})
})

const port = 5000

app.listen(port, () => {
    console.log(`now listening on port ${port}`)
})