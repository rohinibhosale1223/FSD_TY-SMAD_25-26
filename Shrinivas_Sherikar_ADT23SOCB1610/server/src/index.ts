import { configDotenv } from "dotenv"
configDotenv()
import express from "express"
const app = express()
const PORT = process.env.PORT
app.get("/",(req,res)=>{
    res.json({message:"Hello from DrawKit APIs!"})
})

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))