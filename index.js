import express from 'express'
import {router} from './src/routes.js'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use('/api',router)


app.listen(port,() => {
    console.log(`server listening on port ${port}`)
})

