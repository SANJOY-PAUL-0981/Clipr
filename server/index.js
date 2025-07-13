require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { urlRouter } = require("./routes/trim")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/url", urlRouter)

const main = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000)
    console.log("Successfully Connected with Mongo")
    console.log("App is listening on port 3000")
}

main()