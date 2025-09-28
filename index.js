const express = require("express")
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const PORT = 8000
require("./connections")
const cors = require("cors")

app.use(cors())
const TestRoutes = require("./Routes/testRoutes")
const PatientRoutes = require("./Routes/patientsRoutes")

app.use("/test", TestRoutes)
app.use("/patient", PatientRoutes)

app.listen(PORT, () => {
    console.log(`local Host is running on port ${PORT}`)
})


// app.get("/", (req, res) => {
//     res.json({
//         "name": "Asfak",
//         "age": "26",
//         "place":"West Bengal"
//     })
// })