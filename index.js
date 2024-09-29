import express from 'express'
import {router} from './src/routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use('/api',router)


app.listen(port,() => {
    console.log(`server listening on port ${port}`)
})

