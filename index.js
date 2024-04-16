import express from "express"
import cors from "cors"
import routeById from "./routeById/routeById.js"
import routeAll from "./routeAll/routeAll.js"
import routeError from "./routeError/routeError.js"

let app = express()
app.use(express.json())
app.use(cors())

app.use(routeAll)
app.use(routeById)
app.use(routeError)

app.listen(3000,() => console.log("Server run"))