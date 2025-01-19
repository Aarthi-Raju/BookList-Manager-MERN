import express from "express";
import { PORT, mongoDbUrl } from "./config.js"
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors"

const app = express();

//Middleware for parsing requst body
app.use(express.json());

//Middleware for handling CORS policy
//Option 1: Allow All origins with default of cors(*)
app.use(cors());
//Option 2: Allow custom origins
// app.use(cors({
//     origin: "http://localhost:3000/",
//     methods: [ 'GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))

app.get("/", (req, res) => {
    return res.status(234).send({ message: "Welcome to MERN STACK BOOK STORE" })
})


app.use("/books", booksRoute)


mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("App connected to DataBase")
    //runs the app only if dataabse is connected successfully
    app.listen(PORT, () => {
        console.log(`App is Starting at http://localhost:${PORT}/`)
    })
}).catch((error) => {
    console.log(error)
})