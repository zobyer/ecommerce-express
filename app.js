const express = require("express")
const cors = require("cors")
const app = express()

const corsOptions = {
    origin: "http://localhost:8081",
}

const {productRouter} = require("./app/routes");


app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

const db = require("./app/models")
db.sequelize.sync()

//=> ROUTING SETUP
//register routes
require("./app/routes/user.routes")(app)

// Product
app.use("/api/v1/product", productRouter)

// set port, listen for requests
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
