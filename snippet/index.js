import express from 'express'
import router from './routes/snippet.js'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))

app.use("/api/v1/snippet",router)

app.listen(8000,()=>{
    console.log("server is listening on port 8000")
})